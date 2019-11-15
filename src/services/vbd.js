import api from './api'

export const create = (payload) => {
  return api.post('/px/tkh', payload)
}

export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}
