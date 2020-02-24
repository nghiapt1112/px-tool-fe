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
      chuKy: '',
      userId: '',
      email: '',
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
        sanPham: '',
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
        requestId: 0,
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
        chuyen: [],
        nguoiThucHien: [],
        cusNoiNhan: [],
      }
    },
    pkh: {
      data: {
        requestId: 0,
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
        chuyen: [],
        nguoiThucHien: [],
        cusNoiNhan: [],
      }
    },
    pdh: {
      data: {
        requestId: 0,
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
        chuyen: [],
        nguoiThucHien: [],
        cusNoiNhan: [],
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
        chuyen: [],
        nguoiLam: [],
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
        chuyen: [],
        thuMuc: []
      }
    },
    nd: {
      list: {
        details: [],
        total: 0,
        page: 1,
        size: 15
      },
      data: {},
      comboboxData: {
        level: [],
        phongBan: []
      }
    },
    dmdc: {
      data: {
        mdsd: [],
        thuMuc: []
      }
    },
    userToTruong: {
      comboboxData: {
        users: []
      },
      error: null,
      loading: false
  }
  }
;

export default state
