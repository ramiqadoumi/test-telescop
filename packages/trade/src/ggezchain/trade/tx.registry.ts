//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateTrade, MsgProcessTrade } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ggezchain.trade.MsgUpdateParams", MsgUpdateParams], ["/ggezchain.trade.MsgCreateTrade", MsgCreateTrade], ["/ggezchain.trade.MsgProcessTrade", MsgProcessTrade]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ggezchain.trade.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/ggezchain.trade.MsgCreateTrade",
        value: MsgCreateTrade.encode(value).finish()
      };
    },
    processTrade(value: MsgProcessTrade) {
      return {
        typeUrl: "/ggezchain.trade.MsgProcessTrade",
        value: MsgProcessTrade.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ggezchain.trade.MsgUpdateParams",
        value
      };
    },
    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/ggezchain.trade.MsgCreateTrade",
        value
      };
    },
    processTrade(value: MsgProcessTrade) {
      return {
        typeUrl: "/ggezchain.trade.MsgProcessTrade",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ggezchain.trade.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/ggezchain.trade.MsgCreateTrade",
        value: MsgCreateTrade.fromPartial(value)
      };
    },
    processTrade(value: MsgProcessTrade) {
      return {
        typeUrl: "/ggezchain.trade.MsgProcessTrade",
        value: MsgProcessTrade.fromPartial(value)
      };
    }
  }
};