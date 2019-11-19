import api from './api'

export const getList = () => {
  return api.get('/px/lkh')
}

export const getById = (requestId) => {
  return api.get(`/px/ttkh/${requestId}`)
}

export const getPhanXuong = () => {
  return api.get(`/req/phan-xuong`)
}

export const getToSXByPXId = (pxId) => {
  return api.get(`/req/to-sx?pxId=${pxId}`)
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
