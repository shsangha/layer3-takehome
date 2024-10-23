import { LeaderboardV1Api } from '@repo/api-lib'
import axios from 'axios'
import logger from '@repo/logger'
import _ from 'lodash'
import { LayerThreeUsersApiResponse } from './types'
import layerZeroApiAutocompleteAdapter from './adapter'

export const layerThreeApiLeaderboard: LeaderboardV1Api = async (query) => {
  try {
    const result = await axios.get<{ users: LayerThreeUsersApiResponse[] }>(
      `https://layer3.xyz/api/assignment/users`
    ) // this should be in config. hardcoding for takehome time sake.
    const users: LayerThreeUsersApiResponse[] = _.get(result, 'data.users', [])

    const limitedUsers = _.slice(users, query.offset, query.offset + query.limit) // Correctly simulate pagination by starting from offset and taking 'limit' number of items

    const formattedUsers = limitedUsers.map((user: LayerThreeUsersApiResponse) =>
      layerZeroApiAutocompleteAdapter(user)
    ) // adapt the api to fit the interface we control so we can swap it out later

    return { users: formattedUsers, count: users.length }
  } catch (error) {
    logger.error('Error fetching autocomplete suggestions:', error)
    throw error
  }
}
