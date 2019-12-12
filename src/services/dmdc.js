import api from './api'

export const getListMDSD = () => {
  return api.get('/mdsd')
}

export const getListThuMuc = () => {
  return api.get('/thu-muc')
}

export const updateMDSD = (payload) => {
  return api.post('/mdsd', payload)
}


export const updateThuMuc = (payload) => {
  return api.post('/thu-muc', payload)
}
