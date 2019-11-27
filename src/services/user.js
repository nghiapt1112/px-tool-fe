import api from './api'

export const getUserInfo = () => {
  return api.get('/users/info')
}

export const update = (payload) => {
  return api.post('/users', payload)
}

export const getNotification = () => {
  return api.get('/req/notification')
}

export const markReadNotification = (notiId) => {
  return api.post(`/req/notification/${notiId}`)
}

