//@ts-nocheck
import * as _107 from "./trade/genesis";
import * as _108 from "./trade/params";
import * as _109 from "./trade/query";
import * as _110 from "./trade/stored_temp_trade";
import * as _111 from "./trade/stored_trade";
import * as _112 from "./trade/trade_index";
import * as _113 from "./trade/tx";
import * as _194 from "./trade/tx.amino";
import * as _195 from "./trade/tx.registry";
import * as _196 from "./trade/query.rpc.Query";
import * as _197 from "./trade/tx.rpc.msg";
import * as _200 from "./rpc.query";
import * as _201 from "./rpc.tx";
export namespace ggezchain {
  export const trade = {
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._194,
    ..._195,
    ..._196,
    ..._197
  };
  export const ClientFactory = {
    ..._200,
    ..._201
  };
}