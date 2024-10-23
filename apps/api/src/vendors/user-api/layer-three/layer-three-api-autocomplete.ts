import { AutoCompleteV1Api } from '@repo/api-lib'
import axios from 'axios'
import logger from '@repo/logger'
import _ from 'lodash'
import { LayerThreeUsersApiResponse } from './types'
import layerZeroApiAutocompleteAdapter from './adapter'

export const layerZeroApiAutocomplete: AutoCompleteV1Api = async (query) => {
  try {
    const result = await axios.get(`https://layer3.xyz/api/assignment/users`) // this should be in config. hardcoding for takehome time sake.
    const users = _.get(result, 'data.users', [])

    const filteredUsers: LayerThreeUsersApiResponse[] = users.filter((user: LayerThreeUsersApiResponse) => {
      const userName = _.get(user, 'username')
      const address = _.get(user, 'address')
      return (
        (_.startsWith(userName, query.searchTerm) || _.startsWith(address, query.searchTerm)) &&
        !_.isEmpty(query.searchTerm)
      )
    })
    const formattedUsers = filteredUsers.map((user) => layerZeroApiAutocompleteAdapter(user)) // adapt the api to fit the interface we control so we can swap it out later
    const limitedUsers = _.slice(formattedUsers, 0, query.limit) // if limit is greater than filteredUsers.length, it will return all filteredUsers

    return limitedUsers
  } catch (error) {
    logger.error('Error fetching autocomplete suggestions:', error)
    throw error
  }
}
