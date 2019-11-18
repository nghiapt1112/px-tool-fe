import api from './api'

export const create = (payload) => {
  return api.post('/px/tkh', payload)
}

export const getNoiNhanById = (params) => {
  return api.get('/req/vbd/noi-nhan', { params });
}

export const getList = () => {
  return api.get('/vbd')
}
