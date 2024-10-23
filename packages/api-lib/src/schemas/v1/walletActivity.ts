import { Static, Type } from "@feathersjs/typebox";

export const v1WalletActivitySchema = Type.Object(
  {
    address: Type.String(),
    activeChains: Type.Array(
      Type.Object({
        chain: Type.String(),
        chainId: Type.Number(),
      })
    ),
  },
  { $id: "V1WalletActivity", additionalProperties: false }
);
export type V1WalletActivity = Static<typeof v1WalletActivitySchema>;

export const v1WalletActivityQuerySchema = Type.Object(
  {
    address: Type.String(),
  },
  { additionalProperties: false }
);
export type V1WalletActivityQuery = Static<typeof v1WalletActivityQuerySchema>;

export type V1WalletActivityAPI = (
  // eslint-disable-next-line no-unused-vars
  query: V1WalletActivityQuery
) => Promise<V1WalletActivity>;
