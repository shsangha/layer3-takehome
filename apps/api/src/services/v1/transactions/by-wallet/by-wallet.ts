// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1TransactionByWalletQueryValidator,
  v1TransactionByWalletResolver,
  v1TransactionByWalletExternalResolver,
  v1TransactionByWalletQueryResolver
} from './by-wallet.validators'

import type { Application } from '../../../../declarations'
import { V1TransactionByWalletService, getOptions } from './by-wallet.class'
import { moralisTransactionsByWalletApi } from '../../../../vendors/chain-api/moralis/moralis-transactions-by-wallet-api'

export const v1TransactionByWalletPath = 'v1/transactions/by-wallet/' // intentionally not using a path param incase we want to support multiple wallets in the future
export const v1TransactionByWalletMethods: Array<keyof V1TransactionByWalletService> = ['find']

export * from './by-wallet.class'
export * from './by-wallet.validators'

// A configure function that registers the service and its hooks via `app.configure`
export const v1TransactionByWallet = (app: Application) => {
  // Register our service on the Feathers application
  app.use(
    v1TransactionByWalletPath,
    new V1TransactionByWalletService(getOptions(app, moralisTransactionsByWalletApi)),
    {
      // A list of all methods this service exposes externally
      methods: v1TransactionByWalletMethods,
      // You can add additional custom events to be sent to clients here
      events: []
    }
  )
  // Initialize hooks
  app.service(v1TransactionByWalletPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(v1TransactionByWalletExternalResolver),
        schemaHooks.resolveResult(v1TransactionByWalletResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(v1TransactionByWalletQueryValidator),
        schemaHooks.resolveQuery(v1TransactionByWalletQueryResolver)
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
    [v1TransactionByWalletPath]: V1TransactionByWalletService
  }
}
