import { Static, Type } from "@feathersjs/typebox";

export const AutocompleteV1Schema = Type.Object(
  {
    data: Type.Array(
      Type.Object({
        address: Type.String(),
        avatarUri: Type.String(),
        username: Type.String(),
      })
    ),
    meta: Type.Object({
      count: Type.Number(),
    }),
  },
  { $id: "AutocompleteV1", additionalProperties: false }
);
export type AutocompleteV1 = Static<typeof AutocompleteV1Schema>;

export const AutocompleteV1QuerySchema = Type.Object(
  {
    searchTerm: Type.String(),
    limit: Type.Number({ default: 10 }),
  },
  { additionalProperties: false }
);

export type AutocompleteV1Query = Static<typeof AutocompleteV1QuerySchema>;

export type AutoCompleteV1Api = (
  // eslint-disable-next-line no-unused-vars
  query: AutocompleteV1Query
) => Promise<AutocompleteV1["data"]>;
