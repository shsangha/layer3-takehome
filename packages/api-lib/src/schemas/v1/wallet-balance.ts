/* eslint-disable no-unused-vars */
import { Static, Type } from "@feathersjs/typebox";

export const v1WalletBalanceSchema = Type.Object(
  {
    nativeBalance: Type.Number(),
  },
  { $id: "V1WalletBalance", additionalProperties: false }
);
export type V1WalletBalance = Static<typeof v1WalletBalanceSchema>;

export const v1WalletBalanceQuerySchema = Type.Object(
  { chain: Type.String(), address: Type.String() },
  { additionalProperties: false }
);
export type V1WalletBalanceQuery = Static<typeof v1WalletBalanceQuerySchema>;

export type V1WalletBalanceAPI = ({
  address,
  chain,
}: {
  address: string;
  chain: string;
}) => Promise<V1WalletBalance>;
