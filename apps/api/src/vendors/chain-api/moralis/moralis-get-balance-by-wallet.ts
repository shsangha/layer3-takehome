import axios from 'axios'
import type { V1WalletBalanceAPI } from '@repo/api-lib'
import logger from '@repo/logger'
import _, { chain } from 'lodash'

// this should be config not a constant, doing this out of convenience
const MORALIS_BASE_URL = 'https://deep-index.moralis.io/api/v2.2'

export const moralisBalanceByWallet: V1WalletBalanceAPI = async ({
  address,
  chain
}: {
  address: string
  chain: string
}) => {
  try {
    if (!process.env.MORALIS_API_KEY) {
      throw new Error('MORALIS_API_KEY is not set in the environment variables')
    }

    const queryUrl = `${MORALIS_BASE_URL}/${address}/balance?chain=${chain}`

    const response = await axios.get(queryUrl, {
      headers: {
        'X-API-Key': process.env.MORALIS_API_KEY,
        Accept: 'application/json'
      }
    })

    return {
      nativeBalance: response.data.balance
    }
  } catch (error) {
    logger.error(error)
    throw new Error('Error fetching balance from Moralis')
  }
}
