import { resolve } from '@feathersjs/schema'
import { getValidator } from '@feathersjs/typebox'

import type { HookContext } from '../../../../declarations'
import { dataValidator, queryValidator } from '../../../../validators'
import { v1WalletBalanceSchema, V1WalletBalance, V1WalletBalanceQuery } from '@repo/api-lib'
import { V1WalletBalanceService } from './balance.class'

export const v1WalletBalanceQueryValidator = getValidator(v1WalletBalanceSchema, queryValidator)
export const v1WalletBalanceQueryResolver = resolve<
  V1WalletBalanceQuery,
  HookContext<V1WalletBalanceService>
>({})
export const v1WalletBalanceValidator = getValidator(v1WalletBalanceSchema, dataValidator)
export const v1WalletBalanceResolver = resolve<V1WalletBalance, HookContext<V1WalletBalanceService>>({})
export const v1WalletBalanceExternalResolver = resolve<V1WalletBalance, HookContext<V1WalletBalanceService>>(
  {}
)
