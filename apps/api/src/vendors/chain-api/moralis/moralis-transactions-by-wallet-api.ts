import axios from 'axios'
import type { V1TransactionByWalletAPI, V1TransactionByWalletQuery } from '@repo/api-lib'
import { SORT_ORDER, CHAINS } from '@repo/api-lib'
import logger from '@repo/logger'
import _ from 'lodash'

// this should be config not a constant, doing this out of convenience
const MORALIS_BASE_URL = 'https://deep-index.moralis.io/api/v2.2'

// should be config not a constant
const DEFAULT_LIMIT = 10

export const moralisTransactionsByWalletApi: V1TransactionByWalletAPI = async ({
  walletAddress,
  chain = CHAINS.ETHEREUM_MAINNET,
  sortOrder = SORT_ORDER.DESC,
  limit = DEFAULT_LIMIT,
  ...optionalParams
}: V1TransactionByWalletQuery) => {
  try {
    if (!process.env.MORALIS_API_KEY) {
      throw new Error('MORALIS_API_KEY is not set in the environment variables')
    }

    let optionalFilters = new URLSearchParams(
      _.omitBy(optionalParams, _.isEmpty) as Record<string, string>
    ).toString()
    if (optionalFilters) optionalFilters = `&${optionalFilters}`

    const queryUrl = `${MORALIS_BASE_URL}/wallets/${walletAddress}/history?chain=${chain}&order=${sortOrder}&limit=${limit}${optionalFilters}`

    const response = await axios.get(queryUrl, {
      headers: {
        'X-API-Key': process.env.MORALIS_API_KEY,
        Accept: 'application/json'
      }
    })

    const formattedResults = _.map(response.data.result, (result) =>
      _.pick(result, [
        'category',
        'from_address',
        'to_address',
        'result',
        'gas',
        'gasprice',
        'hash',
        'summary'
      ])
    )

    return {
      cursor: response.data.cursor,
      page: response.data.page,
      limit: response.data.limit,
      total: response.data.total,
      results: formattedResults
    }
  } catch (error) {
    logger.error(error)
    throw new Error('Error fetching transactions from Moralis')
  }
}
