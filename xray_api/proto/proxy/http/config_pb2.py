# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proxy/http/config.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from xray_api.proto.common.protocol import server_spec_pb2 as common_dot_protocol_dot_server__spec__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17proxy/http/config.proto\x12\x0fxray.proxy.http\x1a!common/protocol/server_spec.proto\"-\n\x07\x41\x63\x63ount\x12\x10\n\x08username\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\"\xc2\x01\n\x0cServerConfig\x12\x13\n\x07timeout\x18\x01 \x01(\rB\x02\x18\x01\x12=\n\x08\x61\x63\x63ounts\x18\x02 \x03(\x0b\x32+.xray.proxy.http.ServerConfig.AccountsEntry\x12\x19\n\x11\x61llow_transparent\x18\x03 \x01(\x08\x12\x12\n\nuser_level\x18\x04 \x01(\r\x1a/\n\rAccountsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"D\n\x0c\x43lientConfig\x12\x34\n\x06server\x18\x01 \x03(\x0b\x32$.xray.common.protocol.ServerEndpointBO\n\x13\x63om.xray.proxy.httpP\x01Z$github.com/xtls/xray-core/proxy/http\xaa\x02\x0fXray.Proxy.Httpb\x06proto3')



_ACCOUNT = DESCRIPTOR.message_types_by_name['Account']
_SERVERCONFIG = DESCRIPTOR.message_types_by_name['ServerConfig']
_SERVERCONFIG_ACCOUNTSENTRY = _SERVERCONFIG.nested_types_by_name['AccountsEntry']
_CLIENTCONFIG = DESCRIPTOR.message_types_by_name['ClientConfig']
Account = _reflection.GeneratedProtocolMessageType('Account', (_message.Message,), {
  'DESCRIPTOR' : _ACCOUNT,
  '__module__' : 'proxy.http.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.proxy.http.Account)
  })
_sym_db.RegisterMessage(Account)

ServerConfig = _reflection.GeneratedProtocolMessageType('ServerConfig', (_message.Message,), {

  'AccountsEntry' : _reflection.GeneratedProtocolMessageType('AccountsEntry', (_message.Message,), {
    'DESCRIPTOR' : _SERVERCONFIG_ACCOUNTSENTRY,
    '__module__' : 'proxy.http.config_pb2'
    # @@protoc_insertion_point(class_scope:xray.proxy.http.ServerConfig.AccountsEntry)
    })
  ,
  'DESCRIPTOR' : _SERVERCONFIG,
  '__module__' : 'proxy.http.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.proxy.http.ServerConfig)
  })
_sym_db.RegisterMessage(ServerConfig)
_sym_db.RegisterMessage(ServerConfig.AccountsEntry)

ClientConfig = _reflection.GeneratedProtocolMessageType('ClientConfig', (_message.Message,), {
  'DESCRIPTOR' : _CLIENTCONFIG,
  '__module__' : 'proxy.http.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.proxy.http.ClientConfig)
  })
_sym_db.RegisterMessage(ClientConfig)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\023com.xray.proxy.httpP\001Z$github.com/xtls/xray-core/proxy/http\252\002\017Xray.Proxy.Http'
  _SERVERCONFIG_ACCOUNTSENTRY._options = None
  _SERVERCONFIG_ACCOUNTSENTRY._serialized_options = b'8\001'
  _SERVERCONFIG.fields_by_name['timeout']._options = None
  _SERVERCONFIG.fields_by_name['timeout']._serialized_options = b'\030\001'
  _ACCOUNT._serialized_start=79
  _ACCOUNT._serialized_end=124
  _SERVERCONFIG._serialized_start=127
  _SERVERCONFIG._serialized_end=321
  _SERVERCONFIG_ACCOUNTSENTRY._serialized_start=274
  _SERVERCONFIG_ACCOUNTSENTRY._serialized_end=321
  _CLIENTCONFIG._serialized_start=323
  _CLIENTCONFIG._serialized_end=391
# @@protoc_insertion_point(module_scope)
