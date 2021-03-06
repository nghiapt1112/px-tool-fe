import * as auth from '../services/auth';
import * as user from '../services/user';
import * as pkh from '../services/pkh';
import * as pdh from '../services/pdh';
import * as pa from '../services/pa';
import * as pcntp from '../services/pcntp';
import * as cvct from '../services/cvct';
import * as tktdsp from '../services/tktdsp';
import * as vbd from '../services/vbd';
import * as dmdc from '../services/dmdc';
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
        const fileName = `${requestType}_${(new Date()).getTime()}.xlsx`;
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
  userGetToTruong({commit}, payload) {
    commit('USER_TO_TRUONG_GET_LIST');
    return new Promise((resolve, reject) => {
      user.getListToTruong(payload).then(res => {
        const { data } = res;
        commit('USER_TO_TRUONG_GET_LIST_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('USER_TO_TRUONG_GET_LIST_FAILURE', e)
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

  pkhGetPhanXuong ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      pkh.getPhanXuong(payload).then(res => {
        const { data } = res;
        commit('PKH_GET_PHAN_XUONG_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pkhGetToSanXuatByPXId ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      pkh.getToSXByPXId(payload).then(res => {
        const { data } = res;
        commit('PKH_GET_TO_SAN_XUAT_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pkhGetNguoiThucHien ({ commit }, payload) {
    commit('PKH_GET_NGUOI_THUC_HIEN')
    return new Promise((resolve, reject) => {
      pkh.getNguoiThucHien(payload).then(res => {
        const { data } = res;
        commit('PKH_GET_NGUOI_THUC_HIEN_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pkhGetCusNoiNhan ({ commit }, payload) {
    commit('PKH_GET_CUS_NOI_NHAN');
    return new Promise((resolve, reject) => {
      pkh.getCusNoiNhan(payload).then(res => {
        const { data } = res;
        commit('PKH_GET_CUS_NOI_NHAN_SUCCESS', data);
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

  pdhGetNguoiThucHien ({ commit }, payload) {
    commit('PDH_GET_NGUOI_THUC_HIEN')
    return new Promise((resolve, reject) => {
      pdh.getNguoiThucHien(payload).then(res => {
        const { data } = res;
        commit('PDH_GET_NGUOI_THUC_HIEN_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  pdhGetCusNoiNhan ({ commit }, payload) {
    commit('PDH_GET_CUS_NOI_NHAN');
    return new Promise((resolve, reject) => {
      pdh.getCusNoiNhan(payload).then(res => {
        const { data } = res;
        commit('PDH_GET_CUS_NOI_NHAN_SUCCESS', data);
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

  paGetCusNoiNhan ({ commit }, payload) {
    commit('PA_GET_CUS_NOI_NHAN');
    return new Promise((resolve, reject) => {
      pa.getCusNoiNhan(payload).then(res => {
        const { data } = res;
        commit('PA_GET_CUS_NOI_NHAN_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  paGetPAIdByDetailsIds ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      pa.getPAIdByDetailsIds(payload).then(res => {
        const { data } = res;
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

  pcntpGetNguoiLam ({ commit }) {
    commit('PCNTP_GET_NGUOI_LAM');
    return new Promise((resolve, reject) => {
      pcntp.getNguoiLam().then(res => {
        const { data } = res;
        commit('PCNTP_GET_NGUOI_LAM_SUCCESS', data);
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

  vbdGetThuMuc ({ commit }) {
    return new Promise((resolve, reject) => {
      vbd.getThuMuc().then(res => {
        const { data } = res;
        commit('VBD_GET_THU_MUC_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  vbdMoveThuMuc ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      vbd.moveThuMu(payload).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
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

  // ////////////////////////////////////////////
  // ND
  // ////////////////////////////////////////////

  ndUpdateData ({ commit }, data) {
    commit('ND_UPDATE_DATA', data)
  },

  ndGetList ({ commit }, payload) {
    commit('ND_GET_LIST')
    return new Promise((resolve, reject) => {
      user.getList(payload).then(res => {
        const { data } = res;
        commit('ND_GET_LIST_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('ND_GET_LIST_FAILURE', e)
        reject(e)
      })
    })
  },

  ndGetById ({ commit }, userId) {
    return new Promise((resolve, reject) => {
      user.getUserById(userId).then(res => {
        const { data } = res;
        commit('ND_GET_BY_ID_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        commit('ND_GET_BY_ID_FAILURE', e)
        reject(e)
      })
    })
  },

  ndGetLevel ({ commit }) {
    commit('ND_GET_LEVEL')
    return new Promise((resolve, reject) => {
      user.getLevel().then(res => {
        const { data } = res;
        commit('ND_GET_LEVEL_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  ndGetPhongBan ({ commit }) {
    commit('ND_GET_PHONG_BAN')
    return new Promise((resolve, reject) => {
      user.getPhongBan().then(res => {
        const { data } = res;
        commit('ND_GET_PHONG_BAN_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  ndSaveData ({ commit }, data) {
    return new Promise((resolve, reject) => {
      user.create(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  ndDeleteUser ({ commit }, data) {
    return new Promise((resolve, reject) => {
      user.deleteUser(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  ndResetData({ commit }) {
    commit('ND_RESET_DATA')
  },

  // ////////////////////////////////////////////
  // DMDC
  // ////////////////////////////////////////////

  dmdcGetListMDSD ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      dmdc.getListMDSD(payload).then(res => {
        const { data } = res;
        commit('DMDC_GET_LIST_MDSD_SUCCESS', data);
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  dmdcUpdateMDSD ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      dmdc.updateMDSD(payload).then(res => {
        const { data } = res;
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  dmdcGetListThuMuc ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      dmdc.getListThuMuc(payload).then(res => {
        const { data } = res;
        commit('DMDC_GET_LIST_THU_MUC_SUCCESS', data)
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  dmdcUpdateThuMuc ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      dmdc.updateThuMuc(payload).then(res => {
        const { data } = res;
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  dmdcDeleteMDSD ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      dmdc.deleteMDSD(payload).then(res => {
        const { data } = res;
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  dmsdUpdateEditMode ({ commit }, payload) {
    commit('DMSD_UPDATE_EDIT_MODE', payload)
  },
  deleteKH({commit}, id) {
    return new Promise((resolve, reject) => {
      user.deleteKH(id).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  exportDataThongKe ({ commit }, data) {
    return new Promise((resolve, reject) => {
      upload.exportDataThongKe(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },

  deleteData ({ commit }, data) {
    return new Promise((resolve, reject) => {
      upload.deleteData(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
}

export default actions
