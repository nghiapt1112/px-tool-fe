import * as auth from '../services/auth';
import * as pkh from '../services/pkh';
import * as pdh from '../services/pdh';
import * as pa from '../services/pa';
import * as pcntp from '../services/pcntp';
import * as cvct from '../services/cvct';
import * as dashboard from '../services/dashboard';
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

  cvctGetList ({ commit }) {
    commit('CVCT_GET_LIST')
    return new Promise((resolve, reject) => {
      cvct.getList().then(res => {
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

  // ////////////////////////////////////////////
  // PDH
  // ////////////////////////////////////////////

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
}

export default actions
