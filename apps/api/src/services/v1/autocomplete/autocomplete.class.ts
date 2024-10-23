import type { Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../declarations'
import type { AutocompleteV1, AutoCompleteV1Api, AutocompleteV1Query } from '@repo/api-lib'

export type { AutocompleteV1, AutocompleteV1Query }

export interface AutocompleteV1ServiceOptions {
  app: Application
  autocompleteApi: AutoCompleteV1Api
}

export interface AutocompleteV1Params extends Params<AutocompleteV1Query> {}

export class AutocompleteV1Service<ServiceParams extends AutocompleteV1Params = AutocompleteV1Params>
  implements ServiceInterface<AutocompleteV1, ServiceParams>
{
  constructor(public options: AutocompleteV1ServiceOptions) {}

  async find(params: ServiceParams): Promise<AutocompleteV1> {
    const { searchTerm, limit = 10 } = params.query! // search term is always defined the validator ensures it

    const { autocompleteApi } = this.options

    const users = await autocompleteApi({ searchTerm, limit })

    return {
      data: users,
      meta: {
        count: users.length
      }
    }
  }
}
export const getOptions = (app: Application, autocompleteApi: AutoCompleteV1Api) => {
  return { app, autocompleteApi }
}
