import { resolve } from '@feathersjs/schema'
import { getValidator } from '@feathersjs/typebox'

import type { HookContext } from '../../../../declarations'
import { dataValidator, queryValidator } from '../../../../validators'
import type { V1TransactionByWalletQuery, V1TransactionByWalletService } from './by-wallet.class'
import {
  v1TransactionByWalletQuerySchema,
  v1TransactionByWalletSchema,
  V1TransactionByWallet
} from '@repo/api-lib'

export const v1TransactionByWalletQueryValidator = getValidator(
  v1TransactionByWalletQuerySchema,
  queryValidator
)
export const v1TransactionByWalletQueryResolver = resolve<
  V1TransactionByWalletQuery,
  HookContext<V1TransactionByWalletService>
>({})

export const v1TransactionByWalletResolver = resolve<
  V1TransactionByWallet,
  HookContext<V1TransactionByWalletService>
>({})

export const v1TransactionByWalletExternalResolver = resolve<
  V1TransactionByWallet,
  HookContext<V1TransactionByWalletService>
>({})

export const v1TransactionByWalletValidator = getValidator(v1TransactionByWalletSchema, dataValidator)
