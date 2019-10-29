import api from './api'

export const getList = () => {
  return api.get('/px/lkh')
}

export const getById = (requestId) => {
  return api.get(`/px/ttkh/${requestId}`)
}

export const create = (payload) => {
  return api.post('/px/tkh', payload)
}

export const update = (payload) => {
  return api.put('/px/ukh', payload)
}

export const chuyen = (requestId) => {
  return api.post('/px/chuyen', payload)
}
