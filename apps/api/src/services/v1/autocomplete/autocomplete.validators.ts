import { resolve } from '@feathersjs/schema'
import { getValidator } from '@feathersjs/typebox'
import {
  AutocompleteV1Schema,
  AutocompleteV1QuerySchema,
  AutocompleteV1,
  AutocompleteV1Query
} from '@repo/api-lib'

import type { HookContext } from '../../../declarations'
import { dataValidator, queryValidator } from '../../../validators'
import type { AutocompleteV1Service } from './autocomplete.class'

export const autocompleteV1Validator = getValidator(AutocompleteV1Schema, dataValidator)
export const autocompleteV1Resolver = resolve<AutocompleteV1, HookContext<AutocompleteV1Service>>({})
export const autocompleteV1ExternalResolver = resolve<AutocompleteV1, HookContext<AutocompleteV1Service>>({})
export const autocompleteV1QueryValidator = getValidator(AutocompleteV1QuerySchema, queryValidator)
export const autocompleteV1QueryResolver = resolve<AutocompleteV1Query, HookContext<AutocompleteV1Service>>(
  {}
)
