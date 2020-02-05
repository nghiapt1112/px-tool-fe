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
  // COMMON
  // ////////////////////////////////////////////

  COMMON_UPLOAD_FILES () {
  },

  COMMON_UPLOAD_FILES_SUCCESS () {
  },

  COMMON_UPLOAD_FILES_FAILURE () {
  },

  // ////////////////////////////////////////////
  // NOTIFICATION
  // ////////////////////////////////////////////

  NOTIFICATION_GET_NOTIFICATION_SUCCESS (state, payload) {
    state.unreadNotifications = payload;
  },

  // ////////////////////////////////////////////
  // PROFILE
  // ////////////////////////////////////////////

  PROFILE_GET_USER_INFO (state) {
    state.profile.error = null;
    state.profile.loading = true;
  },

  PROFILE_GET_USER_INFO_SUCCESS (state, payload) {
    const { email, signImg, fullName, userId, type } = payload;
    state.AppActiveUser.name = fullName;
    state.AppActiveUser.email = email;
    state.AppActiveUser.chuKy = signImg;
    state.AppActiveUser.userId = userId;
    state.AppActiveUser.type = type;
    state.profile.error = null;
    state.profile.loading = false;
    state.profile.data = payload
  },

  PROFILE_GET_USER_INFO_FAILURE (state, e) {
    state.profile.error = e;
    state.profile.loading = false;
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
  // TKTDSP
  // ////////////////////////////////////////////

  TKTDSP_GET_LIST_MDSD_SUCCESS (state, data) {
    state.tktdsp.comboboxData.mdsd = data;
  },

  TKTDSP_GET_LIST (state) {
    state.tktdsp.error = null;
    state.tktdsp.loading = true;
  },

  TKTDSP_GET_LIST_SUCCESS (state, payload) {
    state.tktdsp.error = null;
    state.tktdsp.loading = false;
    state.tktdsp.data = payload
  },

  TKTDSP_GET_LIST_FAILURE (state, e) {
    state.tktdsp.error = e;
    state.tktdsp.loading = false;
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

  PKH_GET_NOI_NHAN_BY_ID (state) {
    state.pkh.comboboxData.chuyen = [];
  },

  PKH_GET_NOI_NHAN_BY_ID_SUCCESS (state, payload) {
    state.pkh.comboboxData.chuyen = payload;
  },

  PKH_GET_PHAN_XUONG_SUCCESS (state, payload) {
    state.pkh.comboboxData.phan_xuong = payload;
  },

  PKH_GET_TO_SAN_XUAT_SUCCESS (state, payload) {
    state.pkh.comboboxData.to_san_xuat = payload;
  },

  PKH_GET_NGUOI_THUC_HIEN (state) {
    state.pkh.comboboxData.nguoiThucHien = [];
  },

  PKH_GET_NGUOI_THUC_HIEN_SUCCESS (state, payload) {
    state.pkh.comboboxData.nguoiThucHien = payload;
  },

  PKH_GET_CUS_NOI_NHAN (state) {
    state.pkh.comboboxData.cusNoiNhan = [];
  },

  PKH_GET_CUS_NOI_NHAN_SUCCESS (state, payload) {
    state.pkh.comboboxData.cusNoiNhan = payload;
  },

  // ////////////////////////////////////////////
  // PDH
  // ////////////////////////////////////////////

  PDH_GET_LIST_MDSD_SUCCESS (state, data) {
    state.pdh.comboboxData.mdsd = data;
  },

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

  PDH_GET_NOI_NHAN_BY_ID (state) {
    state.pdh.comboboxData.chuyen = [];
  },

  PDH_GET_NOI_NHAN_BY_ID_SUCCESS (state, payload) {
    state.pdh.comboboxData.chuyen = payload;
  },

  PDH_GET_NGUOI_THUC_HIEN (state) {
    state.pdh.comboboxData.nguoiThucHien = [];
  },

  PDH_GET_NGUOI_THUC_HIEN_SUCCESS (state, payload) {
    state.pdh.comboboxData.nguoiThucHien = payload;
  },

  PDH_GET_CUS_NOI_NHAN (state) {
    state.pdh.comboboxData.cusNoiNhan = [];
  },

  PDH_GET_CUS_NOI_NHAN_SUCCESS (state, payload) {
    state.pdh.comboboxData.cusNoiNhan = payload;
  },

  // ////////////////////////////////////////////
  // PA
  // ////////////////////////////////////////////


  PA_UPDATE_DATA (state, data) {
    const { dinhMucVatTus, dinhMucLaoDongs } = data;
    let tongDMVTKho = 0;
    let tongDMVTMuaNgoai = 0;
    let tongDMLDDM = 0;

    dinhMucVatTus && dinhMucVatTus.forEach((item) => {
      if (!isNaN(item.khoDonGia) && !isNaN(item.khoSoLuong)) {
        item.khoThanhTien = Number(item.khoDonGia) * Number(item.khoSoLuong);
      } else {
        item.khoThanhTien = 0;
      }
      if (!isNaN(item.mnDonGia) && !isNaN(item.mnSoLuong)) {
        item.mnThanhTien = Number(item.mnDonGia) * Number(item.mnSoLuong);
      } else {
        item.mnThanhTien = 0;
      }

      tongDMVTKho += item.khoThanhTien;
      tongDMVTMuaNgoai += item.mnThanhTien;
    });
    dinhMucLaoDongs && dinhMucLaoDongs.forEach((item)=> {
      if (!isNaN(item.dm)) {
        tongDMLDDM += Number(item.dm);
      }
    });
    data.tongDMVTKho = tongDMVTKho;
    data.tongDMVTMuaNgoai = tongDMVTMuaNgoai;
    data.tongDMLDDM = tongDMLDDM;
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

  PA_GET_NOI_NHAN_BY_ID (state) {
    state.pa.comboboxData.chuyen = [];
  },

  PA_GET_NOI_NHAN_BY_ID_SUCCESS (state, payload) {
    state.pa.comboboxData.chuyen = payload;
  },

  PA_GET_NGUOI_THUC_HIEN (state) {
    state.pa.comboboxData.nguoiThucHien = [];
  },

  PA_GET_NGUOI_THUC_HIEN_SUCCESS (state, payload) {
    state.pa.comboboxData.nguoiThucHien = payload;
  },

  PA_GET_CUS_NOI_NHAN (state) {
    state.pa.comboboxData.cusNoiNhan = [];
  },

  PA_GET_CUS_NOI_NHAN_SUCCESS (state, payload) {
    state.pa.comboboxData.cusNoiNhan = payload;
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

  PCNTP_GET_BY_ID (state) {
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

  PCNTP_GET_NOI_NHAN_BY_ID (state) {
    state.pcntp.comboboxData.chuyen = [];
  },

  PCNTP_GET_NOI_NHAN_BY_ID_SUCCESS (state, payload) {
    state.pcntp.comboboxData.chuyen = payload;
  },

  PCNTP_GET_NGUOI_LAM (state) {
    state.pcntp.comboboxData.nguoiLam = [];
  },

  PCNTP_GET_NGUOI_LAM_SUCCESS (state, payload) {
    state.pcntp.comboboxData.nguoiLam = payload;
  },

  // ////////////////////////////////////////////
  // VBD
  // ////////////////////////////////////////////

  VBD_GET_LIST (state) {
    state.vbd.error = null;
    state.vbd.loading = true;
  },

  VBD_GET_LIST_SUCCESS (state, payload) {
    state.vbd.error = null;
    state.vbd.loading = false;
    state.vbd.list = payload
  },

  VBD_GET_LIST_FAILURE (state, e) {
    state.vbd.error = e;
    state.vbd.loading = false;
  },

  VBD_GET_LIST_RECEIVE (state) {
    state.vbd.error = null;
    state.vbd.loading = true;
  },

  VBD_GET_LIST_RECEIVE_SUCCESS (state, payload) {
    state.vbd.error = null;
    state.vbd.loading = false;
    state.vbd.listReceive = payload
  },

  VBD_GET_LIST_RECEIVE_FAILURE (state, e) {
    state.vbd.error = e;
    state.vbd.loading = false;
  },

  VBD_UPDATE_DATA (state, data) {
    state.vbd.data = data;
  },

  VBD_SAVE_DATA (state) {
    state.vbd.isLoading = true;
  },

  VBD_SAVE_DATA_SUCCESS (state) {
    state.vbd.isLoading = false;
  },

  VBD_SAVE_DATA_FAILURE (state, error) {
    state.vbd.isLoading = false;
    state.vbd.error = error;
  },

  VBD_GET_NOI_NHAN_BY_ID (state) {
    state.vbd.comboboxData.chuyen = [];
  },

  VBD_GET_NOI_NHAN_BY_ID_SUCCESS (state, payload) {
    state.vbd.comboboxData.chuyen = payload;
  },

  VBD_GET_THU_MUC_SUCCESS (state, payload) {
    state.vbd.comboboxData.thuMuc = payload;
  },

  VBD_GET_BY_ID (state) {
    state.vbd.error = null;
    state.vbd.loading = true;
  },

  VBD_GET_BY_ID_SUCCESS (state, payload) {
    state.vbd.error = null;
    state.vbd.loading = false;
    state.vbd.data = payload
  },

  VBD_GET_BY_ID_FAILURE (state, e) {
    state.vbd.error = e;
    state.vbd.loading = false;
  },

  // ////////////////////////////////////////////
  // ND
  // ////////////////////////////////////////////

  ND_GET_LIST (state) {
    state.nd.error = null;
    state.vbd.loading = true;
  },

  ND_GET_LIST_SUCCESS (state, payload) {
    state.nd.error = null;
    state.nd.loading = false;
    state.nd.list = payload
  },

  ND_GET_LIST_FAILURE (state, e) {
    state.nd.error = e;
    state.nd.loading = false;
  },

  ND_GET_BY_ID_SUCCESS (state, payload) {
    state.nd.error = null;
    state.nd.data = payload;
  },

  ND_GET_BY_ID_FAILURE (state, e) {
    state.nd.error = e;
    state.nd.data = {};
  },

  ND_GET_LEVEL (state) {
    state.nd.comboboxData.level = [];
  },

  ND_GET_LEVEL_SUCCESS (state, payload) {
    state.nd.comboboxData.level = payload;
  },

  ND_GET_PHONG_BAN (state) {
    state.nd.comboboxData.phongBan = [];
  },

  ND_GET_PHONG_BAN_SUCCESS (state, payload) {
    state.nd.comboboxData.phongBan = payload;
  },

  ND_UPDATE_DATA (state, data) {
    state.nd.data = data;
  },

  // ////////////////////////////////////////////
  // DMDC
  // ////////////////////////////////////////////

  DMDC_GET_LIST_MDSD_SUCCESS (state, payload) {
    state.dmdc.data.mdsd = payload
  },

  DMDC_GET_LIST_THU_MUC_SUCCESS (state, payload) {
    state.dmdc.data.thuMuc = payload
  },

  DMSD_UPDATE_EDIT_MODE (state, payload) {
    const { dataName, index, isEdit } = payload;
    state.dmdc.data[dataName][index].isEdit = isEdit;
  }
}

export default mutations
