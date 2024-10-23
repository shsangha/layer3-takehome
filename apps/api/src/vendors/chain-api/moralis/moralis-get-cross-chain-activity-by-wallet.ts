import axios from 'axios'
import type { V1WalletActivityAPI, V1WalletActivityQuery } from '@repo/api-lib'
import logger from '@repo/logger'
import _, { chain } from 'lodash'

// this should be config not a constant, doing this out of convenience
const MORALIS_BASE_URL = 'https://deep-index.moralis.io/api/v2.2'

export const moralisWalletCrossChainActivityApi: V1WalletActivityAPI = async ({
  address
}: V1WalletActivityQuery) => {
  try {
    if (!process.env.MORALIS_API_KEY) {
      throw new Error('MORALIS_API_KEY is not set in the environment variables')
    }

    const queryUrl = `${MORALIS_BASE_URL}/wallets/${address}/chains`

    const response = await axios.get(queryUrl, {
      headers: {
        'X-API-Key': process.env.MORALIS_API_KEY,
        Accept: 'application/json'
      }
    })

    const activeChains = _.map(response.data.active_chains, (result) => ({
      chain: result.chain,
      chainId: result.chain_id
    }))

    return {
      address,
      activeChains
    }
  } catch (error) {
    logger.error(error)
    throw new Error('Error fetching cross chain activity from Moralis')
  }
}
