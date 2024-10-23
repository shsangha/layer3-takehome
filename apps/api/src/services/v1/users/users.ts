// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1UsersQueryValidator,
  v1UsersResolver,
  v1UsersExternalResolver,
  v1UsersQueryResolver
} from './users.schema'

import type { Application } from '../../../declarations'
import { V1UsersService, getOptions } from './users.class'

export const v1UsersPath = 'v1/users'
export const v1UsersMethods: Array<keyof V1UsersService> = ['find']

export * from './users.class'
export * from './users.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const v1Users = (app: Application) => {
  // Register our service on the Feathers application
  app.use(v1UsersPath, new V1UsersService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: v1UsersMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(v1UsersPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(v1UsersExternalResolver), schemaHooks.resolveResult(v1UsersResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(v1UsersQueryValidator), schemaHooks.resolveQuery(v1UsersQueryResolver)],
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
    [v1UsersPath]: V1UsersService
  }
}
