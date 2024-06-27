//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface TradeIndex {
  nextId: bigint;
}
export interface TradeIndexProtoMsg {
  typeUrl: "/ggezchain.trade.TradeIndex";
  value: Uint8Array;
}
export interface TradeIndexAmino {
  nextId?: string;
}
export interface TradeIndexAminoMsg {
  type: "/ggezchain.trade.TradeIndex";
  value: TradeIndexAmino;
}
export interface TradeIndexSDKType {
  nextId: bigint;
}
function createBaseTradeIndex(): TradeIndex {
  return {
    nextId: BigInt(0)
  };
}
export const TradeIndex = {
  typeUrl: "/ggezchain.trade.TradeIndex",
  encode(message: TradeIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradeIndex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradeIndex>): TradeIndex {
    const message = createBaseTradeIndex();
    message.nextId = object.nextId !== undefined && object.nextId !== null ? BigInt(object.nextId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TradeIndexAmino): TradeIndex {
    const message = createBaseTradeIndex();
    if (object.nextId !== undefined && object.nextId !== null) {
      message.nextId = BigInt(object.nextId);
    }
    return message;
  },
  toAmino(message: TradeIndex): TradeIndexAmino {
    const obj: any = {};
    obj.nextId = message.nextId !== BigInt(0) ? message.nextId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TradeIndexAminoMsg): TradeIndex {
    return TradeIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeIndexProtoMsg): TradeIndex {
    return TradeIndex.decode(message.value);
  },
  toProto(message: TradeIndex): Uint8Array {
    return TradeIndex.encode(message).finish();
  },
  toProtoMsg(message: TradeIndex): TradeIndexProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.TradeIndex",
      value: TradeIndex.encode(message).finish()
    };
  }
};