const getters = {
  AUTHScreenData: (state) => state.auth,
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
}

export default getters
