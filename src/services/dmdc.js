import api from './api'

export const getListMDSD = () => {
  return api.get('/mdsd')
}

export const getListThuMuc = () => {
  return api.get('/users/list-thu-muc')
}

export const updateMDSD = (payload) => {
  return api.post('/mdsd', payload)
}

export const deleteMDSD = (id) => {
  return api.delete(`/mdsd/${id}`)
}


export const updateThuMuc = (payload) => {
  return api.post('/users/thu-muc', payload)
}
