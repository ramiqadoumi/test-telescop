//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface StoredTrade {
  tradeIndex: bigint;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  status: string;
  maker: string;
  checker: string;
  createDate: string;
  updateDate: string;
  processDate: string;
  tradeData: string;
  result: string;
}
export interface StoredTradeProtoMsg {
  typeUrl: "/ggezchain.trade.StoredTrade";
  value: Uint8Array;
}
export interface StoredTradeAmino {
  tradeIndex?: string;
  tradeType?: string;
  coin?: string;
  price?: string;
  quantity?: string;
  receiverAddress?: string;
  status?: string;
  maker?: string;
  checker?: string;
  createDate?: string;
  updateDate?: string;
  processDate?: string;
  tradeData?: string;
  result?: string;
}
export interface StoredTradeAminoMsg {
  type: "/ggezchain.trade.StoredTrade";
  value: StoredTradeAmino;
}
export interface StoredTradeSDKType {
  tradeIndex: bigint;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  status: string;
  maker: string;
  checker: string;
  createDate: string;
  updateDate: string;
  processDate: string;
  tradeData: string;
  result: string;
}
function createBaseStoredTrade(): StoredTrade {
  return {
    tradeIndex: BigInt(0),
    tradeType: "",
    coin: "",
    price: "",
    quantity: "",
    receiverAddress: "",
    status: "",
    maker: "",
    checker: "",
    createDate: "",
    updateDate: "",
    processDate: "",
    tradeData: "",
    result: ""
  };
}
export const StoredTrade = {
  typeUrl: "/ggezchain.trade.StoredTrade",
  encode(message: StoredTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.tradeType !== "") {
      writer.uint32(18).string(message.tradeType);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(42).string(message.quantity);
    }
    if (message.receiverAddress !== "") {
      writer.uint32(50).string(message.receiverAddress);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.maker !== "") {
      writer.uint32(66).string(message.maker);
    }
    if (message.checker !== "") {
      writer.uint32(74).string(message.checker);
    }
    if (message.createDate !== "") {
      writer.uint32(82).string(message.createDate);
    }
    if (message.updateDate !== "") {
      writer.uint32(90).string(message.updateDate);
    }
    if (message.processDate !== "") {
      writer.uint32(98).string(message.processDate);
    }
    if (message.tradeData !== "") {
      writer.uint32(106).string(message.tradeData);
    }
    if (message.result !== "") {
      writer.uint32(114).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoredTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.uint64();
          break;
        case 2:
          message.tradeType = reader.string();
          break;
        case 3:
          message.coin = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.quantity = reader.string();
          break;
        case 6:
          message.receiverAddress = reader.string();
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.maker = reader.string();
          break;
        case 9:
          message.checker = reader.string();
          break;
        case 10:
          message.createDate = reader.string();
          break;
        case 11:
          message.updateDate = reader.string();
          break;
        case 12:
          message.processDate = reader.string();
          break;
        case 13:
          message.tradeData = reader.string();
          break;
        case 14:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoredTrade>): StoredTrade {
    const message = createBaseStoredTrade();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    message.tradeType = object.tradeType ?? "";
    message.coin = object.coin ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.status = object.status ?? "";
    message.maker = object.maker ?? "";
    message.checker = object.checker ?? "";
    message.createDate = object.createDate ?? "";
    message.updateDate = object.updateDate ?? "";
    message.processDate = object.processDate ?? "";
    message.tradeData = object.tradeData ?? "";
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: StoredTradeAmino): StoredTrade {
    const message = createBaseStoredTrade();
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    if (object.tradeType !== undefined && object.tradeType !== null) {
      message.tradeType = object.tradeType;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = object.coin;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.receiverAddress !== undefined && object.receiverAddress !== null) {
      message.receiverAddress = object.receiverAddress;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.maker !== undefined && object.maker !== null) {
      message.maker = object.maker;
    }
    if (object.checker !== undefined && object.checker !== null) {
      message.checker = object.checker;
    }
    if (object.createDate !== undefined && object.createDate !== null) {
      message.createDate = object.createDate;
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = object.updateDate;
    }
    if (object.processDate !== undefined && object.processDate !== null) {
      message.processDate = object.processDate;
    }
    if (object.tradeData !== undefined && object.tradeData !== null) {
      message.tradeData = object.tradeData;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: StoredTrade): StoredTradeAmino {
    const obj: any = {};
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    obj.tradeType = message.tradeType === "" ? undefined : message.tradeType;
    obj.coin = message.coin === "" ? undefined : message.coin;
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.receiverAddress = message.receiverAddress === "" ? undefined : message.receiverAddress;
    obj.status = message.status === "" ? undefined : message.status;
    obj.maker = message.maker === "" ? undefined : message.maker;
    obj.checker = message.checker === "" ? undefined : message.checker;
    obj.createDate = message.createDate === "" ? undefined : message.createDate;
    obj.updateDate = message.updateDate === "" ? undefined : message.updateDate;
    obj.processDate = message.processDate === "" ? undefined : message.processDate;
    obj.tradeData = message.tradeData === "" ? undefined : message.tradeData;
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: StoredTradeAminoMsg): StoredTrade {
    return StoredTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: StoredTradeProtoMsg): StoredTrade {
    return StoredTrade.decode(message.value);
  },
  toProto(message: StoredTrade): Uint8Array {
    return StoredTrade.encode(message).finish();
  },
  toProtoMsg(message: StoredTrade): StoredTradeProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.StoredTrade",
      value: StoredTrade.encode(message).finish()
    };
  }
};