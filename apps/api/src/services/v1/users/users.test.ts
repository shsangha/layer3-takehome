import { V1UsersService } from './users.class'
import { Application } from '../../../declarations'

describe('V1UsersService', () => {
  let app: Application
  let service: V1UsersService

  beforeEach(() => {
    app = {} as Application
    service = new V1UsersService({ app })
  })

  it('should find a hardcoded user', async () => {
    const result = await service.find()

    expect(result).toEqual({
      rank: 1,
      address: '0xF222f955Ecced246f3181d14fB4629469cEB7681',
      avatarCid: 'QmTUefEyqzfSugwvbCnTjzRdFvp4L5yA6qjEx1yspsr17z',
      username: 'yakugakusei.eth',
      gmStreak: 248,
      xp: 169164,
      level: 41
    })
  })
})
