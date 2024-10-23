// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1LeaderboardQueryValidator,
  v1LeaderboardResolver,
  v1LeaderboardExternalResolver,
  v1LeaderboardQueryResolver
} from './leaderboard.validators'

import type { Application } from '../../../declarations'
import { V1LeaderboardService, getOptions } from './leaderboard.class'
import { layerThreeApiLeaderboard } from '../../../vendors/user-api/layer-three/layer-three-api-leaderboard'

export const v1LeaderboardPath = 'v1/leaderboard'
export const v1LeaderboardMethods: Array<keyof V1LeaderboardService> = ['find']

export * from './leaderboard.class'
export * from './leaderboard.validators'

// A configure function that registers the service and its hooks via `app.configure`
export const v1Leaderboard = (app: Application) => {
  // Register our service on the Feathers application
  app.use(v1LeaderboardPath, new V1LeaderboardService(getOptions(app, layerThreeApiLeaderboard)), {
    // A list of all methods this service exposes externally
    methods: v1LeaderboardMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(v1LeaderboardPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(v1LeaderboardExternalResolver),
        schemaHooks.resolveResult(v1LeaderboardResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(v1LeaderboardQueryValidator),
        schemaHooks.resolveQuery(v1LeaderboardQueryResolver)
      ],
      find: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    [v1LeaderboardPath]: V1LeaderboardService
  }
}
