import api from './api'

export const create = (payload) => {
  return api.post('/vbd', payload)
}

export const getNoiNhanById = (params) => {
  return api.get('/req/vbd/noi-nhan', { params });
}

export const getList = () => {
  return api.get('/vbd')
}

export const getListReceive = () => {
  return api.get('/vbd/receive')
}

export const getById = (requestId) => {
  return api.get(`/vbd/${requestId}`)
}

export const deleteById = (requestId) => {
  return api.delete(`/vbd/${requestId}`)
}
