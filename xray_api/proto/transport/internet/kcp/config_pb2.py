# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: transport/internet/kcp/config.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from xray_api.proto.common.serial import typed_message_pb2 as common_dot_serial_dot_typed__message__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n#transport/internet/kcp/config.proto\x12\x1bxray.transport.internet.kcp\x1a!common/serial/typed_message.proto\"\x14\n\x03MTU\x12\r\n\x05value\x18\x01 \x01(\r\"\x14\n\x03TTI\x12\r\n\x05value\x18\x01 \x01(\r\"\x1f\n\x0eUplinkCapacity\x12\r\n\x05value\x18\x01 \x01(\r\"!\n\x10\x44ownlinkCapacity\x12\r\n\x05value\x18\x01 \x01(\r\"\x1b\n\x0bWriteBuffer\x12\x0c\n\x04size\x18\x01 \x01(\r\"\x1a\n\nReadBuffer\x12\x0c\n\x04size\x18\x01 \x01(\r\"!\n\x0f\x43onnectionReuse\x12\x0e\n\x06\x65nable\x18\x01 \x01(\x08\"\x1e\n\x0e\x45ncryptionSeed\x12\x0c\n\x04seed\x18\x01 \x01(\t\"\x82\x04\n\x06\x43onfig\x12-\n\x03mtu\x18\x01 \x01(\x0b\x32 .xray.transport.internet.kcp.MTU\x12-\n\x03tti\x18\x02 \x01(\x0b\x32 .xray.transport.internet.kcp.TTI\x12\x44\n\x0fuplink_capacity\x18\x03 \x01(\x0b\x32+.xray.transport.internet.kcp.UplinkCapacity\x12H\n\x11\x64ownlink_capacity\x18\x04 \x01(\x0b\x32-.xray.transport.internet.kcp.DownlinkCapacity\x12\x12\n\ncongestion\x18\x05 \x01(\x08\x12>\n\x0cwrite_buffer\x18\x06 \x01(\x0b\x32(.xray.transport.internet.kcp.WriteBuffer\x12<\n\x0bread_buffer\x18\x07 \x01(\x0b\x32\'.xray.transport.internet.kcp.ReadBuffer\x12\x37\n\rheader_config\x18\x08 \x01(\x0b\x32 .xray.common.serial.TypedMessage\x12\x39\n\x04seed\x18\n \x01(\x0b\x32+.xray.transport.internet.kcp.EncryptionSeedJ\x04\x08\t\x10\nBs\n\x1f\x63om.xray.transport.internet.kcpP\x01Z0github.com/xtls/xray-core/transport/internet/kcp\xaa\x02\x1bXray.Transport.Internet.Kcpb\x06proto3')



_MTU = DESCRIPTOR.message_types_by_name['MTU']
_TTI = DESCRIPTOR.message_types_by_name['TTI']
_UPLINKCAPACITY = DESCRIPTOR.message_types_by_name['UplinkCapacity']
_DOWNLINKCAPACITY = DESCRIPTOR.message_types_by_name['DownlinkCapacity']
_WRITEBUFFER = DESCRIPTOR.message_types_by_name['WriteBuffer']
_READBUFFER = DESCRIPTOR.message_types_by_name['ReadBuffer']
_CONNECTIONREUSE = DESCRIPTOR.message_types_by_name['ConnectionReuse']
_ENCRYPTIONSEED = DESCRIPTOR.message_types_by_name['EncryptionSeed']
_CONFIG = DESCRIPTOR.message_types_by_name['Config']
MTU = _reflection.GeneratedProtocolMessageType('MTU', (_message.Message,), {
  'DESCRIPTOR' : _MTU,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.MTU)
  })
_sym_db.RegisterMessage(MTU)

TTI = _reflection.GeneratedProtocolMessageType('TTI', (_message.Message,), {
  'DESCRIPTOR' : _TTI,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.TTI)
  })
_sym_db.RegisterMessage(TTI)

UplinkCapacity = _reflection.GeneratedProtocolMessageType('UplinkCapacity', (_message.Message,), {
  'DESCRIPTOR' : _UPLINKCAPACITY,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.UplinkCapacity)
  })
_sym_db.RegisterMessage(UplinkCapacity)

DownlinkCapacity = _reflection.GeneratedProtocolMessageType('DownlinkCapacity', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLINKCAPACITY,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.DownlinkCapacity)
  })
_sym_db.RegisterMessage(DownlinkCapacity)

WriteBuffer = _reflection.GeneratedProtocolMessageType('WriteBuffer', (_message.Message,), {
  'DESCRIPTOR' : _WRITEBUFFER,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.WriteBuffer)
  })
_sym_db.RegisterMessage(WriteBuffer)

ReadBuffer = _reflection.GeneratedProtocolMessageType('ReadBuffer', (_message.Message,), {
  'DESCRIPTOR' : _READBUFFER,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.ReadBuffer)
  })
_sym_db.RegisterMessage(ReadBuffer)

ConnectionReuse = _reflection.GeneratedProtocolMessageType('ConnectionReuse', (_message.Message,), {
  'DESCRIPTOR' : _CONNECTIONREUSE,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.ConnectionReuse)
  })
_sym_db.RegisterMessage(ConnectionReuse)

EncryptionSeed = _reflection.GeneratedProtocolMessageType('EncryptionSeed', (_message.Message,), {
  'DESCRIPTOR' : _ENCRYPTIONSEED,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.EncryptionSeed)
  })
_sym_db.RegisterMessage(EncryptionSeed)

Config = _reflection.GeneratedProtocolMessageType('Config', (_message.Message,), {
  'DESCRIPTOR' : _CONFIG,
  '__module__' : 'transport.internet.kcp.config_pb2'
  # @@protoc_insertion_point(class_scope:xray.transport.internet.kcp.Config)
  })
_sym_db.RegisterMessage(Config)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\037com.xray.transport.internet.kcpP\001Z0github.com/xtls/xray-core/transport/internet/kcp\252\002\033Xray.Transport.Internet.Kcp'
  _MTU._serialized_start=103
  _MTU._serialized_end=123
  _TTI._serialized_start=125
  _TTI._serialized_end=145
  _UPLINKCAPACITY._serialized_start=147
  _UPLINKCAPACITY._serialized_end=178
  _DOWNLINKCAPACITY._serialized_start=180
  _DOWNLINKCAPACITY._serialized_end=213
  _WRITEBUFFER._serialized_start=215
  _WRITEBUFFER._serialized_end=242
  _READBUFFER._serialized_start=244
  _READBUFFER._serialized_end=270
  _CONNECTIONREUSE._serialized_start=272
  _CONNECTIONREUSE._serialized_end=305
  _ENCRYPTIONSEED._serialized_start=307
  _ENCRYPTIONSEED._serialized_end=337
  _CONFIG._serialized_start=340
  _CONFIG._serialized_end=854
# @@protoc_insertion_point(module_scope)
