//@ts-nocheck
import * as _3 from "./trade/genesis";
import * as _4 from "./trade/params";
import * as _5 from "./trade/query";
import * as _6 from "./trade/stored_temp_trade";
import * as _7 from "./trade/stored_trade";
import * as _8 from "./trade/trade_index";
import * as _9 from "./trade/tx";
import * as _12 from "./trade/tx.amino";
import * as _13 from "./trade/tx.registry";
import * as _14 from "./trade/query.rpc.Query";
import * as _15 from "./trade/tx.rpc.msg";
import * as _16 from "./rpc.query";
import * as _17 from "./rpc.tx";
export namespace ggezchain {
  export const trade = {
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._12,
    ..._13,
    ..._14,
    ..._15
  };
  export const ClientFactory = {
    ..._16,
    ..._17
  };
}