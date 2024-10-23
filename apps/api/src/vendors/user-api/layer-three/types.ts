import { Static, Type } from '@feathersjs/typebox'

const LayerThreeUsersApiResponseSchema = Type.Object({
  rank: Type.Number(),
  address: Type.String(),
  avatarCid: Type.String(),
  username: Type.String(),
  gmStreak: Type.Number(),
  xp: Type.Number(),
  level: Type.Number()
})

export type LayerThreeUsersApiResponse = Static<typeof LayerThreeUsersApiResponseSchema>

export type LayerZeroApiAutocompleteResponse = Static<typeof LayerThreeUsersApiResponseSchema>
