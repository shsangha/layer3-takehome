import { Static, Type } from "@feathersjs/typebox";

// Main data model schema
export const v1UsersSchema = Type.Object(
  {
    rank: Type.Number(),
    address: Type.String(),
    avatarCid: Type.String(),
    username: Type.String(),
    gmStreak: Type.Number(),
    xp: Type.Number(),
    level: Type.Number(),
  },
  { $id: "V1Users", additionalProperties: false }
);
export type V1Users = Static<typeof v1UsersSchema>;

// Schema for allowed query properties
export const v1UsersQuerySchema = Type.Object(
  {},
  { additionalProperties: false }
);

export type V1UsersQuery = Static<typeof v1UsersQuerySchema>;
