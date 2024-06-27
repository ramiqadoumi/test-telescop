//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface StoredTempTrade {
  tradeIndex: bigint;
  tempTradeIndex: bigint;
  createDate: string;
}
export interface StoredTempTradeProtoMsg {
  typeUrl: "/ggezchain.trade.StoredTempTrade";
  value: Uint8Array;
}
export interface StoredTempTradeAmino {
  tradeIndex?: string;
  tempTradeIndex?: string;
  createDate?: string;
}
export interface StoredTempTradeAminoMsg {
  type: "/ggezchain.trade.StoredTempTrade";
  value: StoredTempTradeAmino;
}
export interface StoredTempTradeSDKType {
  tradeIndex: bigint;
  tempTradeIndex: bigint;
  createDate: string;
}
function createBaseStoredTempTrade(): StoredTempTrade {
  return {
    tradeIndex: BigInt(0),
    tempTradeIndex: BigInt(0),
    createDate: ""
  };
}
export const StoredTempTrade = {
  typeUrl: "/ggezchain.trade.StoredTempTrade",
  encode(message: StoredTempTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.tempTradeIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.tempTradeIndex);
    }
    if (message.createDate !== "") {
      writer.uint32(26).string(message.createDate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoredTempTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredTempTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.uint64();
          break;
        case 2:
          message.tempTradeIndex = reader.uint64();
          break;
        case 3:
          message.createDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoredTempTrade>): StoredTempTrade {
    const message = createBaseStoredTempTrade();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    message.tempTradeIndex = object.tempTradeIndex !== undefined && object.tempTradeIndex !== null ? BigInt(object.tempTradeIndex.toString()) : BigInt(0);
    message.createDate = object.createDate ?? "";
    return message;
  },
  fromAmino(object: StoredTempTradeAmino): StoredTempTrade {
    const message = createBaseStoredTempTrade();
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    if (object.tempTradeIndex !== undefined && object.tempTradeIndex !== null) {
      message.tempTradeIndex = BigInt(object.tempTradeIndex);
    }
    if (object.createDate !== undefined && object.createDate !== null) {
      message.createDate = object.createDate;
    }
    return message;
  },
  toAmino(message: StoredTempTrade): StoredTempTradeAmino {
    const obj: any = {};
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    obj.tempTradeIndex = message.tempTradeIndex !== BigInt(0) ? message.tempTradeIndex.toString() : undefined;
    obj.createDate = message.createDate === "" ? undefined : message.createDate;
    return obj;
  },
  fromAminoMsg(object: StoredTempTradeAminoMsg): StoredTempTrade {
    return StoredTempTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: StoredTempTradeProtoMsg): StoredTempTrade {
    return StoredTempTrade.decode(message.value);
  },
  toProto(message: StoredTempTrade): Uint8Array {
    return StoredTempTrade.encode(message).finish();
  },
  toProtoMsg(message: StoredTempTrade): StoredTempTradeProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.StoredTempTrade",
      value: StoredTempTrade.encode(message).finish()
    };
  }
};