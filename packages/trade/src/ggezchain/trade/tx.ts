//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ggezchain.trade.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "ggezchain/x/trade/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ggezchain.trade.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/ggezchain.trade.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateTrade {
  creator: string;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  tradeData: string;
}
export interface MsgCreateTradeProtoMsg {
  typeUrl: "/ggezchain.trade.MsgCreateTrade";
  value: Uint8Array;
}
export interface MsgCreateTradeAmino {
  creator?: string;
  tradeType?: string;
  coin?: string;
  price?: string;
  quantity?: string;
  receiverAddress?: string;
  tradeData?: string;
}
export interface MsgCreateTradeAminoMsg {
  type: "/ggezchain.trade.MsgCreateTrade";
  value: MsgCreateTradeAmino;
}
export interface MsgCreateTradeSDKType {
  creator: string;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  tradeData: string;
}
export interface MsgCreateTradeResponse {
  tradeIndex: bigint;
  status: string;
}
export interface MsgCreateTradeResponseProtoMsg {
  typeUrl: "/ggezchain.trade.MsgCreateTradeResponse";
  value: Uint8Array;
}
export interface MsgCreateTradeResponseAmino {
  tradeIndex?: string;
  status?: string;
}
export interface MsgCreateTradeResponseAminoMsg {
  type: "/ggezchain.trade.MsgCreateTradeResponse";
  value: MsgCreateTradeResponseAmino;
}
export interface MsgCreateTradeResponseSDKType {
  tradeIndex: bigint;
  status: string;
}
export interface MsgProcessTrade {
  creator: string;
  processType: string;
  tradeIndex: bigint;
}
export interface MsgProcessTradeProtoMsg {
  typeUrl: "/ggezchain.trade.MsgProcessTrade";
  value: Uint8Array;
}
export interface MsgProcessTradeAmino {
  creator?: string;
  processType?: string;
  tradeIndex?: string;
}
export interface MsgProcessTradeAminoMsg {
  type: "/ggezchain.trade.MsgProcessTrade";
  value: MsgProcessTradeAmino;
}
export interface MsgProcessTradeSDKType {
  creator: string;
  processType: string;
  tradeIndex: bigint;
}
export interface MsgProcessTradeResponse {
  tradeIndex: bigint;
  status: string;
  checker: string;
  maker: string;
  tradeData: string;
  createDate: string;
  updateDate: string;
  processDate: string;
}
export interface MsgProcessTradeResponseProtoMsg {
  typeUrl: "/ggezchain.trade.MsgProcessTradeResponse";
  value: Uint8Array;
}
export interface MsgProcessTradeResponseAmino {
  tradeIndex?: string;
  status?: string;
  checker?: string;
  maker?: string;
  tradeData?: string;
  createDate?: string;
  updateDate?: string;
  processDate?: string;
}
export interface MsgProcessTradeResponseAminoMsg {
  type: "/ggezchain.trade.MsgProcessTradeResponse";
  value: MsgProcessTradeResponseAmino;
}
export interface MsgProcessTradeResponseSDKType {
  tradeIndex: bigint;
  status: string;
  checker: string;
  maker: string;
  tradeData: string;
  createDate: string;
  updateDate: string;
  processDate: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/ggezchain.trade.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "ggezchain/x/trade/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/ggezchain.trade.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTrade(): MsgCreateTrade {
  return {
    creator: "",
    tradeType: "",
    coin: "",
    price: "",
    quantity: "",
    receiverAddress: "",
    tradeData: ""
  };
}
export const MsgCreateTrade = {
  typeUrl: "/ggezchain.trade.MsgCreateTrade",
  encode(message: MsgCreateTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    if (message.tradeData !== "") {
      writer.uint32(58).string(message.tradeData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
          message.tradeData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateTrade>): MsgCreateTrade {
    const message = createBaseMsgCreateTrade();
    message.creator = object.creator ?? "";
    message.tradeType = object.tradeType ?? "";
    message.coin = object.coin ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.tradeData = object.tradeData ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTradeAmino): MsgCreateTrade {
    const message = createBaseMsgCreateTrade();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
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
    if (object.tradeData !== undefined && object.tradeData !== null) {
      message.tradeData = object.tradeData;
    }
    return message;
  },
  toAmino(message: MsgCreateTrade): MsgCreateTradeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tradeType = message.tradeType === "" ? undefined : message.tradeType;
    obj.coin = message.coin === "" ? undefined : message.coin;
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.receiverAddress = message.receiverAddress === "" ? undefined : message.receiverAddress;
    obj.tradeData = message.tradeData === "" ? undefined : message.tradeData;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTradeAminoMsg): MsgCreateTrade {
    return MsgCreateTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTradeProtoMsg): MsgCreateTrade {
    return MsgCreateTrade.decode(message.value);
  },
  toProto(message: MsgCreateTrade): Uint8Array {
    return MsgCreateTrade.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTrade): MsgCreateTradeProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.MsgCreateTrade",
      value: MsgCreateTrade.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTradeResponse(): MsgCreateTradeResponse {
  return {
    tradeIndex: BigInt(0),
    status: ""
  };
}
export const MsgCreateTradeResponse = {
  typeUrl: "/ggezchain.trade.MsgCreateTradeResponse",
  encode(message: MsgCreateTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.uint64();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateTradeResponse>): MsgCreateTradeResponse {
    const message = createBaseMsgCreateTradeResponse();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTradeResponseAmino): MsgCreateTradeResponse {
    const message = createBaseMsgCreateTradeResponse();
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgCreateTradeResponse): MsgCreateTradeResponseAmino {
    const obj: any = {};
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTradeResponseAminoMsg): MsgCreateTradeResponse {
    return MsgCreateTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTradeResponseProtoMsg): MsgCreateTradeResponse {
    return MsgCreateTradeResponse.decode(message.value);
  },
  toProto(message: MsgCreateTradeResponse): Uint8Array {
    return MsgCreateTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTradeResponse): MsgCreateTradeResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.MsgCreateTradeResponse",
      value: MsgCreateTradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProcessTrade(): MsgProcessTrade {
  return {
    creator: "",
    processType: "",
    tradeIndex: BigInt(0)
  };
}
export const MsgProcessTrade = {
  typeUrl: "/ggezchain.trade.MsgProcessTrade",
  encode(message: MsgProcessTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.processType !== "") {
      writer.uint32(18).string(message.processType);
    }
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(24).uint64(message.tradeIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.processType = reader.string();
          break;
        case 3:
          message.tradeIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProcessTrade>): MsgProcessTrade {
    const message = createBaseMsgProcessTrade();
    message.creator = object.creator ?? "";
    message.processType = object.processType ?? "";
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgProcessTradeAmino): MsgProcessTrade {
    const message = createBaseMsgProcessTrade();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.processType !== undefined && object.processType !== null) {
      message.processType = object.processType;
    }
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    return message;
  },
  toAmino(message: MsgProcessTrade): MsgProcessTradeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.processType = message.processType === "" ? undefined : message.processType;
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgProcessTradeAminoMsg): MsgProcessTrade {
    return MsgProcessTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProcessTradeProtoMsg): MsgProcessTrade {
    return MsgProcessTrade.decode(message.value);
  },
  toProto(message: MsgProcessTrade): Uint8Array {
    return MsgProcessTrade.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessTrade): MsgProcessTradeProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.MsgProcessTrade",
      value: MsgProcessTrade.encode(message).finish()
    };
  }
};
function createBaseMsgProcessTradeResponse(): MsgProcessTradeResponse {
  return {
    tradeIndex: BigInt(0),
    status: "",
    checker: "",
    maker: "",
    tradeData: "",
    createDate: "",
    updateDate: "",
    processDate: ""
  };
}
export const MsgProcessTradeResponse = {
  typeUrl: "/ggezchain.trade.MsgProcessTradeResponse",
  encode(message: MsgProcessTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.checker !== "") {
      writer.uint32(26).string(message.checker);
    }
    if (message.maker !== "") {
      writer.uint32(34).string(message.maker);
    }
    if (message.tradeData !== "") {
      writer.uint32(42).string(message.tradeData);
    }
    if (message.createDate !== "") {
      writer.uint32(50).string(message.createDate);
    }
    if (message.updateDate !== "") {
      writer.uint32(58).string(message.updateDate);
    }
    if (message.processDate !== "") {
      writer.uint32(66).string(message.processDate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.uint64();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.checker = reader.string();
          break;
        case 4:
          message.maker = reader.string();
          break;
        case 5:
          message.tradeData = reader.string();
          break;
        case 6:
          message.createDate = reader.string();
          break;
        case 7:
          message.updateDate = reader.string();
          break;
        case 8:
          message.processDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProcessTradeResponse>): MsgProcessTradeResponse {
    const message = createBaseMsgProcessTradeResponse();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    message.status = object.status ?? "";
    message.checker = object.checker ?? "";
    message.maker = object.maker ?? "";
    message.tradeData = object.tradeData ?? "";
    message.createDate = object.createDate ?? "";
    message.updateDate = object.updateDate ?? "";
    message.processDate = object.processDate ?? "";
    return message;
  },
  fromAmino(object: MsgProcessTradeResponseAmino): MsgProcessTradeResponse {
    const message = createBaseMsgProcessTradeResponse();
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.checker !== undefined && object.checker !== null) {
      message.checker = object.checker;
    }
    if (object.maker !== undefined && object.maker !== null) {
      message.maker = object.maker;
    }
    if (object.tradeData !== undefined && object.tradeData !== null) {
      message.tradeData = object.tradeData;
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
    return message;
  },
  toAmino(message: MsgProcessTradeResponse): MsgProcessTradeResponseAmino {
    const obj: any = {};
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    obj.status = message.status === "" ? undefined : message.status;
    obj.checker = message.checker === "" ? undefined : message.checker;
    obj.maker = message.maker === "" ? undefined : message.maker;
    obj.tradeData = message.tradeData === "" ? undefined : message.tradeData;
    obj.createDate = message.createDate === "" ? undefined : message.createDate;
    obj.updateDate = message.updateDate === "" ? undefined : message.updateDate;
    obj.processDate = message.processDate === "" ? undefined : message.processDate;
    return obj;
  },
  fromAminoMsg(object: MsgProcessTradeResponseAminoMsg): MsgProcessTradeResponse {
    return MsgProcessTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProcessTradeResponseProtoMsg): MsgProcessTradeResponse {
    return MsgProcessTradeResponse.decode(message.value);
  },
  toProto(message: MsgProcessTradeResponse): Uint8Array {
    return MsgProcessTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessTradeResponse): MsgProcessTradeResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.MsgProcessTradeResponse",
      value: MsgProcessTradeResponse.encode(message).finish()
    };
  }
};