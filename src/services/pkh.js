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

export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}
