import api from './api'

export const getUserInfo = () => {
  return api.get('/users/info')
}
