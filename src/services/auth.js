import api from './api'

export const login = (userName, password) => {
  const loginRequest = { userName, password };
  return api.post('/sec/login', { ...loginRequest })
}
