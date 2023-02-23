import { random, mockGet } from './request'

mockGet(/\/userinfo/, {
  code: 200,
  msg: 'success',
  data: {
    id: random.guid(),
    name: random.name(),
    email: random.email()
  }
})