from concurrent import futures
import asyncio
import logging

import grpc
import asyncpg

import vault_pb2
import vault_pb2_grpc

logging.basicConfig()


async def list_vault():
    conn = await asyncpg.connect(user='hengda', password='srd@HD.1123',
            database='ovaphlow', host='192.168.1.246')
    result = await conn.fetch('''select * from himawari.vault order by id desc''')
    print(result)
    await conn.close()


class Vault(vault_pb2_grpc.VaultServicer):

    def list(self, request, context):
        print('list vault')

        nloop = asyncio.new_event_loop()
        asyncio.set_event_loop(nloop)
        asyncio.get_event_loop().run_until_complete(list_vault())

        return vault_pb2.VaultReply(data='123123123213')


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    vault_pb2_grpc.add_VaultServicer_to_server(Vault(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
