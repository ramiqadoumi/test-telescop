//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateTrade, MsgCreateTradeResponse, MsgProcessTrade, MsgProcessTradeResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createTrade(request: MsgCreateTrade): Promise<MsgCreateTradeResponse>;
  processTrade(request: MsgProcessTrade): Promise<MsgProcessTradeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createTrade = this.createTrade.bind(this);
    this.processTrade = this.processTrade.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createTrade(request: MsgCreateTrade): Promise<MsgCreateTradeResponse> {
    const data = MsgCreateTrade.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Msg", "CreateTrade", data);
    return promise.then(data => MsgCreateTradeResponse.decode(new BinaryReader(data)));
  }
  processTrade(request: MsgProcessTrade): Promise<MsgProcessTradeResponse> {
    const data = MsgProcessTrade.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Msg", "ProcessTrade", data);
    return promise.then(data => MsgProcessTradeResponse.decode(new BinaryReader(data)));
  }
}