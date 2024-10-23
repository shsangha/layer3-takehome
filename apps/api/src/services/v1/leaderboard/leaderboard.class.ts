// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../declarations'
import type { V1LeaderboardQuery } from './leaderboard.validators'
import { LeaderboardV1Api, V1Leaderboard } from '@repo/api-lib'

export type { V1LeaderboardQuery }

export interface V1LeaderboardServiceOptions {
  app: Application
  leaderboardApi: LeaderboardV1Api
}

export interface V1LeaderboardParams extends Params<V1LeaderboardQuery> {}

export class V1LeaderboardService<ServiceParams extends V1LeaderboardParams = V1LeaderboardParams>
  implements ServiceInterface<V1Leaderboard, ServiceParams>
{
  constructor(public options: V1LeaderboardServiceOptions) {}

  async find(params: ServiceParams): Promise<V1Leaderboard> {
    const { leaderboardApi } = this.options

    const { offset = 0, limit = 10 } = params.query! //always defined the validator ensures it

    // the count is the total number of users that match the query, we need that to paginate or to infinite scroll
    const { users, count } = await leaderboardApi({ offset, limit })

    return {
      data: users,
      meta: {
        count
      }
    }
  }
}

export const getOptions = (app: Application, api: LeaderboardV1Api) => {
  return { app, leaderboardApi: api }
}
