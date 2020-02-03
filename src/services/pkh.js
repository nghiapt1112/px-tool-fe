import api from './api'

export const getList = () => {
  return api.get('/px/lkh')
}

export const getById = (requestId) => {
  return api.get(`/px/ttkh/${requestId}`)
}

export const getPhanXuong = (params) => {
  return api.get(`/req/phan-xuong`, { params })
}

export const getToSXByPXId = (params) => {
  return api.get(`/req/to-sx`, {params})
}

export const create = (payload) => {
  return api.post('/px/tkh', payload)
}

export const update = (payload) => {
  return api.put('/px/ukh', payload)
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
