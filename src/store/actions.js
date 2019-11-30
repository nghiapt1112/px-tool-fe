import * as auth from '../services/auth';
import * as user from '../services/user';
import * as pkh from '../services/pkh';
import * as pdh from '../services/pdh';
import * as pa from '../services/pa';
import * as pcntp from '../services/pcntp';
import * as cvct from '../services/cvct';
import * as tktdsp from '../services/tktdsp';
import * as vbd from '../services/vbd';
import * as dashboard from '../services/dashboard';
import * as upload from '../services/upload';
import { setToken } from '../services/api';

const actions = {

  // ////////////////////////////////////////////
  // SIDEBAR & UI UX
  // ////////////////////////////////////////////

  updateSidebarWidth ({ commit }, width) {
    commit('UPDATE_SIDEBAR_WIDTH', width);
  },
  updateI18nLocale ({ commit }, locale) {
    commit('UPDATE_I18N_LOCALE', locale);
  },
  toggleContentOverlay ({ commit }) {
    commit('TOGGLE_CONTENT_OVERLAY');
  },
  updateTheme ({ commit }, val) {
    commit('UPDATE_THEME', val);
  },
  updateUserRole ({ commit }, val) {
    commit('UPDATE_USER_ROLE', val);
  },
  updateWindowWidth ({ commit }, width) {
    commit('UPDATE_WINDOW_WIDTH', width);
  },

  // ////////////////////////////////////////////
  // NOTIFICATION
  // ////////////////////////////////////////////

  notificationGetList ({ commit }) {
    return new Promise((resolve, reject) => {
      user.getNotification().then(res => {
        const { data } = res;
        commit('NOTIFICATION_GET_NOTIFICATION_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  notificationMarkRead ({ commit }, notiId) {
    return new Promise((resolve, reject) => {
      user.markReadNotification(notiId).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // COMPONENT
  // ////////////////////////////////////////////

  // VxAutoSuggest
  updateStarredPage ({ commit }, payload) {
    commit('UPDATE_STARRED_PAGE', payload)
  },

  //  The Navbar
  arrangeStarredPagesLimited ({ commit }, list) {
    commit('ARRANGE_STARRED_PAGES_LIMITED', list)
  },
  arrangeStarredPagesMore ({ commit }, list) {
    commit('ARRANGE_STARRED_PAGES_MORE', list)
  },

  // ////////////////////////////////////////////
  // AUTH
  // ////////////////////////////////////////////

  authLogin ({ commit }, data) {
    const { userName, password } = data;
    return new Promise((resolve, reject) => {
      auth.login(userName, password).then(res => {
        const { data: { access_token } } = res;
        localStorage.setItem('access_token', access_token)
        setToken(access_token);
        resolve(res)
      }).catch(e => {
        commit('AUTH_LOGIN_ERROR', e)
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // COMMON
  // ////////////////////////////////////////////

  commonUploadFiles ({ commit }, data) {
    commit('COMMON_UPLOAD_FILES', data);
    return new Promise((resolve, reject) => {
      upload.uploadFiles(data).then(res => {
        commit('COMMON_UPLOAD_FILES_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('COMMON_UPLOAD_FILES_FAILURE', e)
        reject(e)
      })
    })
  },


  commonDownloadFile ({ commit }, data) {
    return new Promise((resolve, reject) => {
      upload.downloadFile(data).then(res => {
        const { fileName } = data;
        const fileURL = window.URL.createObjectURL(new Blob([res.data]));
        const fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', fileName);
        document.body.appendChild(fileLink);
        fileLink.click();
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },


  commonDownloadFileByType ({ commit }, data) {
    return new Promise((resolve, reject) => {
      upload.downloadFileByType(data).then(res => {
        const { requestType } = data;
        const fileName = `${requestType}_${(new Date()).getTime()}.xls`;
        const fileURL = window.URL.createObjectURL(new Blob([res.data]));
        const fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', fileName);
        document.body.appendChild(fileLink);
        fileLink.click();
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  // ////////////////////////////////////////////
  // PROFILE
  // ////////////////////////////////////////////

  getUserProfile ({ commit }) {
    commit('PROFILE_GET_USER_INFO')
    return new Promise((resolve, reject) => {
      user.getUserInfo().then(res => {
        const { data } = res;
        commit('PROFILE_GET_USER_INFO_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        commit('PROFILE_GET_USER_INFO_FAILURE', e)
        reject(e)
      })
    })
  },

  updateProfile ({ commit }, data) {
    return new Promise((resolve, reject) => {
      user.update(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // DASHBOARD
  // ////////////////////////////////////////////

  dashboardGetList ({ commit }) {
    commit('DASHBOARD_GET_LIST')
    return new Promise((resolve, reject) => {
      dashboard.getList().then(res => {
        const { data } = res;
        commit('DASHBOARD_GET_LIST_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('DASHBOARD_GET_LIST_FAILURE', e)
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // CVCT
  // ////////////////////////////////////////////

  cvctUpdateRequestId ({ commit }, requestId) {
    commit('CVCT_UPDATE_REQUEST_ID', requestId)
  },

  cvctGetList ({ commit }, payload) {
    commit('CVCT_GET_LIST')
    return new Promise((resolve, reject) => {
      cvct.getList(payload).then(res => {
        const { data } = res;
        commit('CVCT_GET_LIST_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('CVCT_GET_LIST_FAILURE', e)
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // TKTDSP
  // ////////////////////////////////////////////

  tktdspGetListMDSD ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      tktdsp.getListMDSD(payload).then(res => {
        const { data } = res;
        commit('TKTDSP_GET_LIST_MDSD_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  tktdspGetList ({ commit }, payload) {
    commit('TKTDSP_GET_LIST');
    return new Promise((resolve, reject) => {
      tktdsp.getList(payload).then(res => {
        const { data } = res;
        commit('TKTDSP_GET_LIST_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('TKTDSP_GET_LIST_FAILURE', e)
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // PKH
  // ////////////////////////////////////////////

  pkhUpdateData ({ commit }, data) {
    commit('PKH_UPDATE_DATA', data)
  },
  pkhSaveData ({ commit }, data) {
    commit('PKH_SAVE_DATA', data);
    return new Promise((resolve, reject) => {
      pkh.create(data).then(res => {
        commit('PKH_SAVE_DATA_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('PKH_SAVE_DATA_FAILURE', e)
        reject(e)
      })
    })
  },
  pkhGetById ({ commit }, requestId) {
    commit('PKH_GET_BY_ID')
    return new Promise((resolve, reject) => {
      pkh.getById(requestId).then(res => {
        const { data } = res;
        commit('PKH_GET_BY_ID_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('PKH_GET_BY_ID_FAILURE', e)
        reject(e)
      })
    })
  },

  pkhGetNoiNhanById ({ commit }, payload) {
    commit('PKH_GET_NOI_NHAN_BY_ID')
    return new Promise((resolve, reject) => {
      pkh.getNoiNhanById(payload).then(res => {
        const { data } = res;
        commit('PKH_GET_NOI_NHAN_BY_ID_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pkhGetPhanXuong ({ commit }) {
    return new Promise((resolve, reject) => {
      pkh.getPhanXuong().then(res => {
        const { data } = res;
        commit('PKH_GET_PHAN_XUONG_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pkhGetToSanXuatByPXId ({ commit }, pxId) {
    return new Promise((resolve, reject) => {
      pkh.getToSXByPXId(pxId).then(res => {
        const { data } = res;
        commit('PKH_GET_TO_SAN_XUAT_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  // ////////////////////////////////////////////
  // PDH
  // ////////////////////////////////////////////

  pdhGetListMDSD ({ commit }) {
    return new Promise((resolve, reject) => {
      pdh.getListMDSD().then(res => {
        const { data } = res;
        commit('PDH_GET_LIST_MDSD_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pdhAddMDSD ({ commit }, data) {
    return new Promise((resolve, reject) => {
      pdh.addMDSD(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pdhUpdateData ({ commit }, data) {
    commit('PDH_UPDATE_DATA', data)
  },

  pdhSaveData ({ commit }, data) {
    commit('PDH_SAVE_DATA', data);
    return new Promise((resolve, reject) => {
      pdh.create(data).then(res => {
        commit('PDH_SAVE_DATA_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('PDH_SAVE_DATA_FAILURE', e)
        reject(e)
      })
    })
  },

  pdhGetById ({ commit }, requestId) {
    commit('PDH_GET_BY_ID')
    return new Promise((resolve, reject) => {
      pdh.getById(requestId).then(res => {
        const { data } = res;
        commit('PDH_GET_BY_ID_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('PDH_GET_BY_ID_FAILURE', e)
        reject(e)
      })
    })
  },

  pdhGetNoiNhanById ({ commit }, payload) {
    commit('PDH_GET_NOI_NHAN_BY_ID')
    return new Promise((resolve, reject) => {
      pdh.getNoiNhanById(payload).then(res => {
        const { data } = res;
        commit('PDH_GET_NOI_NHAN_BY_ID_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // PA
  // ////////////////////////////////////////////

  paUpdateData ({ commit }, data) {
    commit('PA_UPDATE_DATA', data)
  },
  paSaveData ({ commit }, data) {
    commit('PA_SAVE_DATA', data);
    return new Promise((resolve, reject) => {
      pa.create(data).then(res => {
        commit('PA_SAVE_DATA_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('PA_SAVE_DATA_FAILURE', e)
        reject(e)
      })
    })
  },
  paGetById ({ commit }, requestId) {
    commit('PA_GET_BY_ID')
    return new Promise((resolve, reject) => {
      pa.getById(requestId).then(res => {
        const { data } = res;
        commit('PA_GET_BY_ID_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('PA_GET_BY_ID_FAILURE', e)
        reject(e)
      })
    })
  },

  paGetNoiNhanById ({ commit }, payload) {
    commit('PA_GET_NOI_NHAN_BY_ID')
    return new Promise((resolve, reject) => {
      pa.getNoiNhanById(payload).then(res => {
        const { data } = res;
        commit('PA_GET_NOI_NHAN_BY_ID_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  paGetNguoiThucHien ({ commit }, payload) {
    commit('PA_GET_NGUOI_THUC_HIEN')
    return new Promise((resolve, reject) => {
      pa.getNguoiThucHien(payload).then(res => {
        const { data } = res;
        commit('PA_GET_NGUOI_THUC_HIEN_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // PCNTP
  // ////////////////////////////////////////////

  pcntpUpdateData ({ commit }, data) {
    commit('PCNTP_UPDATE_DATA', data)
  },
  pcntpSaveData ({ commit }, data) {
    commit('PCNTP_SAVE_DATA', data);
    return new Promise((resolve, reject) => {
      pcntp.create(data).then(res => {
        commit('PCNTP_SAVE_DATA_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('PCNTP_SAVE_DATA_FAILURE', e)
        reject(e)
      })
    })
  },
  pcntpGetById ({ commit }, requestId) {
    commit('PCNTP_GET_BY_ID')
    return new Promise((resolve, reject) => {
      pcntp.getById(requestId).then(res => {
        const { data } = res;
        commit('PCNTP_GET_BY_ID_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('PCNTP_GET_BY_ID_FAILURE', e)
        reject(e)
      })
    })
  },

  pcntpGetNoiNhanById ({ commit }, payload) {
    commit('PCNTP_GET_NOI_NHAN_BY_ID')
    return new Promise((resolve, reject) => {
      pcntp.getNoiNhanById(payload).then(res => {
        const { data } = res;
        commit('PCNTP_GET_NOI_NHAN_BY_ID_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // VBN
  // ////////////////////////////////////////////

  vbnUpdateData ({ commit }, data) {
    commit('VBD_UPDATE_DATA', data)
  },

  vbnSaveData ({ commit }, data) {
    commit('VBN_SAVE_DATA', data);
    return new Promise((resolve, reject) => {
      vbd.create(data).then(res => {
        commit('VBN_SAVE_DATA_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('VBN_SAVE_DATA_FAILURE', e)
        reject(e)
      })
    })
  },

  vbdGetById ({ commit }, vbdId) {
    commit('VBD_GET_BY_ID')
    return new Promise((resolve, reject) => {
      vbd.getById(vbdId).then(res => {
        const { data } = res;
        commit('VBD_GET_BY_ID_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('VBD_GET_BY_ID_FAILURE', e)
        reject(e)
      })
    })
  },

  vbdDeleteById ({ commit }, vbdId) {
    return new Promise((resolve, reject) => {
      vbd.deleteById(vbdId).then(res => {
        const { data } = res;
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  vbdGetNoiNhanById ({ commit }, payload) {
    commit('VBD_GET_NOI_NHAN_BY_ID')
    return new Promise((resolve, reject) => {
      vbd.getNoiNhanById(payload).then(res => {
        const { data } = res;
        commit('VBD_GET_NOI_NHAN_BY_ID_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  vbdGetList ({ commit }, payload) {
    commit('VBD_GET_LIST')
    return new Promise((resolve, reject) => {
      vbd.getList(payload).then(res => {
        const { data } = res;
        commit('VBD_GET_LIST_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('CVBD_GET_LIST_FAILURE', e)
        reject(e)
      })
    })
  },

  vbdGetListReceive ({ commit }, payload) {
    commit('VBD_GET_LIST_RECEIVE')
    return new Promise((resolve, reject) => {
      vbd.getListReceive(payload).then(res => {
        const { data } = res;
        commit('VBD_GET_LIST_RECEIVE_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('VBD_GET_LIST_RECEIVE_FAILURE', e)
        reject(e)
      })
    })
  },

  vbdSaveData ({ commit }, data) {
    commit('VBD_SAVE_DATA', data);
    return new Promise((resolve, reject) => {
      vbd.create(data).then(res => {
        commit('VBD_SAVE_DATA_SUCCESS')
        resolve(res)
      }).catch(e => {
        commit('VBD_SAVE_DATA_FAILURE', e)
        reject(e)
      })
    })
  },
}

export default actions
