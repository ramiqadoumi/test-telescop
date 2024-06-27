//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ggezchainTradeTxRegistry from "./trade/tx.registry";
import * as ggezchainTradeTxAmino from "./trade/tx.amino";
export const ggezchainAminoConverters = {
  ...ggezchainTradeTxAmino.AminoConverter
};
export const ggezchainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...ggezchainTradeTxRegistry.registry];
export const getSigningGgezchainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...ggezchainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...ggezchainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningGgezchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGgezchainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};