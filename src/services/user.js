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

export const getList = (payload) => {
  return api.get('/users', { params: payload })
}

export const getUserById = (userId) => {
  return api.get('/users/detail', { params: { userId: userId } })
}

export const getLevel = () => {
  return api.get('/users/roles')
}

export const getPhongBan = () => {
  return api.get('/users/phongbans')
}

export const create = (payload) => {
  return api.post('/users/tao-user', payload)
}

export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`)
}
