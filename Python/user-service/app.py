from concurrent import futures
import json
import logging

import grpc
import psycopg2
from psycopg2 import pool
from psycopg2.extras import DictCursor

import helloworld_pb2
import helloworld_pb2_grpc
import current_user_pb2
import current_user_pb2_grpc
import setting_pb2
import setting_pb2_grpc

postgres = None
try:
    # postgres = pool.SimpleConnectionPool(8, 8, host='192.168.1.223', port=5432,
    postgres = pool.ThreadedConnectionPool(4, 4, host='192.168.1.223', port=5432,
            user='ovaphlow', password='', database='ovaphlow')
            # keepalives=1,
            # keepalives_idle=30, keepalives_interval=10,
            # keepalives_count=5)
except Exception as e:
    print(e)


class Greeter(helloworld_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        return helloworld_pb2.HelloReply(message='Hello, %s!' % request.name)


class CurrentUser(current_user_pb2_grpc.CurrentUserServiceServicer):

    def SignIn(self, request, context):
        print(request.username)
        cnx = postgres.getconn()
        cur = cnx.cursor(cursor_factory=DictCursor)
        cur.execute('''
            select * from himawari.user where username = %s
        ''', (request.username,))
        result = cur.fetchone()
        print(result)
        cur.close()
        postgres.putconn(cnx, close=True)
        resp = {}
        resp['message'] = ''
        resp['content'] = dict(result)
        print(json.dumps(resp))
        return current_user_pb2.Reply(data=json.dumps(resp))


class Setting(setting_pb2_grpc.SettingServiceServicer):

    def List(self, request, context):
        cnx = postgres.getconn()
        cur = cnx.cursor(cursor_factory=DictCursor)
        cur.execute('''
            select * from himawari.setting where master_id = 0 and category = %s
        ''', (request.cat,))
        result = cur.fetchall()
        cur.close()
        postgres.putconn(cnx, close=True)
        # print(result)
        resp = {}
        resp['message'] = ''
        resp['content'] = [ dict(it) for it in result ]
        return setting_pb2.Reply(data=json.dumps(resp))


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    helloworld_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    current_user_pb2_grpc.add_CurrentUserServiceServicer_to_server(CurrentUser(), server)
    setting_pb2_grpc.add_SettingServiceServicer_to_server(Setting(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
