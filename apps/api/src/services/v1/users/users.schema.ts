import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../../declarations'
import { dataValidator, queryValidator } from '../../../validators'
import { v1UsersQuerySchema, v1UsersSchema, V1Users } from '@repo/api-lib'
import { V1UsersService } from './users.class'

export type V1UsersQuery = Static<typeof v1UsersQuerySchema>
export const v1UsersQueryValidator = getValidator(v1UsersQuerySchema, queryValidator)
export const v1UsersQueryResolver = resolve<V1UsersQuery, HookContext<V1UsersService>>({})
export const v1UsersValidator = getValidator(v1UsersSchema, dataValidator)
export const v1UsersResolver = resolve<V1Users, HookContext<V1UsersService>>({})
export const v1UsersExternalResolver = resolve<V1Users, HookContext<V1UsersService>>({})
