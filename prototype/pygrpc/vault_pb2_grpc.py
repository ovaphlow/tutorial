# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import vault_pb2 as vault__pb2


class VaultStub(object):
    """Missing associated documentation comment in .proto file"""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.list = channel.unary_unary(
                '/vault.Vault/list',
                request_serializer=vault__pb2.VaultRequest.SerializeToString,
                response_deserializer=vault__pb2.VaultReply.FromString,
                )
        self.save = channel.unary_unary(
                '/vault.Vault/save',
                request_serializer=vault__pb2.VaultRequest.SerializeToString,
                response_deserializer=vault__pb2.VaultReply.FromString,
                )
        self.get = channel.unary_unary(
                '/vault.Vault/get',
                request_serializer=vault__pb2.VaultRequest.SerializeToString,
                response_deserializer=vault__pb2.VaultReply.FromString,
                )
        self.update = channel.unary_unary(
                '/vault.Vault/update',
                request_serializer=vault__pb2.VaultRequest.SerializeToString,
                response_deserializer=vault__pb2.VaultReply.FromString,
                )
        self.remove = channel.unary_unary(
                '/vault.Vault/remove',
                request_serializer=vault__pb2.VaultRequest.SerializeToString,
                response_deserializer=vault__pb2.VaultReply.FromString,
                )


class VaultServicer(object):
    """Missing associated documentation comment in .proto file"""

    def list(self, request, context):
        """Missing associated documentation comment in .proto file"""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def save(self, request, context):
        """Missing associated documentation comment in .proto file"""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def get(self, request, context):
        """Missing associated documentation comment in .proto file"""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def update(self, request, context):
        """Missing associated documentation comment in .proto file"""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def remove(self, request, context):
        """Missing associated documentation comment in .proto file"""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_VaultServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'list': grpc.unary_unary_rpc_method_handler(
                    servicer.list,
                    request_deserializer=vault__pb2.VaultRequest.FromString,
                    response_serializer=vault__pb2.VaultReply.SerializeToString,
            ),
            'save': grpc.unary_unary_rpc_method_handler(
                    servicer.save,
                    request_deserializer=vault__pb2.VaultRequest.FromString,
                    response_serializer=vault__pb2.VaultReply.SerializeToString,
            ),
            'get': grpc.unary_unary_rpc_method_handler(
                    servicer.get,
                    request_deserializer=vault__pb2.VaultRequest.FromString,
                    response_serializer=vault__pb2.VaultReply.SerializeToString,
            ),
            'update': grpc.unary_unary_rpc_method_handler(
                    servicer.update,
                    request_deserializer=vault__pb2.VaultRequest.FromString,
                    response_serializer=vault__pb2.VaultReply.SerializeToString,
            ),
            'remove': grpc.unary_unary_rpc_method_handler(
                    servicer.remove,
                    request_deserializer=vault__pb2.VaultRequest.FromString,
                    response_serializer=vault__pb2.VaultReply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'vault.Vault', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Vault(object):
    """Missing associated documentation comment in .proto file"""

    @staticmethod
    def list(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/vault.Vault/list',
            vault__pb2.VaultRequest.SerializeToString,
            vault__pb2.VaultReply.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def save(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/vault.Vault/save',
            vault__pb2.VaultRequest.SerializeToString,
            vault__pb2.VaultReply.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def get(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/vault.Vault/get',
            vault__pb2.VaultRequest.SerializeToString,
            vault__pb2.VaultReply.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def update(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/vault.Vault/update',
            vault__pb2.VaultRequest.SerializeToString,
            vault__pb2.VaultReply.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def remove(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/vault.Vault/remove',
            vault__pb2.VaultRequest.SerializeToString,
            vault__pb2.VaultReply.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)