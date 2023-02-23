import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'https://xxx.com/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Custom-Header': 'vue-web'
  }
})

// 添加请求拦截器
axios.interceptors.request.use(config => {
  config.headers['X-Token'] = 'xxx'
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数
  return response
}, error => {
  // 超出 2xx 范围的状态码都会触发该函数
  return Promise.reject(error)
})

export interface IResponse {
  code: number,
  msg: string,
  data: any
}

export const request = async (url: string, method = 'get', params = {}, extra = {}): Promise<IResponse> => {
  try {
    const config: AxiosRequestConfig = {
      ...extra,
      url,
      method,
    }
    if (method.toLowerCase() === 'get') {
      config.params = params
    } else {
      config.data = params
    }
    const result = await instance.request(config)
    return result.data
  } catch (error: any) {
    console.error('request error:', error)
    if (error?.reponse?.status) {
      return { code: error.reponse.status, msg: 'error', data: null }
    }
    return { code: 0, msg: 'error', data: null }
  }
}

export const get = (url: string, params = {}, extra = {}) => {
  return request(url, 'get', params, extra)
}

export const post = (url: string, params = {}, extra = {}) => {
  return request(url, 'post', params, extra)
}

