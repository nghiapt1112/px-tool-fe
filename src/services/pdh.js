import api from './api'

export const getList = () => {
  return api.get('/pdh')
}

export const create = (payload) => {
  return api.post('/pdh', payload)
}

export const update = (payload) => {
  return api.put('/pdh', payload)
}

