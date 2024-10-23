import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1WalletActivityQueryValidator,
  v1WalletActivityResolver,
  v1WalletActivityExternalResolver,
  v1WalletActivityQueryResolver
} from './actvity.schema'

import type { Application } from '../../../../declarations'
import { V1WalletActivityService, getOptions } from './actvity.class'
import { moralisWalletCrossChainActivityApi } from '../../../../vendors/chain-api/moralis/moralis-get-cross-chain-activity-by-wallet'

export const v1WalletActivityPath = 'v1/wallet/cross-chain-activity'
export const v1WalletActivityMethods: Array<keyof V1WalletActivityService> = ['find']

export * from './actvity.class'
export * from './actvity.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const v1WalletActivity = (app: Application) => {
  // Register our service on the Feathers application
  app.use(
    v1WalletActivityPath,
    new V1WalletActivityService(getOptions(app, moralisWalletCrossChainActivityApi)),
    {
      // A list of all methods this service exposes externally
      methods: v1WalletActivityMethods,
      // You can add additional custom events to be sent to clients here
      events: []
    }
  )
  // Initialize hooks
  app.service(v1WalletActivityPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(v1WalletActivityExternalResolver),
        schemaHooks.resolveResult(v1WalletActivityResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(v1WalletActivityQueryValidator),
        schemaHooks.resolveQuery(v1WalletActivityQueryResolver)
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
declare module '../../../../declarations' {
  interface ServiceTypes {
    [v1WalletActivityPath]: V1WalletActivityService
  }
}
