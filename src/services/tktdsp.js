import api from './api'

export const getList = () => {
  return api.get('/thongke')
}
