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
export const getNoiNhanById = (params) => {
  return api.get('/req/noi-nhan', { params });
}

export const getNguoiThucHien = (params) => {
  return api.get('/req/nguoi-thuc-hien', { params });
}

export const getCusNoiNhan = (params) => {
  return api.get('/req/cus-noi-nhan', { params });
}

export const getPAIdByDetailsIds = (payload) => {
  return api.post('/pa/tao-pa', payload);
}

