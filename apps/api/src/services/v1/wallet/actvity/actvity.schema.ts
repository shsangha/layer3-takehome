import { resolve } from '@feathersjs/schema'
import { getValidator } from '@feathersjs/typebox'

import type { HookContext } from '../../../../declarations'
import { dataValidator, queryValidator } from '../../../../validators'
import type { V1WalletActivityService } from './actvity.class'
import {
  V1WalletActivity,
  V1WalletActivityQuery,
  v1WalletActivityQuerySchema,
  v1WalletActivitySchema
} from '@repo/api-lib'

export const v1WalletActivityValidator = getValidator(v1WalletActivitySchema, dataValidator)
export const v1WalletActivityResolver = resolve<V1WalletActivity, HookContext<V1WalletActivityService>>({})

export const v1WalletActivityQueryValidator = getValidator(v1WalletActivityQuerySchema, queryValidator)
export const v1WalletActivityQueryResolver = resolve<
  V1WalletActivityQuery,
  HookContext<V1WalletActivityService>
>({})

export const v1WalletActivityExternalResolver = resolve<
  V1WalletActivity,
  HookContext<V1WalletActivityService>
>({})
