import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/lumen-api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/lumen-api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/lumen-api/user/logout',
    method: 'post',
    params: { token }
  })
}
