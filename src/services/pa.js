import api from './api'

export const getList = () => {
  return api.get('/pa')
}
export const getById = (requestId) => {
  return api.get(`/pa/${requestId}`)
}
export const create = (payload) => {
  return api.post('/pa', payload)
}
export const update = (payload) => {
  return api.put('/pa', payload)
}
export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}
