import Mock from 'mockjs'
import { IResponse } from '@/api/request'

Mock.setup({ timeout: '200-600' })

export const random: Mock.MockjsRandom = Mock.Random

export const mockGet = (url: string | RegExp, template: IResponse) => {
  return Mock.mock(url, 'get', template)
}

export const mockPost = (url: string | RegExp, template: IResponse) => {
  return Mock.mock(url, 'post', template)
}