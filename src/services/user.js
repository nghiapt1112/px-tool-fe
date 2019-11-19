import api from './api'

export const getUserInfo = () => {
  return api.get('/users/info')
}

export const getNotification = () => {
  return api.get('/req/notification')
}

export const markReadNotification = (notiId) => {
  return api.get(`/req/notification/${notiId}`)
}

