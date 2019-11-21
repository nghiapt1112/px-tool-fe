const getters = {
  UnreadNotifications: (state) => state.unreadNotifications,
  AUTHScreenData: (state) => state.auth,
  // Common
  RequestId: (state) => state.requestId,
  AppActiveUser: (state) => state.AppActiveUser,
  // DASHBOARD
  DASHBOARDScreenData: (state) => state.dashboard,
  DASHBOARDData: (state) => state.dashboard.data,
  // CVCT
  CVCTScreenData: (state) => state.cvct,
  CVCTData: (state) => state.cvct.data,
  // TKTDSP
  TKTDSPScreenData: (state) => state.tktdsp,
  TKTDSPData: (state) => state.tktdsp.data,
  // PKH
  PKHScreenData: (state) => state.pkh,
  PKHData: (state) => state.pkh.data,
  PKHComboboxData: (state) => state.pkh.comboboxData,
  // PDH
  PDHData: (state) => state.pdh.data,
  PDHComboboxData: (state) => state.pdh.comboboxData,
  // PCNTP
  PCNTPData: (state) => state.pcntp.data,
  PCNTPComboboxData: (state) => state.pcntp.comboboxData,
  // PA
  PAData: (state) => state.pa.data,
  PAComboboxData: (state) => state.pa.comboboxData,
  // VBD
  VBDData: (state) => state.vbd.data,
  VBDList: (state) => state.vbd.list,
  VBDListReceive: (state) => state.vbd.listReceive,
  VBDComboboxData: (state) => state.vbd.comboboxData,
}

export default getters
