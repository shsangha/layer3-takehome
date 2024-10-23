// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../declarations'
import type { V1Users, V1UsersQuery } from '@repo/api-lib'

export interface V1UsersServiceOptions {
  app: Application
}

export interface V1UsersParams extends Params<V1UsersQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class V1UsersService<ServiceParams extends V1UsersParams = V1UsersParams>
  implements ServiceInterface<V1Users, ServiceParams>
{
  constructor(public options: V1UsersServiceOptions) {}

  // being lazy at this point and returning a hardcoded user
  async find(): Promise<V1Users> {
    return {
      rank: 1,
      address: '0xF222f955Ecced246f3181d14fB4629469cEB7681',
      avatarCid: 'QmTUefEyqzfSugwvbCnTjzRdFvp4L5yA6qjEx1yspsr17z',
      username: 'yakugakusei.eth',
      gmStreak: 248,
      xp: 169164,
      level: 41
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
