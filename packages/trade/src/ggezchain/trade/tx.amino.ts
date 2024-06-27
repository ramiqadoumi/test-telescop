//@ts-nocheck
import { MsgUpdateParams, MsgCreateTrade, MsgProcessTrade } from "./tx";
export const AminoConverter = {
  "/ggezchain.trade.MsgUpdateParams": {
    aminoType: "ggezchain/x/trade/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/ggezchain.trade.MsgCreateTrade": {
    aminoType: "/ggezchain.trade.MsgCreateTrade",
    toAmino: MsgCreateTrade.toAmino,
    fromAmino: MsgCreateTrade.fromAmino
  },
  "/ggezchain.trade.MsgProcessTrade": {
    aminoType: "/ggezchain.trade.MsgProcessTrade",
    toAmino: MsgProcessTrade.toAmino,
    fromAmino: MsgProcessTrade.fromAmino
  }
};