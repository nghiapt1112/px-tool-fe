const getters = {
  AUTHScreenData: (state) => state.auth,
  // Common
  RequestId: (state) => state.requestId,
  // DASHBOARD
  DASHBOARDScreenData: (state) => state.dashboard,
  DASHBOARDData: (state) => state.dashboard.data,
  // CVCT
  CVCTScreenData: (state) => state.cvct,
  CVCTData: (state) => state.cvct.data,
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
}

export default getters
