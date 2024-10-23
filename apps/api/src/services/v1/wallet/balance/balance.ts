// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1WalletBalanceQueryValidator,
  v1WalletBalanceResolver,
  v1WalletBalanceExternalResolver,
  v1WalletBalanceQueryResolver
} from './balance.schema'

import type { Application } from '../../../../declarations'
import { V1WalletBalanceService, getOptions } from './balance.class'
import { moralisBalanceByWallet } from '../../../../vendors/chain-api/moralis/moralis-get-balance-by-wallet'

export const v1WalletBalancePath = '/v1/balance/wallet'
export const v1WalletBalanceMethods: Array<keyof V1WalletBalanceService> = ['find']

export * from './balance.class'
export * from './balance.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const v1WalletBalance = (app: Application) => {
  // Register our service on the Feathers application
  app.use(v1WalletBalancePath, new V1WalletBalanceService(getOptions(app, moralisBalanceByWallet)), {
    // A list of all methods this service exposes externally
    methods: v1WalletBalanceMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(v1WalletBalancePath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(v1WalletBalanceExternalResolver),
        schemaHooks.resolveResult(v1WalletBalanceResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(v1WalletBalanceQueryValidator),
        schemaHooks.resolveQuery(v1WalletBalanceQueryResolver)
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
    [v1WalletBalancePath]: V1WalletBalanceService
  }
}
