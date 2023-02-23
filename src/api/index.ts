import { get } from './request'

export const getUserInfo = () => {
  return get('/userinfo')
}