//@ts-nocheck
import * as _68 from "./trade/genesis";
import * as _69 from "./trade/params";
import * as _70 from "./trade/query";
import * as _71 from "./trade/stored_temp_trade";
import * as _72 from "./trade/stored_trade";
import * as _73 from "./trade/trade_index";
import * as _74 from "./trade/tx";
import * as _139 from "./trade/tx.amino";
import * as _140 from "./trade/tx.registry";
import * as _141 from "./trade/query.rpc.Query";
import * as _142 from "./trade/tx.rpc.msg";
import * as _145 from "./rpc.query";
import * as _146 from "./rpc.tx";
export namespace ggezchain {
  export const trade = {
    ..._68,
    ..._69,
    ..._70,
    ..._71,
    ..._72,
    ..._73,
    ..._74,
    ..._139,
    ..._140,
    ..._141,
    ..._142
  };
  export const ClientFactory = {
    ..._145,
    ..._146
  };
}