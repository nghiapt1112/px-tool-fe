import api from './api'

export const create = (payload) => {
  return api.post('/vbd', payload)
}

export const getNoiNhanById = (params) => {
  return api.get('/req/vbd/noi-nhan', { params });
}

export const getThuMuc = (params) => {
  return api.get('/users/list-thu-muc')
}

export const moveThuMu = (payload) => {
  return api.post('/vbd/move-vbd', payload)
}

export const getList = (payload) => {
  return api.get('/vbd', { params: payload })
}

export const getListReceive = (payload) => {
  return api.get('/vbd/receive', { params: payload })
}

export const getById = (requestId) => {
  return api.get(`/vbd/${requestId}`)
}

export const deleteById = (requestId) => {
  return api.delete(`/vbd/${requestId}`)
}
