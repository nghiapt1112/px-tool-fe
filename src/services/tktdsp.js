import api from './api'

export const getList = (payload) => {
  return api.get('/thongke', { params: payload })
}

export const getListMDSD = () => {
  return api.get('/mdsd')
}
