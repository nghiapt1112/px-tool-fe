import api from './api'

export const getListMDSD = () => {
  return api.get('/mdsd')
}

export const addMDSD = (payload) => {
  return api.post('/mdsd', payload)
}

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

export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}

export const getNguoiThucHien = (params) => {
  return api.get('/req/nguoi-thuc-hien', { params });
}

export const getCusNoiNhan = (params) => {
  return api.get('/req/cus-noi-nhan', { params });
}
