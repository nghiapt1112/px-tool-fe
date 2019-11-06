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

export const getNoiNhanById = (requestId) => {
  const link = requestId ? `/req/noi-nhan?requestId=${requestId}` : `/req/noi-nhan`;
  return api.get(link)
}
