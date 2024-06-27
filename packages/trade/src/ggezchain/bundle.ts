//@ts-nocheck
import * as _64 from "./trade/genesis";
import * as _65 from "./trade/params";
import * as _66 from "./trade/query";
import * as _67 from "./trade/stored_temp_trade";
import * as _68 from "./trade/stored_trade";
import * as _69 from "./trade/trade_index";
import * as _70 from "./trade/tx";
import * as _131 from "./trade/tx.amino";
import * as _132 from "./trade/tx.registry";
import * as _133 from "./trade/query.rpc.Query";
import * as _134 from "./trade/tx.rpc.msg";
import * as _137 from "./rpc.query";
import * as _138 from "./rpc.tx";
export namespace ggezchain {
  export const trade = {
    ..._64,
    ..._65,
    ..._66,
    ..._67,
    ..._68,
    ..._69,
    ..._70,
    ..._131,
    ..._132,
    ..._133,
    ..._134
  };
  export const ClientFactory = {
    ..._137,
    ..._138
  };
}