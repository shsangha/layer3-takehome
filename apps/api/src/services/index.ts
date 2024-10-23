import { v1Users } from './v1/users/users'
import { v1WalletBalance } from './v1/wallet/balance/balance'
import { v1WalletActivity } from './v1/wallet/actvity/actvity'
import { v1TransactionByWallet } from './v1/transactions/by-wallet/by-wallet'
import { v1Leaderboard } from './v1/leaderboard/leaderboard'
import { autocompleteV1 } from './v1/autocomplete/autocomplete'
import type { Application } from '../declarations'
export const services = (app: Application) => {
  app.configure(v1Users)
  app.configure(v1WalletBalance)
  app.configure(v1WalletActivity)
  app.configure(v1TransactionByWallet)
  app.configure(v1Leaderboard)
  app.configure(autocompleteV1)
  // All services will be registered here
}
