import api from './api'

export const getList = () => {
  return api.get('/cntp')
}
export const getById = (requestId) => {
  return api.get(`/cntp/${requestId}`)
}
export const create = (payload) => {
  return api.post('/cntp', payload)
}

export const update = (payload) => {
  return api.put('/cntp', payload)
}

export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}

export const getNguoiLam = () => {
  return api.get('/req/cntp/nguoi-lam');
}
