import api from './api'

export const uploadFiles = (payload) => {
  const bodyFormData = new FormData();
  const { requestType, requestId, files } = payload;
  bodyFormData.append('requestType', requestType);
  bodyFormData.append('requestId', requestId);
  files.forEach(file => {
    bodyFormData.append('files', file);
  });
  return api({
    method: 'post',
    url: '/file/upload',
    data: bodyFormData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  })
}
