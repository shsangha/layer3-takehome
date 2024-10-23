import { services } from './index'
import { v1Users } from './v1/users/users'
import { v1WalletBalance } from './v1/wallet/balance/balance'
import { v1WalletActivity } from './v1/wallet/actvity/actvity'
import { v1TransactionByWallet } from './v1/transactions/by-wallet/by-wallet'
import { v1Leaderboard } from './v1/leaderboard/leaderboard'
import { autocompleteV1 } from './v1/autocomplete/autocomplete'
import type { Application } from '../declarations'

// Mock all the service modules
jest.mock('./v1/users/users')
jest.mock('./v1/wallet/balance/balance')
jest.mock('./v1/wallet/actvity/actvity')
jest.mock('./v1/transactions/by-wallet/by-wallet')
jest.mock('./v1/leaderboard/leaderboard')
jest.mock('./v1/autocomplete/autocomplete')

describe('services', () => {
  let mockApp: Application

  beforeEach(() => {
    // Create a mock Application object
    mockApp = {
      configure: jest.fn()
    } as unknown as Application
  })

  it('should configure all services', () => {
    // Call the services function with our mock app
    services(mockApp)

    // Check that app.configure was called for each service
    expect(mockApp.configure).toHaveBeenCalledWith(v1Users)
    expect(mockApp.configure).toHaveBeenCalledWith(v1WalletBalance)
    expect(mockApp.configure).toHaveBeenCalledWith(v1WalletActivity)
    expect(mockApp.configure).toHaveBeenCalledWith(v1TransactionByWallet)
    expect(mockApp.configure).toHaveBeenCalledWith(v1Leaderboard)
    expect(mockApp.configure).toHaveBeenCalledWith(autocompleteV1)

    // Check that app.configure was called exactly 6 times
    expect(mockApp.configure).toHaveBeenCalledTimes(6)
  })
})
