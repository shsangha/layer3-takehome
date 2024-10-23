import { V1LeaderboardService } from './leaderboard.class'
import { Application } from '../../../declarations'
import { LeaderboardV1Api } from '@repo/api-lib'

describe('V1LeaderboardService', () => {
  let app: Application
  let leaderboardApi: jest.MockedFunction<LeaderboardV1Api>
  let service: V1LeaderboardService

  beforeEach(() => {
    app = {} as Application
    leaderboardApi = jest.fn()
    service = new V1LeaderboardService({ app, leaderboardApi })
  })

  it('should find leaderboard data', async () => {
    const mockLeaderboardData = {
      users: [{ id: '1', name: 'User 1', score: 100 }],
      count: 1
    }

    const result = await service.find({ query: { offset: 0, limit: 10 } })

    expect(result).toEqual({
      data: mockLeaderboardData.users,
      meta: { count: mockLeaderboardData.count }
    })
    expect(leaderboardApi).toHaveBeenCalledWith({ offset: 0, limit: 10 })
  })
})
