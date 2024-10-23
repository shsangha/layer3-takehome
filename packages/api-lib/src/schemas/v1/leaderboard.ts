import { Static, Type } from "@feathersjs/typebox";

// Main data model schema
export const v1LeaderboardSchema = Type.Object(
  {
    data: Type.Array(
      Type.Object({
        rank: Type.Number(),
        address: Type.String(),
        avatarUri: Type.String(),
        username: Type.String(),
        gmStreak: Type.Number(),
        xp: Type.Number(),
        level: Type.Number(),
      })
    ),
    meta: Type.Object({
      count: Type.Number(),
    }),
  },
  { $id: "v1LeaderboardSchema", additionalProperties: false }
);
export type V1Leaderboard = Static<typeof v1LeaderboardSchema>;

export const v1LeaderboardQuerySchema = Type.Object(
  {
    offset: Type.Number({ default: 0 }),
    limit: Type.Number({ default: 10 }),
  },
  { additionalProperties: false }
);

export type V1LeaderboardQuery = Static<typeof v1LeaderboardQuerySchema>;

export type LeaderboardV1Api = (
  // eslint-disable-next-line no-unused-vars
  query: V1LeaderboardQuery
) => Promise<{ users: V1Leaderboard["data"]; count: number }>;
