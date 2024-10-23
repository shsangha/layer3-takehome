// This file sets up and exports two Ajv (Another JSON Schema Validator) instances
// for validating data and queries in the application.

// The Ajv instances are configured with additional formats for enhanced validation capabilities.
// These formats include common patterns like date-time, email, IP addresses, and more.

// The dataValidator is used for validating request bodies and other data objects.
// It uses default Ajv settings.

// The queryValidator is specifically configured for validating query parameters.
// It has coerceTypes set to true, which allows it to attempt type coercion when validating.

// Both validators are exported for use in other parts of the application,
// ensuring consistent data validation across different services and routes.

import { Ajv, addFormats } from '@feathersjs/schema'
import type { FormatsPluginOptions } from '@feathersjs/schema'

const formats: FormatsPluginOptions = [
  'date-time',
  'time',
  'date',
  'email',
  'hostname',
  'ipv4',
  'ipv6',
  'uri',
  'uri-reference',
  'uuid',
  'uri-template',
  'json-pointer',
  'relative-json-pointer',
  'regex'
]

export const dataValidator: Ajv = addFormats(new Ajv({}), formats)

export const queryValidator: Ajv = addFormats(
  new Ajv({
    coerceTypes: true
  }),
  formats
)
