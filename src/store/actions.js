import * as auth from '../services/auth';
import * as pkh from '../services/pkh';
import * as pdh from '../services/pdh';
import * as cvct from '../services/cvct';
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
        setToken(access_token);
        resolve(res)
      }).catch(e => {
        commit('AUTH_LOGIN_ERROR', e)
        reject(e)
      })
    })
  },

  // ////////////////////////////////////////////
  // CVCT
  // ////////////////////////////////////////////

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
}

export default actions
