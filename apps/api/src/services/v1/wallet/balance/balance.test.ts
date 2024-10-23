import { V1WalletBalanceService } from './balance.class'
import { Application } from '../../../../declarations'
import { V1WalletBalanceAPI } from '@repo/api-lib'

describe('V1WalletBalanceService', () => {
  let app: Application
  let balanceByWalletApi: jest.MockedFunction<V1WalletBalanceAPI>
  let service: V1WalletBalanceService

  beforeEach(() => {
    app = {} as Application
    balanceByWalletApi = jest.fn()
    service = new V1WalletBalanceService({ app, balanceByWalletApi })
  })

  it('should find wallet balance', async () => {
    const mockBalance = { nativBalance: '100', symbol: 'ETH' }

    const result = await service.find({ query: { chain: 'ethereum', address: '0x123' } })

    expect(result).toEqual(mockBalance)
    expect(balanceByWalletApi).toHaveBeenCalledWith({ chain: 'ethereum', address: '0x123' })
  })
})
