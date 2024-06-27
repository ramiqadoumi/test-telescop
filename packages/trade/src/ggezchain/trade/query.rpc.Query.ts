//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetTradeIndexRequest, QueryGetTradeIndexResponse, QueryGetStoredTradeRequest, QueryGetStoredTradeResponse, QueryAllStoredTradeRequest, QueryAllStoredTradeResponse, QueryGetStoredTempTradeRequest, QueryGetStoredTempTradeResponse, QueryAllStoredTempTradeRequest, QueryAllStoredTempTradeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a TradeIndex by index. */
  tradeIndex(request?: QueryGetTradeIndexRequest): Promise<QueryGetTradeIndexResponse>;
  /** Queries a list of StoredTrade items. */
  storedTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse>;
  storedTradeAll(request?: QueryAllStoredTradeRequest): Promise<QueryAllStoredTradeResponse>;
  /** Queries a list of StoredTempTrade items. */
  storedTempTrade(request: QueryGetStoredTempTradeRequest): Promise<QueryGetStoredTempTradeResponse>;
  storedTempTradeAll(request?: QueryAllStoredTempTradeRequest): Promise<QueryAllStoredTempTradeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.tradeIndex = this.tradeIndex.bind(this);
    this.storedTrade = this.storedTrade.bind(this);
    this.storedTradeAll = this.storedTradeAll.bind(this);
    this.storedTempTrade = this.storedTempTrade.bind(this);
    this.storedTempTradeAll = this.storedTempTradeAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  tradeIndex(request: QueryGetTradeIndexRequest = {}): Promise<QueryGetTradeIndexResponse> {
    const data = QueryGetTradeIndexRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "TradeIndex", data);
    return promise.then(data => QueryGetTradeIndexResponse.decode(new BinaryReader(data)));
  }
  storedTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse> {
    const data = QueryGetStoredTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTrade", data);
    return promise.then(data => QueryGetStoredTradeResponse.decode(new BinaryReader(data)));
  }
  storedTradeAll(request: QueryAllStoredTradeRequest = {
    pagination: undefined
  }): Promise<QueryAllStoredTradeResponse> {
    const data = QueryAllStoredTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTradeAll", data);
    return promise.then(data => QueryAllStoredTradeResponse.decode(new BinaryReader(data)));
  }
  storedTempTrade(request: QueryGetStoredTempTradeRequest): Promise<QueryGetStoredTempTradeResponse> {
    const data = QueryGetStoredTempTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTempTrade", data);
    return promise.then(data => QueryGetStoredTempTradeResponse.decode(new BinaryReader(data)));
  }
  storedTempTradeAll(request: QueryAllStoredTempTradeRequest = {
    pagination: undefined
  }): Promise<QueryAllStoredTempTradeResponse> {
    const data = QueryAllStoredTempTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTempTradeAll", data);
    return promise.then(data => QueryAllStoredTempTradeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    tradeIndex(request?: QueryGetTradeIndexRequest): Promise<QueryGetTradeIndexResponse> {
      return queryService.tradeIndex(request);
    },
    storedTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse> {
      return queryService.storedTrade(request);
    },
    storedTradeAll(request?: QueryAllStoredTradeRequest): Promise<QueryAllStoredTradeResponse> {
      return queryService.storedTradeAll(request);
    },
    storedTempTrade(request: QueryGetStoredTempTradeRequest): Promise<QueryGetStoredTempTradeResponse> {
      return queryService.storedTempTrade(request);
    },
    storedTempTradeAll(request?: QueryAllStoredTempTradeRequest): Promise<QueryAllStoredTempTradeResponse> {
      return queryService.storedTempTradeAll(request);
    }
  };
};