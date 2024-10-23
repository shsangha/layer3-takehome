import { Static, Type } from "@feathersjs/typebox";

// Main data model schema
export const v1TransactionByWalletSchema = Type.Object(
  {
    page: Type.Number(),
    total: Type.Number(),
    results: Type.Array(
      Type.Object({
        category: Type.String(),
        from_address: Type.String(),
        to_address: Type.String(),
        result: Type.String(),
        gas: Type.Number(),
        gasprice: Type.Number(),
        hash: Type.String(),
        summary: Type.String(),
      })
    ),
  },
  { $id: "V1TransactionByWallet", additionalProperties: false }
);
export type V1TransactionByWallet = Static<typeof v1TransactionByWalletSchema>;

// Schema for allowed query properties
export const v1TransactionByWalletQuerySchema = Type.Object(
  {
    walletAddress: Type.String(),
    chain: Type.String(),
    sortOrder: Type.String(),
    limit: Type.Number(),
    cursor: Type.Optional(Type.String()),
    fromDate: Type.Optional(Type.String()),
    toDate: Type.Optional(Type.String()),
  },
  { additionalProperties: false }
);

export type V1TransactionByWalletQuery = Static<
  typeof v1TransactionByWalletQuerySchema
>;

export type V1TransactionByWalletAPI = (
  // eslint-disable-next-line no-unused-vars
  query: V1TransactionByWalletQuery
) => Promise<V1TransactionByWallet>;
