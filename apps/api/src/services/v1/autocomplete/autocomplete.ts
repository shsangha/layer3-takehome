import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  autocompleteV1QueryValidator,
  autocompleteV1Resolver,
  autocompleteV1ExternalResolver,
  autocompleteV1QueryResolver
} from './autocomplete.validators'

import type { Application } from '../../../declarations'
import { AutocompleteV1Service, getOptions } from './autocomplete.class'
import { layerZeroApiAutocomplete } from '../../../vendors/user-api/layer-three/layer-three-api-autocomplete'

export const autocompleteV1Path = 'v1/autocomplete'
export const autocompleteV1Methods: Array<keyof AutocompleteV1Service> = ['find']

export * from './autocomplete.class'
export * from './autocomplete.validators'

// A configure function that registers the service and its hooks via `app.configure`
export const autocompleteV1 = (app: Application) => {
  // Register our service on the Feathers application
  app.use(autocompleteV1Path, new AutocompleteV1Service(getOptions(app, layerZeroApiAutocomplete)), {
    // A list of all methods this service exposes externally
    methods: autocompleteV1Methods
    // You can add additional custom events to be sent to clients here
  })
  // Initialize hooks
  app.service(autocompleteV1Path).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(autocompleteV1ExternalResolver),
        schemaHooks.resolveResult(autocompleteV1Resolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(autocompleteV1QueryValidator),
        schemaHooks.resolveQuery(autocompleteV1QueryResolver)
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
    [autocompleteV1Path]: AutocompleteV1Service
  }
}
