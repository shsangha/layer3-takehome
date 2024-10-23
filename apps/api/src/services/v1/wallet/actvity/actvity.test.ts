import { V1WalletActivityService } from './actvity.class'
import { Application } from '../../../../declarations'
import { V1WalletActivityAPI } from '@repo/api-lib'

describe('V1WalletActivityService', () => {
  let app: Application
  let api: jest.MockedFunction<V1WalletActivityAPI>
  let service: V1WalletActivityService

  beforeEach(() => {
    app = {} as Application
    api = jest.fn()
    service = new V1WalletActivityService({ app, api })
  })

  it('should find wallet activity', async () => {
    const mockActivity = { transactions: [{ id: '1', amount: '10' }] }

    const result = await service.find({ query: { address: '0x123' } })

    expect(result).toEqual(mockActivity)
    expect(api).toHaveBeenCalledWith({ address: '0x123' })
  })
})
