import asyncio
import logging

import asyncpg

import vault_pb2
import vault_pb2_grpc

logger = logging.getLogger('data-service.vault')

pool = ''


# async def init_pool():
    # pool = await asyncpg.create_pool(user='hengda', password='srd@HD.1123',
    #           host='192.168.1.246', database='ovaphlow', command_timeout=60)
# init_pool()


async with asyncpg.create_pool(user='hengda', password='srd@HD.1123',
          host='192.168.1.246', database='ovaphlow', command_timeout=60)


async def list_vault():
    # conn = await asyncpg.connect(user='hengda', password='srd@HD.1123',
    #         database='ovaphlow', host='192.168.1.246')
    # result = await conn.fetch('''select * from himawari.vault order by id desc''')
    # logger.info(result)
    # await conn.close()
    conn = await pool.acquire()
    try:
        result = await conn.fetch('''select * from himawari.vault order by id desc''')
    finally:
        await pool.release(conn)


# class Vault(vault_pb2_grpc.VaultServicer):

#     def list(self, request, context):
#         logger.info('list vault')

#         nloop = asyncio.new_event_loop()
#         asyncio.set_event_loop(nloop)
#         asyncio.get_event_loop().run_until_complete(list_vault())

#         return vault_pb2.VaultReply(data='123123123213')
