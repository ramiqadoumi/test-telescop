//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TradeIndex, TradeIndexAmino, TradeIndexSDKType } from "./trade_index";
import { StoredTrade, StoredTradeAmino, StoredTradeSDKType } from "./stored_trade";
import { StoredTempTrade, StoredTempTradeAmino, StoredTempTradeSDKType } from "./stored_temp_trade";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ggezchain.trade.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/ggezchain.trade.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ggezchain.trade.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/ggezchain.trade.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetTradeIndexRequest {}
export interface QueryGetTradeIndexRequestProtoMsg {
  typeUrl: "/ggezchain.trade.QueryGetTradeIndexRequest";
  value: Uint8Array;
}
export interface QueryGetTradeIndexRequestAmino {}
export interface QueryGetTradeIndexRequestAminoMsg {
  type: "/ggezchain.trade.QueryGetTradeIndexRequest";
  value: QueryGetTradeIndexRequestAmino;
}
export interface QueryGetTradeIndexRequestSDKType {}
export interface QueryGetTradeIndexResponse {
  tradeIndex: TradeIndex;
}
export interface QueryGetTradeIndexResponseProtoMsg {
  typeUrl: "/ggezchain.trade.QueryGetTradeIndexResponse";
  value: Uint8Array;
}
export interface QueryGetTradeIndexResponseAmino {
  TradeIndex?: TradeIndexAmino;
}
export interface QueryGetTradeIndexResponseAminoMsg {
  type: "/ggezchain.trade.QueryGetTradeIndexResponse";
  value: QueryGetTradeIndexResponseAmino;
}
export interface QueryGetTradeIndexResponseSDKType {
  TradeIndex: TradeIndexSDKType;
}
export interface QueryGetStoredTradeRequest {
  tradeIndex: bigint;
}
export interface QueryGetStoredTradeRequestProtoMsg {
  typeUrl: "/ggezchain.trade.QueryGetStoredTradeRequest";
  value: Uint8Array;
}
export interface QueryGetStoredTradeRequestAmino {
  tradeIndex?: string;
}
export interface QueryGetStoredTradeRequestAminoMsg {
  type: "/ggezchain.trade.QueryGetStoredTradeRequest";
  value: QueryGetStoredTradeRequestAmino;
}
export interface QueryGetStoredTradeRequestSDKType {
  tradeIndex: bigint;
}
export interface QueryGetStoredTradeResponse {
  storedTrade: StoredTrade;
}
export interface QueryGetStoredTradeResponseProtoMsg {
  typeUrl: "/ggezchain.trade.QueryGetStoredTradeResponse";
  value: Uint8Array;
}
export interface QueryGetStoredTradeResponseAmino {
  storedTrade?: StoredTradeAmino;
}
export interface QueryGetStoredTradeResponseAminoMsg {
  type: "/ggezchain.trade.QueryGetStoredTradeResponse";
  value: QueryGetStoredTradeResponseAmino;
}
export interface QueryGetStoredTradeResponseSDKType {
  storedTrade: StoredTradeSDKType;
}
export interface QueryAllStoredTradeRequest {
  pagination?: PageRequest;
}
export interface QueryAllStoredTradeRequestProtoMsg {
  typeUrl: "/ggezchain.trade.QueryAllStoredTradeRequest";
  value: Uint8Array;
}
export interface QueryAllStoredTradeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllStoredTradeRequestAminoMsg {
  type: "/ggezchain.trade.QueryAllStoredTradeRequest";
  value: QueryAllStoredTradeRequestAmino;
}
export interface QueryAllStoredTradeRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStoredTradeResponse {
  storedTrade: StoredTrade[];
  pagination?: PageResponse;
}
export interface QueryAllStoredTradeResponseProtoMsg {
  typeUrl: "/ggezchain.trade.QueryAllStoredTradeResponse";
  value: Uint8Array;
}
export interface QueryAllStoredTradeResponseAmino {
  storedTrade?: StoredTradeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStoredTradeResponseAminoMsg {
  type: "/ggezchain.trade.QueryAllStoredTradeResponse";
  value: QueryAllStoredTradeResponseAmino;
}
export interface QueryAllStoredTradeResponseSDKType {
  storedTrade: StoredTradeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetStoredTempTradeRequest {
  tradeIndex: bigint;
}
export interface QueryGetStoredTempTradeRequestProtoMsg {
  typeUrl: "/ggezchain.trade.QueryGetStoredTempTradeRequest";
  value: Uint8Array;
}
export interface QueryGetStoredTempTradeRequestAmino {
  tradeIndex?: string;
}
export interface QueryGetStoredTempTradeRequestAminoMsg {
  type: "/ggezchain.trade.QueryGetStoredTempTradeRequest";
  value: QueryGetStoredTempTradeRequestAmino;
}
export interface QueryGetStoredTempTradeRequestSDKType {
  tradeIndex: bigint;
}
export interface QueryGetStoredTempTradeResponse {
  storedTempTrade: StoredTempTrade;
}
export interface QueryGetStoredTempTradeResponseProtoMsg {
  typeUrl: "/ggezchain.trade.QueryGetStoredTempTradeResponse";
  value: Uint8Array;
}
export interface QueryGetStoredTempTradeResponseAmino {
  storedTempTrade?: StoredTempTradeAmino;
}
export interface QueryGetStoredTempTradeResponseAminoMsg {
  type: "/ggezchain.trade.QueryGetStoredTempTradeResponse";
  value: QueryGetStoredTempTradeResponseAmino;
}
export interface QueryGetStoredTempTradeResponseSDKType {
  storedTempTrade: StoredTempTradeSDKType;
}
export interface QueryAllStoredTempTradeRequest {
  pagination?: PageRequest;
}
export interface QueryAllStoredTempTradeRequestProtoMsg {
  typeUrl: "/ggezchain.trade.QueryAllStoredTempTradeRequest";
  value: Uint8Array;
}
export interface QueryAllStoredTempTradeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllStoredTempTradeRequestAminoMsg {
  type: "/ggezchain.trade.QueryAllStoredTempTradeRequest";
  value: QueryAllStoredTempTradeRequestAmino;
}
export interface QueryAllStoredTempTradeRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStoredTempTradeResponse {
  storedTempTrade: StoredTempTrade[];
  pagination?: PageResponse;
}
export interface QueryAllStoredTempTradeResponseProtoMsg {
  typeUrl: "/ggezchain.trade.QueryAllStoredTempTradeResponse";
  value: Uint8Array;
}
export interface QueryAllStoredTempTradeResponseAmino {
  storedTempTrade?: StoredTempTradeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStoredTempTradeResponseAminoMsg {
  type: "/ggezchain.trade.QueryAllStoredTempTradeResponse";
  value: QueryAllStoredTempTradeResponseAmino;
}
export interface QueryAllStoredTempTradeResponseSDKType {
  storedTempTrade: StoredTempTradeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ggezchain.trade.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ggezchain.trade.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTradeIndexRequest(): QueryGetTradeIndexRequest {
  return {};
}
export const QueryGetTradeIndexRequest = {
  typeUrl: "/ggezchain.trade.QueryGetTradeIndexRequest",
  encode(_: QueryGetTradeIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTradeIndexRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeIndexRequest();
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
  fromPartial(_: Partial<QueryGetTradeIndexRequest>): QueryGetTradeIndexRequest {
    const message = createBaseQueryGetTradeIndexRequest();
    return message;
  },
  fromAmino(_: QueryGetTradeIndexRequestAmino): QueryGetTradeIndexRequest {
    const message = createBaseQueryGetTradeIndexRequest();
    return message;
  },
  toAmino(_: QueryGetTradeIndexRequest): QueryGetTradeIndexRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetTradeIndexRequestAminoMsg): QueryGetTradeIndexRequest {
    return QueryGetTradeIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTradeIndexRequestProtoMsg): QueryGetTradeIndexRequest {
    return QueryGetTradeIndexRequest.decode(message.value);
  },
  toProto(message: QueryGetTradeIndexRequest): Uint8Array {
    return QueryGetTradeIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTradeIndexRequest): QueryGetTradeIndexRequestProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryGetTradeIndexRequest",
      value: QueryGetTradeIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTradeIndexResponse(): QueryGetTradeIndexResponse {
  return {
    tradeIndex: TradeIndex.fromPartial({})
  };
}
export const QueryGetTradeIndexResponse = {
  typeUrl: "/ggezchain.trade.QueryGetTradeIndexResponse",
  encode(message: QueryGetTradeIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== undefined) {
      TradeIndex.encode(message.tradeIndex, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTradeIndexResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = TradeIndex.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTradeIndexResponse>): QueryGetTradeIndexResponse {
    const message = createBaseQueryGetTradeIndexResponse();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? TradeIndex.fromPartial(object.tradeIndex) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTradeIndexResponseAmino): QueryGetTradeIndexResponse {
    const message = createBaseQueryGetTradeIndexResponse();
    if (object.TradeIndex !== undefined && object.TradeIndex !== null) {
      message.tradeIndex = TradeIndex.fromAmino(object.TradeIndex);
    }
    return message;
  },
  toAmino(message: QueryGetTradeIndexResponse): QueryGetTradeIndexResponseAmino {
    const obj: any = {};
    obj.TradeIndex = message.tradeIndex ? TradeIndex.toAmino(message.tradeIndex) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTradeIndexResponseAminoMsg): QueryGetTradeIndexResponse {
    return QueryGetTradeIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTradeIndexResponseProtoMsg): QueryGetTradeIndexResponse {
    return QueryGetTradeIndexResponse.decode(message.value);
  },
  toProto(message: QueryGetTradeIndexResponse): Uint8Array {
    return QueryGetTradeIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTradeIndexResponse): QueryGetTradeIndexResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryGetTradeIndexResponse",
      value: QueryGetTradeIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStoredTradeRequest(): QueryGetStoredTradeRequest {
  return {
    tradeIndex: BigInt(0)
  };
}
export const QueryGetStoredTradeRequest = {
  typeUrl: "/ggezchain.trade.QueryGetStoredTradeRequest",
  encode(message: QueryGetStoredTradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStoredTradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetStoredTradeRequest>): QueryGetStoredTradeRequest {
    const message = createBaseQueryGetStoredTradeRequest();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetStoredTradeRequestAmino): QueryGetStoredTradeRequest {
    const message = createBaseQueryGetStoredTradeRequest();
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    return message;
  },
  toAmino(message: QueryGetStoredTradeRequest): QueryGetStoredTradeRequestAmino {
    const obj: any = {};
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStoredTradeRequestAminoMsg): QueryGetStoredTradeRequest {
    return QueryGetStoredTradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStoredTradeRequestProtoMsg): QueryGetStoredTradeRequest {
    return QueryGetStoredTradeRequest.decode(message.value);
  },
  toProto(message: QueryGetStoredTradeRequest): Uint8Array {
    return QueryGetStoredTradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStoredTradeRequest): QueryGetStoredTradeRequestProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryGetStoredTradeRequest",
      value: QueryGetStoredTradeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStoredTradeResponse(): QueryGetStoredTradeResponse {
  return {
    storedTrade: StoredTrade.fromPartial({})
  };
}
export const QueryGetStoredTradeResponse = {
  typeUrl: "/ggezchain.trade.QueryGetStoredTradeResponse",
  encode(message: QueryGetStoredTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storedTrade !== undefined) {
      StoredTrade.encode(message.storedTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStoredTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTrade = StoredTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetStoredTradeResponse>): QueryGetStoredTradeResponse {
    const message = createBaseQueryGetStoredTradeResponse();
    message.storedTrade = object.storedTrade !== undefined && object.storedTrade !== null ? StoredTrade.fromPartial(object.storedTrade) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStoredTradeResponseAmino): QueryGetStoredTradeResponse {
    const message = createBaseQueryGetStoredTradeResponse();
    if (object.storedTrade !== undefined && object.storedTrade !== null) {
      message.storedTrade = StoredTrade.fromAmino(object.storedTrade);
    }
    return message;
  },
  toAmino(message: QueryGetStoredTradeResponse): QueryGetStoredTradeResponseAmino {
    const obj: any = {};
    obj.storedTrade = message.storedTrade ? StoredTrade.toAmino(message.storedTrade) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStoredTradeResponseAminoMsg): QueryGetStoredTradeResponse {
    return QueryGetStoredTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStoredTradeResponseProtoMsg): QueryGetStoredTradeResponse {
    return QueryGetStoredTradeResponse.decode(message.value);
  },
  toProto(message: QueryGetStoredTradeResponse): Uint8Array {
    return QueryGetStoredTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStoredTradeResponse): QueryGetStoredTradeResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryGetStoredTradeResponse",
      value: QueryGetStoredTradeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStoredTradeRequest(): QueryAllStoredTradeRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStoredTradeRequest = {
  typeUrl: "/ggezchain.trade.QueryAllStoredTradeRequest",
  encode(message: QueryAllStoredTradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStoredTradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStoredTradeRequest>): QueryAllStoredTradeRequest {
    const message = createBaseQueryAllStoredTradeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStoredTradeRequestAmino): QueryAllStoredTradeRequest {
    const message = createBaseQueryAllStoredTradeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStoredTradeRequest): QueryAllStoredTradeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStoredTradeRequestAminoMsg): QueryAllStoredTradeRequest {
    return QueryAllStoredTradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStoredTradeRequestProtoMsg): QueryAllStoredTradeRequest {
    return QueryAllStoredTradeRequest.decode(message.value);
  },
  toProto(message: QueryAllStoredTradeRequest): Uint8Array {
    return QueryAllStoredTradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStoredTradeRequest): QueryAllStoredTradeRequestProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryAllStoredTradeRequest",
      value: QueryAllStoredTradeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStoredTradeResponse(): QueryAllStoredTradeResponse {
  return {
    storedTrade: [],
    pagination: undefined
  };
}
export const QueryAllStoredTradeResponse = {
  typeUrl: "/ggezchain.trade.QueryAllStoredTradeResponse",
  encode(message: QueryAllStoredTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storedTrade) {
      StoredTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStoredTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTrade.push(StoredTrade.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStoredTradeResponse>): QueryAllStoredTradeResponse {
    const message = createBaseQueryAllStoredTradeResponse();
    message.storedTrade = object.storedTrade?.map(e => StoredTrade.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStoredTradeResponseAmino): QueryAllStoredTradeResponse {
    const message = createBaseQueryAllStoredTradeResponse();
    message.storedTrade = object.storedTrade?.map(e => StoredTrade.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStoredTradeResponse): QueryAllStoredTradeResponseAmino {
    const obj: any = {};
    if (message.storedTrade) {
      obj.storedTrade = message.storedTrade.map(e => e ? StoredTrade.toAmino(e) : undefined);
    } else {
      obj.storedTrade = message.storedTrade;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStoredTradeResponseAminoMsg): QueryAllStoredTradeResponse {
    return QueryAllStoredTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStoredTradeResponseProtoMsg): QueryAllStoredTradeResponse {
    return QueryAllStoredTradeResponse.decode(message.value);
  },
  toProto(message: QueryAllStoredTradeResponse): Uint8Array {
    return QueryAllStoredTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStoredTradeResponse): QueryAllStoredTradeResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryAllStoredTradeResponse",
      value: QueryAllStoredTradeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStoredTempTradeRequest(): QueryGetStoredTempTradeRequest {
  return {
    tradeIndex: BigInt(0)
  };
}
export const QueryGetStoredTempTradeRequest = {
  typeUrl: "/ggezchain.trade.QueryGetStoredTempTradeRequest",
  encode(message: QueryGetStoredTempTradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStoredTempTradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTempTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetStoredTempTradeRequest>): QueryGetStoredTempTradeRequest {
    const message = createBaseQueryGetStoredTempTradeRequest();
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? BigInt(object.tradeIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetStoredTempTradeRequestAmino): QueryGetStoredTempTradeRequest {
    const message = createBaseQueryGetStoredTempTradeRequest();
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = BigInt(object.tradeIndex);
    }
    return message;
  },
  toAmino(message: QueryGetStoredTempTradeRequest): QueryGetStoredTempTradeRequestAmino {
    const obj: any = {};
    obj.tradeIndex = message.tradeIndex !== BigInt(0) ? message.tradeIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStoredTempTradeRequestAminoMsg): QueryGetStoredTempTradeRequest {
    return QueryGetStoredTempTradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStoredTempTradeRequestProtoMsg): QueryGetStoredTempTradeRequest {
    return QueryGetStoredTempTradeRequest.decode(message.value);
  },
  toProto(message: QueryGetStoredTempTradeRequest): Uint8Array {
    return QueryGetStoredTempTradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStoredTempTradeRequest): QueryGetStoredTempTradeRequestProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryGetStoredTempTradeRequest",
      value: QueryGetStoredTempTradeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStoredTempTradeResponse(): QueryGetStoredTempTradeResponse {
  return {
    storedTempTrade: StoredTempTrade.fromPartial({})
  };
}
export const QueryGetStoredTempTradeResponse = {
  typeUrl: "/ggezchain.trade.QueryGetStoredTempTradeResponse",
  encode(message: QueryGetStoredTempTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storedTempTrade !== undefined) {
      StoredTempTrade.encode(message.storedTempTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStoredTempTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTempTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTempTrade = StoredTempTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetStoredTempTradeResponse>): QueryGetStoredTempTradeResponse {
    const message = createBaseQueryGetStoredTempTradeResponse();
    message.storedTempTrade = object.storedTempTrade !== undefined && object.storedTempTrade !== null ? StoredTempTrade.fromPartial(object.storedTempTrade) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStoredTempTradeResponseAmino): QueryGetStoredTempTradeResponse {
    const message = createBaseQueryGetStoredTempTradeResponse();
    if (object.storedTempTrade !== undefined && object.storedTempTrade !== null) {
      message.storedTempTrade = StoredTempTrade.fromAmino(object.storedTempTrade);
    }
    return message;
  },
  toAmino(message: QueryGetStoredTempTradeResponse): QueryGetStoredTempTradeResponseAmino {
    const obj: any = {};
    obj.storedTempTrade = message.storedTempTrade ? StoredTempTrade.toAmino(message.storedTempTrade) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStoredTempTradeResponseAminoMsg): QueryGetStoredTempTradeResponse {
    return QueryGetStoredTempTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStoredTempTradeResponseProtoMsg): QueryGetStoredTempTradeResponse {
    return QueryGetStoredTempTradeResponse.decode(message.value);
  },
  toProto(message: QueryGetStoredTempTradeResponse): Uint8Array {
    return QueryGetStoredTempTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStoredTempTradeResponse): QueryGetStoredTempTradeResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryGetStoredTempTradeResponse",
      value: QueryGetStoredTempTradeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStoredTempTradeRequest(): QueryAllStoredTempTradeRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStoredTempTradeRequest = {
  typeUrl: "/ggezchain.trade.QueryAllStoredTempTradeRequest",
  encode(message: QueryAllStoredTempTradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStoredTempTradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTempTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStoredTempTradeRequest>): QueryAllStoredTempTradeRequest {
    const message = createBaseQueryAllStoredTempTradeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStoredTempTradeRequestAmino): QueryAllStoredTempTradeRequest {
    const message = createBaseQueryAllStoredTempTradeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStoredTempTradeRequest): QueryAllStoredTempTradeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStoredTempTradeRequestAminoMsg): QueryAllStoredTempTradeRequest {
    return QueryAllStoredTempTradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStoredTempTradeRequestProtoMsg): QueryAllStoredTempTradeRequest {
    return QueryAllStoredTempTradeRequest.decode(message.value);
  },
  toProto(message: QueryAllStoredTempTradeRequest): Uint8Array {
    return QueryAllStoredTempTradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStoredTempTradeRequest): QueryAllStoredTempTradeRequestProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryAllStoredTempTradeRequest",
      value: QueryAllStoredTempTradeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStoredTempTradeResponse(): QueryAllStoredTempTradeResponse {
  return {
    storedTempTrade: [],
    pagination: undefined
  };
}
export const QueryAllStoredTempTradeResponse = {
  typeUrl: "/ggezchain.trade.QueryAllStoredTempTradeResponse",
  encode(message: QueryAllStoredTempTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storedTempTrade) {
      StoredTempTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStoredTempTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTempTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTempTrade.push(StoredTempTrade.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStoredTempTradeResponse>): QueryAllStoredTempTradeResponse {
    const message = createBaseQueryAllStoredTempTradeResponse();
    message.storedTempTrade = object.storedTempTrade?.map(e => StoredTempTrade.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStoredTempTradeResponseAmino): QueryAllStoredTempTradeResponse {
    const message = createBaseQueryAllStoredTempTradeResponse();
    message.storedTempTrade = object.storedTempTrade?.map(e => StoredTempTrade.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStoredTempTradeResponse): QueryAllStoredTempTradeResponseAmino {
    const obj: any = {};
    if (message.storedTempTrade) {
      obj.storedTempTrade = message.storedTempTrade.map(e => e ? StoredTempTrade.toAmino(e) : undefined);
    } else {
      obj.storedTempTrade = message.storedTempTrade;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStoredTempTradeResponseAminoMsg): QueryAllStoredTempTradeResponse {
    return QueryAllStoredTempTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStoredTempTradeResponseProtoMsg): QueryAllStoredTempTradeResponse {
    return QueryAllStoredTempTradeResponse.decode(message.value);
  },
  toProto(message: QueryAllStoredTempTradeResponse): Uint8Array {
    return QueryAllStoredTempTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStoredTempTradeResponse): QueryAllStoredTempTradeResponseProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.QueryAllStoredTempTradeResponse",
      value: QueryAllStoredTempTradeResponse.encode(message).finish()
    };
  }
};