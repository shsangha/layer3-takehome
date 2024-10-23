import type { Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../../declarations'
import type { V1WalletActivity, V1WalletActivityAPI, V1WalletActivityQuery } from '@repo/api-lib'

export type { V1WalletActivity, V1WalletActivityQuery }

export interface V1WalletActivityServiceOptions {
  app: Application
  api: V1WalletActivityAPI
}

export interface V1WalletActivityParams extends Params<V1WalletActivityQuery> {}

export class V1WalletActivityService<ServiceParams extends V1WalletActivityParams = V1WalletActivityParams>
  implements ServiceInterface<V1WalletActivity, ServiceParams>
{
  constructor(public options: V1WalletActivityServiceOptions) {}

  async find(params: ServiceParams): Promise<V1WalletActivity> {
    return await this.options.api(params.query!) // the tyebox validation ensures that the query is not undefined
  }
}

export const getOptions = (app: Application, api: V1WalletActivityAPI) => {
  return { app, api }
}
