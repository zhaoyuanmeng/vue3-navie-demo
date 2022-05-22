import { defAxios as request, newAxios } from '@/utils/http'

export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export const loginPlus = (data) => {
  return newAxios({
    url: '/core/aaa.json',
    method: 'get',
    data,
  })
}

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
