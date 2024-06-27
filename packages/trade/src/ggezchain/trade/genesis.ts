//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TradeIndex, TradeIndexAmino, TradeIndexSDKType } from "./trade_index";
import { StoredTrade, StoredTradeAmino, StoredTradeSDKType } from "./stored_trade";
import { StoredTempTrade, StoredTempTradeAmino, StoredTempTradeSDKType } from "./stored_temp_trade";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the trade module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  tradeIndex: TradeIndex;
  storedTradeList: StoredTrade[];
  storedTempTradeList: StoredTempTrade[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ggezchain.trade.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the trade module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  tradeIndex?: TradeIndexAmino;
  storedTradeList?: StoredTradeAmino[];
  storedTempTradeList?: StoredTempTradeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/ggezchain.trade.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the trade module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tradeIndex: TradeIndexSDKType;
  storedTradeList: StoredTradeSDKType[];
  storedTempTradeList: StoredTempTradeSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tradeIndex: TradeIndex.fromPartial({}),
    storedTradeList: [],
    storedTempTradeList: []
  };
}
export const GenesisState = {
  typeUrl: "/ggezchain.trade.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.tradeIndex !== undefined) {
      TradeIndex.encode(message.tradeIndex, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storedTradeList) {
      StoredTrade.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.storedTempTradeList) {
      StoredTempTrade.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tradeIndex = TradeIndex.decode(reader, reader.uint32());
          break;
        case 3:
          message.storedTradeList.push(StoredTrade.decode(reader, reader.uint32()));
          break;
        case 4:
          message.storedTempTradeList.push(StoredTempTrade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tradeIndex = object.tradeIndex !== undefined && object.tradeIndex !== null ? TradeIndex.fromPartial(object.tradeIndex) : undefined;
    message.storedTradeList = object.storedTradeList?.map(e => StoredTrade.fromPartial(e)) || [];
    message.storedTempTradeList = object.storedTempTradeList?.map(e => StoredTempTrade.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.tradeIndex !== undefined && object.tradeIndex !== null) {
      message.tradeIndex = TradeIndex.fromAmino(object.tradeIndex);
    }
    message.storedTradeList = object.storedTradeList?.map(e => StoredTrade.fromAmino(e)) || [];
    message.storedTempTradeList = object.storedTempTradeList?.map(e => StoredTempTrade.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.tradeIndex = message.tradeIndex ? TradeIndex.toAmino(message.tradeIndex) : undefined;
    if (message.storedTradeList) {
      obj.storedTradeList = message.storedTradeList.map(e => e ? StoredTrade.toAmino(e) : undefined);
    } else {
      obj.storedTradeList = message.storedTradeList;
    }
    if (message.storedTempTradeList) {
      obj.storedTempTradeList = message.storedTempTradeList.map(e => e ? StoredTempTrade.toAmino(e) : undefined);
    } else {
      obj.storedTempTradeList = message.storedTempTradeList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ggezchain.trade.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};