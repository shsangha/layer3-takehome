import type { Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../../declarations'
import type { V1WalletBalance, V1WalletBalanceAPI, V1WalletBalanceQuery } from '@repo/api-lib'

export type { V1WalletBalance, V1WalletBalanceQuery }

export interface V1WalletBalanceServiceOptions {
  app: Application
  balanceByWalletApi: V1WalletBalanceAPI
}

export interface V1WalletBalanceParams extends Params<V1WalletBalanceQuery> {}

export class V1WalletBalanceService<ServiceParams extends V1WalletBalanceParams = V1WalletBalanceParams>
  implements ServiceInterface<V1WalletBalance, ServiceParams>
{
  constructor(public options: V1WalletBalanceServiceOptions) {}

  async find(params: ServiceParams): Promise<V1WalletBalance> {
    const { chain, address } = params.query!
    return await this.options.balanceByWalletApi({ address, chain })
  }
}

export const getOptions = (app: Application, balanceByWalletApi: V1WalletBalanceAPI) => {
  return { app, balanceByWalletApi }
}
