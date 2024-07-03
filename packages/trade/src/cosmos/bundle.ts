//@ts-nocheck
import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./feegrant/v1beta1/feegrant";
import * as _30 from "./feegrant/v1beta1/genesis";
import * as _31 from "./feegrant/v1beta1/query";
import * as _32 from "./feegrant/v1beta1/tx";
import * as _33 from "./gov/v1/genesis";
import * as _34 from "./gov/v1/gov";
import * as _35 from "./gov/v1/query";
import * as _36 from "./gov/v1/tx";
import * as _37 from "./gov/v1beta1/genesis";
import * as _38 from "./gov/v1beta1/gov";
import * as _39 from "./gov/v1beta1/query";
import * as _40 from "./gov/v1beta1/tx";
import * as _41 from "./group/v1/events";
import * as _42 from "./group/v1/genesis";
import * as _43 from "./group/v1/query";
import * as _44 from "./group/v1/tx";
import * as _45 from "./group/v1/types";
import * as _46 from "./mint/v1beta1/genesis";
import * as _47 from "./mint/v1beta1/mint";
import * as _48 from "./mint/v1beta1/query";
import * as _49 from "./params/v1beta1/params";
import * as _50 from "./params/v1beta1/query";
import * as _51 from "./slashing/v1beta1/genesis";
import * as _52 from "./slashing/v1beta1/query";
import * as _53 from "./slashing/v1beta1/slashing";
import * as _54 from "./slashing/v1beta1/tx";
import * as _55 from "./staking/v1beta1/authz";
import * as _56 from "./staking/v1beta1/genesis";
import * as _57 from "./staking/v1beta1/query";
import * as _58 from "./staking/v1beta1/staking";
import * as _59 from "./staking/v1beta1/tx";
import * as _60 from "./tx/signing/v1beta1/signing";
import * as _61 from "./tx/v1beta1/service";
import * as _62 from "./tx/v1beta1/tx";
import * as _63 from "./upgrade/v1beta1/query";
import * as _64 from "./upgrade/v1beta1/tx";
import * as _65 from "./upgrade/v1beta1/upgrade";
import * as _66 from "./vesting/v1beta1/tx";
import * as _67 from "./vesting/v1beta1/vesting";
import * as _92 from "./authz/v1beta1/tx.amino";
import * as _93 from "./bank/v1beta1/tx.amino";
import * as _94 from "./distribution/v1beta1/tx.amino";
import * as _95 from "./feegrant/v1beta1/tx.amino";
import * as _96 from "./gov/v1/tx.amino";
import * as _97 from "./gov/v1beta1/tx.amino";
import * as _98 from "./group/v1/tx.amino";
import * as _99 from "./slashing/v1beta1/tx.amino";
import * as _100 from "./staking/v1beta1/tx.amino";
import * as _101 from "./upgrade/v1beta1/tx.amino";
import * as _102 from "./vesting/v1beta1/tx.amino";
import * as _103 from "./authz/v1beta1/tx.registry";
import * as _104 from "./bank/v1beta1/tx.registry";
import * as _105 from "./distribution/v1beta1/tx.registry";
import * as _106 from "./feegrant/v1beta1/tx.registry";
import * as _107 from "./gov/v1/tx.registry";
import * as _108 from "./gov/v1beta1/tx.registry";
import * as _109 from "./group/v1/tx.registry";
import * as _110 from "./slashing/v1beta1/tx.registry";
import * as _111 from "./staking/v1beta1/tx.registry";
import * as _112 from "./upgrade/v1beta1/tx.registry";
import * as _113 from "./vesting/v1beta1/tx.registry";
import * as _114 from "./auth/v1beta1/query.rpc.Query";
import * as _115 from "./authz/v1beta1/query.rpc.Query";
import * as _116 from "./bank/v1beta1/query.rpc.Query";
import * as _117 from "./distribution/v1beta1/query.rpc.Query";
import * as _118 from "./feegrant/v1beta1/query.rpc.Query";
import * as _119 from "./gov/v1/query.rpc.Query";
import * as _120 from "./gov/v1beta1/query.rpc.Query";
import * as _121 from "./group/v1/query.rpc.Query";
import * as _122 from "./mint/v1beta1/query.rpc.Query";
import * as _123 from "./params/v1beta1/query.rpc.Query";
import * as _124 from "./slashing/v1beta1/query.rpc.Query";
import * as _125 from "./staking/v1beta1/query.rpc.Query";
import * as _126 from "./tx/v1beta1/service.rpc.Service";
import * as _127 from "./upgrade/v1beta1/query.rpc.Query";
import * as _128 from "./authz/v1beta1/tx.rpc.msg";
import * as _129 from "./bank/v1beta1/tx.rpc.msg";
import * as _130 from "./distribution/v1beta1/tx.rpc.msg";
import * as _131 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _132 from "./gov/v1/tx.rpc.msg";
import * as _133 from "./gov/v1beta1/tx.rpc.msg";
import * as _134 from "./group/v1/tx.rpc.msg";
import * as _135 from "./slashing/v1beta1/tx.rpc.msg";
import * as _136 from "./staking/v1beta1/tx.rpc.msg";
import * as _137 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _138 from "./vesting/v1beta1/tx.rpc.msg";
import * as _143 from "./rpc.query";
import * as _144 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._114
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._92,
      ..._103,
      ..._115,
      ..._128
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._93,
      ..._104,
      ..._116,
      ..._129
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export namespace hd {
      export const v1 = {
        ..._20
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._21
      };
    }
    export const multisig = {
      ..._22
    };
    export const secp256k1 = {
      ..._23
    };
    export const secp256r1 = {
      ..._24
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._94,
      ..._105,
      ..._117,
      ..._130
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._95,
      ..._106,
      ..._118,
      ..._131
    };
  }
  export namespace gov {
    export const v1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._96,
      ..._107,
      ..._119,
      ..._132
    };
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._97,
      ..._108,
      ..._120,
      ..._133
    };
  }
  export namespace group {
    export const v1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._98,
      ..._109,
      ..._121,
      ..._134
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._122
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._123
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._99,
      ..._110,
      ..._124,
      ..._135
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._100,
      ..._111,
      ..._125,
      ..._136
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._60
      };
    }
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._126
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._101,
      ..._112,
      ..._127,
      ..._137
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._102,
      ..._113,
      ..._138
    };
  }
  export const ClientFactory = {
    ..._143,
    ..._144
  };
}