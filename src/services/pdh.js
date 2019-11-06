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

export const getNoiNhanById = (requestId) => {
  const link = requestId ? `/req/noi-nhan?requestId=${requestId}` : `/req/noi-nhan`;
  return api.get(link)
}
