//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  ggezchain: {
    trade: new (await import("./trade/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});