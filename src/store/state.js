/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from '@/layouts/components/navbarSearchAndPinList'
import themeConfig from '@/../themeConfig.js'
import colors from '@/../themeConfig.js'

const state = {
  isSidebarActive: true,
  breakpoint: null,
  sidebarWidth: "default",
  reduceButton: themeConfig.sidebarCollapsed,
  bodyOverlay: false,
  sidebarItemsMin: false,
  theme: themeConfig.theme || 'light',
  navbarSearchAndPinList: navbarSearchAndPinList,
  AppActiveUser: {
    id: 0,
    name: '',
    about: '',
    img: 'avatar-default.png',
    status: 'online',
    chuKy: ''
  },

  themePrimaryColor: colors.primary,

  starredPages: navbarSearchAndPinList.data.filter((page) => page.highlightAction),
  userRole: null,

  // Can be used to get current window with
  // Note: Above breakpoint state is for internal use of sidebar component
  windowWidth: null,

  // Screen Data
  auth: {
    loginError: null,
  },
  profile: {
    error: null,
    loading: false
  },
  dashboard: {
    data: [],
    error: null,
    loading: false
  },
  cvct: {
    data: {
      details: [],
      total: 0,
      page: 1,
      size: 15
    },
    error: null,
    loading: false
  },
  tktdsp: {
    comboboxData: {
      mdsd: []
    },
    data: {
      details: [],
      sanPham:'',
      tienDo: '',
      total: 0,
      page: 1,
      size: 15
    },
    error: null,
    loading: false
  },
  requestId: null,
  unreadNotifications: [],
  pa: {
    isLoading: false,
    error: null,
    data: {
      dinhMucLaoDongs: [],
      dinhMucVatTus: [],
      maSo: '',
      ngayThangNamNguoiLap: '',
      ngayThangNamPheDuyet: '',
      ngayThangNamTPKEHOACH: '',
      ngayThangNamTPKTHK: '',
      ngayThangNamtpVatTu: '',
      nguoiLap: '',
      nguonKinhPhi: '',
      noiDung: '',
      paId: 0,
      pdh: '',
      sanPham: '',
      soTo: '',
      tenNhaMay: '',
      tienLuong: 0,
      toSo: '',
      tongCongDinhMucLaoDong: 0,
      tongDMVTKho: 0,
      tongDMVTMuaNgoai: 0,
      truongPhongKTHK: '',
      truongPhongKeHoach: '',
      truongPhongVatTu: ''
    },
    comboboxData: {
      phan_xuong: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
      ],
      to_san_xuat: [
        { id: 1, name: 'TCĐK 1' },
        { id: 2, name: 'to_san_xuat 2' },
        { id: 3, name: 'to_san_xuat 3' },
        { id: 4, name: 'to_san_xuat 4' },
        { id: 5, name: 'to_san_xuat 5' },
      ],
      ten_vktbkt: [
        { id: 1, name: 'Máy bay L-39' },
        { id: 2, name: 'Máy bay Iak-52' },
        { id: 3, name: 'Động cơ M-14P' },
        { id: 4, name: 'Cánh quạt V530TA-D35' },
        { id: 5, name: 'Khác' },
      ],
      noi_nhan: [
        { id: 1, name: 'Nơi nhận 1' },
        { id: 2, name: 'Nơi nhận 2' },
        { id: 3, name: 'Nơi nhận 3' },
        { id: 4, name: 'Nơi nhận 4' },
        { id: 5, name: 'Khác' },
      ],
      chuyen: [
        {
          id: 0,
          name: "TO_VAT_LIEU_COMPOSITE"
        },
        {
          id: 4,
          name: "ADMIN"
        },
        {
          id: 5,
          name: "GIAM_DOC"
        },
        {
          id: 6,
          name: "CHINH_UY"
        },
        {
          id: 7,
          name: "PGDKTHK"
        },
        {
          id: 8,
          name: "PGDSX"
        },
        {
          id: 9,
          name: "PGDXMDC"
        },
        {
          id: 10,
          name: "BAN_CHINH_TRI"
        },
        {
          id: 11,
          name: "PHONG_KTHK"
        },
        {
          id: 12,
          name: "PHONG_XE_MAY_DAC_CHUNG"
        },
        {
          id: 13,
          name: "PHONG_KCS"
        },
        {
          id: 14,
          name: "PHONG_CO_DIEN"
        },
        {
          id: 15,
          name: "PHONG_VAT_TU"
        },
        {
          id: 16,
          name: "PHONG_TAI_CHINH"
        },
        {
          id: 17,
          name: "PHONG_KE_HOACH"
        },
        {
          id: 18,
          name: "TO_DU_AN"
        },
        {
          id: 19,
          name: "PHONG_HANH_CHINH_HAU_CAN"
        },
        {
          id: 20,
          name: "PX1"
        },
        {
          id: 21,
          name: "PX2"
        },
        {
          id: 22,
          name: "PX3"
        },
        {
          id: 23,
          name: "PX4"
        },
        {
          id: 24,
          name: "PX5"
        },
        {
          id: 25,
          name: "PX6"
        },
        {
          id: 26,
          name: "PX7"
        },
        {
          id: 27,
          name: "PX8"
        },
        {
          id: 28,
          name: "PX9"
        },
        {
          id: 29,
          name: "TRAM_KIEM_THU_BAY_THU"
        },
        {
          id: 30,
          name: "VAN_THU_BAO_MAT"
        },
        {
          id: 31,
          name: "DIEU_DO"
        }
      ]
    }
  },
  pkh: {
    data: {
      khId: 0,
      congDoan: '',
      kiemHongDetails: [],
      ngayThangNamQuanDoc: '',
      ngayThangNamToTruong: '',
      ngayThangNamTroLyKT: '',
      nguonVao: '',
      noiNhan: '',
      phanXuong: '',
      quanDoc: '',
      soHieu: '',
      soTo: '',
      soXX: '',
      tenNhaMay: '',
      tenVKTBKT: '',
      toSX: '',
      toSo: '',
      toTruong: '',
      troLyKT: '',
      yKienGiamDoc: ''
    },
    isLoading: false,
    error: null,
    comboboxData: {
      phan_xuong: [],
      to_san_xuat: [],
      ten_vktbkt: [
        { id: 1, name: 'Máy bay L-39' },
        { id: 2, name: 'Máy bay Iak-52' },
        { id: 3, name: 'Động cơ M-14P' },
        { id: 4, name: 'Cánh quạt V530TA-D35' },
        { id: 5, name: 'Khác' },
      ],
      noi_nhan: [
        { id: 1, name: 'Nơi nhận 1' },
        { id: 2, name: 'Nơi nhận 2' },
        { id: 3, name: 'Nơi nhận 3' },
        { id: 4, name: 'Nơi nhận 4' },
        { id: 5, name: 'Khác' },
      ],
      chuyen: []
    }
  },
  pdh: {
    data: {
      createdAt: '',
      createdBy: 0,
      deleted: true,
      donViYeuCau: '',
      ngayThangNamNguoiDatHang: '',
      ngayThangNamTPKTHK: '',
      ngayThangNamTPVatTu: '',
      nguoiDatHang: '',
      noiDung: '',
      noiNhan: '',
      phanXuong: '',
      so: '',
      tenNhaMay: '',
      tenPhong: '',
      tpkthk: '',
      tpvatTu: '',
      updatedAt: '',
      updatedBy: 0,
      yKienGiamDoc: '',
      phieuDatHangDetails: [],
    },
    isLoading: false,
    error: null,
    comboboxData: {
      phan_xuong: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
      ],
      to_san_xuat: [
        { id: 1, name: 'TCĐK 1' },
        { id: 2, name: 'to_san_xuat 2' },
        { id: 3, name: 'to_san_xuat 3' },
        { id: 4, name: 'to_san_xuat 4' },
        { id: 5, name: 'to_san_xuat 5' },
      ],
      ten_vktbkt: [
        { id: 1, name: 'Máy bay L-39' },
        { id: 2, name: 'Máy bay Iak-52' },
        { id: 3, name: 'Động cơ M-14P' },
        { id: 4, name: 'Cánh quạt V530TA-D35' },
        { id: 5, name: 'Khác' },
      ],
      noi_nhan: [],
      mdsd: [],
      chuyen: []
    }
  },
  pcntp: {
    data: {
      donviDatHang: '',
      donviThucHien: '',
      noiDung: '',
      noiDungThucHiens: [],
      requestId: 0,
      soNghiemThuDuoc: '',
      soPA: '',
      tenSanPham: '',
      tpId: 0
    },
    isLoading: false,
    error: null,
    comboboxData: {
      phan_xuong: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
      ],
      to_san_xuat: [
        { id: 1, name: 'TCĐK 1' },
        { id: 2, name: 'to_san_xuat 2' },
        { id: 3, name: 'to_san_xuat 3' },
        { id: 4, name: 'to_san_xuat 4' },
        { id: 5, name: 'to_san_xuat 5' },
      ],
      ten_vktbkt: [
        { id: 1, name: 'Máy bay L-39' },
        { id: 2, name: 'Máy bay Iak-52' },
        { id: 3, name: 'Động cơ M-14P' },
        { id: 4, name: 'Cánh quạt V530TA-D35' },
        { id: 5, name: 'Khác' },
      ],
      noi_nhan: [],
      chuyen: []
    }
  },
  vbd: {
    list: {
      details: [],
      total: 0,
      page: 1,
      size: 15
    },
    listReceive: {
      details: [],
      total: 0,
      page: 1,
      size: 15
    },
    data: {
      files: []
    },
    isLoading: false,
    error: null,
    comboboxData: {
      noi_nhan: [],
      chuyen: []
    }
  }
};

export default state
