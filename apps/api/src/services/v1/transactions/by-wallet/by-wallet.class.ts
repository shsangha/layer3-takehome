import type { Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../../declarations'
import {
  CHAINS,
  SORT_ORDER,
  type V1TransactionByWallet,
  type V1TransactionByWalletAPI,
  type V1TransactionByWalletQuery
} from '@repo/api-lib'

export type { V1TransactionByWallet, V1TransactionByWalletQuery }

export interface V1TransactionByWalletServiceOptions {
  app: Application
  transactionsByWalletApi: V1TransactionByWalletAPI
}

export interface V1TransactionByWalletParams extends Params<V1TransactionByWalletQuery> {}

export class V1TransactionByWalletService<
  ServiceParams extends V1TransactionByWalletParams = V1TransactionByWalletParams
> implements ServiceInterface<V1TransactionByWallet, ServiceParams>
{
  constructor(public options: V1TransactionByWalletServiceOptions) {}

  async find(params: ServiceParams): Promise<V1TransactionByWallet> {
    const { transactionsByWalletApi } = this.options
    const query = params.query! // validator catches if this is not present before so we can safely unwrap
    return await transactionsByWalletApi(query)
  }
}

export const getOptions = (app: Application, transactionsByWalletApi: V1TransactionByWalletAPI) => {
  return { app, transactionsByWalletApi }
}
