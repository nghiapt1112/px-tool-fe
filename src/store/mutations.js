const mutations = {

  // ////////////////////////////////////////////
  // SIDEBAR & UI UX
  // ////////////////////////////////////////////

  UPDATE_SIDEBAR_WIDTH (state, width) {
    state.sidebarWidth = width;
  },
  UPDATE_SIDEBAR_ITEMS_MIN (state, val) {
    state.sidebarItemsMin = val;
  },
  TOGGLE_REDUCE_BUTTON (state, val) {
    state.reduceButton = val;
  },
  TOGGLE_CONTENT_OVERLAY (state, val) {
    state.bodyOverlay = val;
  },
  TOGGLE_IS_SIDEBAR_ACTIVE (state, value) {
    state.isSidebarActive = value;
  },
  UPDATE_THEME (state, val) {
    state.theme = val;
  },
  UPDATE_WINDOW_BREAKPOINT (state, val) {
    state.breakpoint = val;
  },
  UPDATE_PRIMARY_COLOR (state, val) {
    state.themePrimaryColor = val;
  },
  UPDATE_USER_ROLE (state, val) {
    state.userRole = val
    localStorage.setItem('userRole', val)
  },
  // UPDATE_STATUS_CHAT(state, value) {
  //     state.AppActiveUser.status = value;
  // },
  UPDATE_WINDOW_WIDTH (state, width) {
    state.windowWidth = width;
  },

  // ////////////////////////////////////////////
  // COMPONENT
  // ////////////////////////////////////////////

  // VxAutoSuggest
  UPDATE_STARRED_PAGE (state, payload) {
    // find item index in search list state
    const index = state.navbarSearchAndPinList.data.findIndex((item) => item.index == payload.index)
    // update the main list
    state.navbarSearchAndPinList.data[index].highlightAction = payload.val;

    // if val is true add it to starred else remove
    if (payload.val) {
      state.starredPages.push(state.navbarSearchAndPinList.data[index])
    } else {
      // find item index from starred pages
      const index = state.starredPages.findIndex((item) => item.index == payload.index)
      // remove item using index
      state.starredPages.splice(index, 1);
    }
  },

  // The Navbar
  ARRANGE_STARRED_PAGES_LIMITED (state, list) {
    const starredPagesMore = state.starredPages.slice(10);
    state.starredPages = list.concat(starredPagesMore);
  },
  ARRANGE_STARRED_PAGES_MORE (state, list) {
    let downToUp = false
    let lastItemInStarredLimited = state.starredPages[10];
    const starredPagesLimited = state.starredPages.slice(0, 10);
    state.starredPages = starredPagesLimited.concat(list);

    state.starredPages.slice(0, 10).map((i) => {
      if (list.indexOf(i) > -1) downToUp = true
    })
    if (!downToUp) {
      state.starredPages.splice(10, 0, lastItemInStarredLimited);
    }
  },


  // ////////////////////////////////////////////
  // AUTH
  // ////////////////////////////////////////////

  AUTH_LOGIN_ERROR (state, error) {
    state.auth.loginError = error
  },

  // ////////////////////////////////////////////
  // DASHBOARD
  // ////////////////////////////////////////////

  DASHBOARD_GET_LIST (state) {
    state.dashboard.error = null;
    state.dashboard.loading = true;
  },

  DASHBOARD_GET_LIST_SUCCESS (state, payload) {
    state.dashboard.error = null;
    state.dashboard.loading = false;
    state.dashboard.data = payload
  },

  DASHBOARD_GET_LIST_FAILURE (state, e) {
    state.dashboard.error = e;
    state.dashboard.loading = false;
  },

  // ////////////////////////////////////////////
  // CVCT
  // ////////////////////////////////////////////

  CVCT_GET_LIST (state) {
    state.cvct.error = null;
    state.cvct.loading = true;
  },

  CVCT_GET_LIST_SUCCESS (state, payload) {
    state.cvct.error = null;
    state.cvct.loading = false;
    state.cvct.data = payload
  },

  CVCT_GET_LIST_FAILURE (state, e) {
    state.cvct.error = e;
    state.cvct.loading = false;
  },

  CVCT_UPDATE_REQUEST_ID (state, requestId) {
    state.requestId = requestId
  },

  // ////////////////////////////////////////////
  // PKH
  // ////////////////////////////////////////////


  PKH_UPDATE_DATA (state, data) {
    state.pkh.data = data;
  },

  PKH_SAVE_DATA (state) {
    state.pkh.isLoading = true;
  },

  PKH_SAVE_DATA_SUCCESS (state) {
    state.pkh.isLoading = false;
  },

  PKH_SAVE_DATA_FAILURE (state, error) {
    state.pkh.isLoading = false;
    state.pkh.error = error;
  },

  PKH_GET_BY_ID (state) {
    state.pkh.error = null;
    state.pkh.loading = true;
  },

  PKH_GET_BY_ID_SUCCESS (state, payload) {
    state.pkh.error = null;
    state.pkh.loading = false;
    state.pkh.data = payload
  },

  PKH_GET_BY_ID_FAILURE (state, e) {
    state.pkh.error = e;
    state.pkh.loading = false;
  },

  // ////////////////////////////////////////////
  // PDH
  // ////////////////////////////////////////////


  PDH_UPDATE_DATA (state, data) {
    state.pdh.data = data;
  },

  PDH_SAVE_DATA (state) {
    state.pdh.isLoading = true;
  },

  PDH_SAVE_DATA_SUCCESS (state) {
    state.pdh.isLoading = false;
  },

  PDH_SAVE_DATA_FAILURE (state, error) {
    state.pdh.isLoading = false;
    state.pdh.error = error;
  },

  PDH_GET_BY_ID (state) {
    state.pdh.error = null;
    state.pdh.loading = true;
  },

  PDH_GET_BY_ID_SUCCESS (state, payload) {
    state.pdh.error = null;
    state.pdh.loading = false;
    state.pdh.data = payload
  },

  PDH_GET_BY_ID_FAILURE (state, e) {
    state.pdh.error = e;
    state.pdh.loading = false;
  },

  // ////////////////////////////////////////////
  // PA
  // ////////////////////////////////////////////


  PA_UPDATE_DATA (state, data) {
    state.pa.data = data;
  },

  PA_SAVE_DATA (state) {
    state.pa.isLoading = true;
  },

  PA_SAVE_DATA_SUCCESS (state) {
    state.pa.isLoading = false;
  },

  PA_SAVE_DATA_FAILURE (state, error) {
    state.pa.isLoading = false;
    state.pa.error = error;
  },

  PA_GET_BY_ID (state) {
    state.pa.error = null;
    state.pa.loading = true;
  },

  PA_GET_BY_ID_SUCCESS (state, payload) {
    state.pa.error = null;
    state.pa.loading = false;
    state.pa.data = payload
  },

  PA_GET_BY_ID_FAILURE (state, e) {
    state.pa.error = e;
    state.pa.loading = false;
  },

  // ////////////////////////////////////////////
  // PCNTP
  // ////////////////////////////////////////////


  PCNTP_UPDATE_DATA (state, data) {
    state.pcntp.data = data;
  },

  PCNTP_SAVE_DATA (state) {
    state.pcntp.isLoading = true;
  },

  PCNTP_SAVE_DATA_SUCCESS (state) {
    state.pcntp.isLoading = false;
  },

  PCNTP_SAVE_DATA_FAILURE (state, error) {
    state.pcntp.isLoading = false;
    state.pcntp.error = error;
  },

  PCNTPA_GET_BY_ID (state) {
    state.pcntp.error = null;
    state.pcntp.loading = true;
  },

  PCNTP_GET_BY_ID_SUCCESS (state, payload) {
    state.pcntp.error = null;
    state.pcntp.loading = false;
    state.pcntp.data = payload
  },

  PCNTP_GET_BY_ID_FAILURE (state, e) {
    state.pcntp.error = e;
    state.pcntp.loading = false;
  },
}

export default mutations
