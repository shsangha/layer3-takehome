// In the real world this would be in the api-lib package. Ran into an odd scenario where Typebox does not play well with the contract definition when outside the package the client is being intialized given it runs at com
// In the real world, this would be in the api-lib package.
// We encountered an unusual scenario where Typebox doesn't play well
// with the contract definition when it's outside the package where
// the client is being initialized, given that it runs at compile time.
// For sake of time and to get the typed client up without sinking time, this is being defined here.

import { initContract } from "@ts-rest/core";
//  nit -I should be consistent about v1 before or after the api name. Not going to re-do for now since all my times are feathers gererated
import {
  AutocompleteV1Query,
  AutocompleteV1,
  V1LeaderboardQuery,
  V1Leaderboard,
  V1TransactionByWalletQuery,
  V1TransactionByWallet,
  V1WalletActivityQuery,
  V1WalletActivity,
  V1WalletBalanceQuery,
  V1WalletBalance,
  V1UsersQuery,
  V1Users,
} from "@repo/api-lib";
const c = initContract();

export const contract = c.router({
  getAutocompleteSuggestions: c.query({
    method: "GET",
    path: "/v1/autocomplete",
    query: c.type<AutocompleteV1Query>(),
    responses: {
      200: c.type<AutocompleteV1>(), // treating all errors the same for now. In the real world would want to sperate bad requests from server errors. Given all activity read only not doing so for now.
    },
  }),
  getLeaderboard: c.query({
    method: "GET",
    path: "/v1/leaderboard",
    query: c.type<V1LeaderboardQuery>(),
    responses: {
      200: c.type<V1Leaderboard>(),
    },
  }),
  getTransactionsByWallet: c.query({
    method: "GET",
    path: "/v1/transactions/by-wallet",
    query: c.type<V1TransactionByWalletQuery>(),
    responses: {
      200: c.type<V1TransactionByWallet>(),
    },
  }),
  getWalletCrossChainActivity: c.query({
    method: "GET",
    path: "/v1/wallet/cross-chain-activity",
    query: c.type<V1WalletActivityQuery>(),
    responses: {
      200: c.type<V1WalletActivity>(),
    },
  }),
  getWalletBalance: c.query({
    method: "GET",
    path: "/v1/balance/wallet/:address",
    query: c.type<V1WalletBalanceQuery>(),
    responses: {
      200: c.type<V1WalletBalance>(),
    },
  }),
  getUser: c.query({
    method: "GET",
    path: "/v1/users",
    query: c.type<V1UsersQuery>(),
    responses: {
      200: c.type<V1Users>(),
    },
  }),
});
