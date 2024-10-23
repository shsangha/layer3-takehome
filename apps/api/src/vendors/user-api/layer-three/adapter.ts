import _ from 'lodash'
import { LayerThreeUsersApiResponse } from './types'

const AVATAR_URI_BASE = 'https://ipfs.io/ipfs/'
// this would be in config, hardociding for takehome time sake.

export default function layerZeroApiAutocompleteAdapter(
  layerZeroApiAutocompleteResponse: LayerThreeUsersApiResponse
) {
  const responsePickOffCid = _.omit(layerZeroApiAutocompleteResponse, ['avatarCid'])
  const avatarCid = _.get(layerZeroApiAutocompleteResponse, 'avatarCid')
  return { ...responsePickOffCid, avatarUri: `${AVATAR_URI_BASE}/${avatarCid}` }
}
