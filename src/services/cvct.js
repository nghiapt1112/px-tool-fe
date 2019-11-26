import api from './api'

export const getList = (payload) => {
  return api.get('/dashboard/receiver', {params: payload})
}

