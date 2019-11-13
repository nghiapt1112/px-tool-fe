import api from './api'

export const getList = () => {
  return api.get('/pdh')
}
export const getById = (requestId) => {
  return api.get(`/pdh/${requestId}`)
}
export const create = (payload) => {
  return api.post('/pdh', payload)
}

export const update = (payload) => {
  return api.put('/pdh', payload)
}

export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}
