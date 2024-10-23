import { v1LeaderboardSchema, v1LeaderboardQuerySchema, V1Leaderboard } from '@repo/api-lib'

import { resolve } from '@feathersjs/schema'
import { getValidator } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../../declarations'
import { dataValidator, queryValidator } from '../../../validators'
import type { V1LeaderboardService } from './leaderboard.class'

export type V1LeaderboardQuery = Static<typeof v1LeaderboardQuerySchema>
export const v1LeaderboardQueryValidator = getValidator(v1LeaderboardQuerySchema, queryValidator)
export const v1LeaderboardQueryResolver = resolve<V1LeaderboardQuery, HookContext<V1LeaderboardService>>({})

export const v1LeaderboardValidator = getValidator(v1LeaderboardSchema, dataValidator)
export const v1LeaderboardResolver = resolve<V1Leaderboard, HookContext<V1LeaderboardService>>({})

export const v1LeaderboardExternalResolver = resolve<V1Leaderboard, HookContext<V1LeaderboardService>>({})
