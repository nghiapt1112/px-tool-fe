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
    name: 'John Doe',
    about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    img: 'avatar-s-11.png',
    status: 'online',
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
  cvct: {
    data: [],
    error: null,
    loading: false
  },
  pkh: {
    data: {
      khId: 0,
      congDoan: "Kiểm hỏng chi tiết",
      kiemHongDetails: [
        {
          dangHuHong: "Nứt trong",
          khDetailId: 0,
          kyHieu: "44t4",
          nguoiKiemHong: "string",
          phuongPhapKhacPhuc: "S/c Theo PA",
          sl: "5",
          tenLinhKien: "Trục dẫn động",
          tenPhuKien: "Van điện từ 1234",
          tt: "string"
        }
      ],
      ngayThangNamQuanDoc: "",
      ngayThangNamToTruong: "Ngày 12 tháng 12 năm 2019",
      ngayThangNamTroLyKT: "Ngày 12 tháng 12 năm 2019",
      nguonVao: "SCL-TTNH",
      noiNhan: "Nơi nhận 1",
      phanXuong: "4",
      quanDoc: "string",
      soHieu: "8843",
      soTo: "5",
      soXX: "8373y64",
      tenNhaMay: "string",
      tenVKTBKT: "Máy bay L-39",
      toSX: "TCĐK",
      toSo: "2",
      toTruong: "string",
      troLyKT: "string",
      ykienGiamDoc: "string"
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
      noi_nhan: [
        { id: 1, name: 'Nơi nhận 1' },
        { id: 2, name: 'Nơi nhận 2' },
        { id: 3, name: 'Nơi nhận 3' },
        { id: 4, name: 'Nơi nhận 4' },
        { id: 5, name: 'Khác' },
      ]
    }
  },
  pdh: {
    data: {
      createdAt: "2019-10-27T12:58:17.323Z",
      createdBy: 0,
      deleted: true,
      donViYeuCau: "TCĐK 1",
      ngayThangNamNguoiDatHang: "Ngày 12 tháng 12 năm 2019",
      ngayThangNamTPKTHK: "",
      ngayThangNamTPVatTu: "Ngày 12 tháng 12 năm 2019",
      nguoiDatHang: "string",
      noiDung: "string",
      noiNhan: "string",
      pdhId: 0,
      phanXuong: "4",
      so: "23/2910",
      tenNhaMay: "string",
      tenPhong: "string",
      tpkthk: "string",
      tpvatTu: "string",
      updatedAt: "2019-10-27T12:58:17.326Z",
      updatedBy: 0,
      ykienGiamDoc: "string",
      phieuDatHangDetails: [
        {
          dvt: "Cái",
          kiMaHieu: "37387849",
          mucDichSuDung: "Máy bay L-39",
          nguoiThucHien: "P.Vật tư",
          pdhDetailId: 0,
          phuongPhapKhacPhuc: "VT cấp",
          sl: "1",
          soPhieuDatHang: "bằng G2  (tư động)",
          stt: "string",
          tenPhuKien: "Van điện từ 1234",
          tenVatTuKyThuat: "Vỏ thân van"
        }
      ],
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
      noi_nhan: [
        { id: 1, name: 'Nơi nhận 1' },
        { id: 2, name: 'Nơi nhận 2' },
        { id: 3, name: 'Nơi nhận 3' },
        { id: 4, name: 'Nơi nhận 4' },
        { id: 5, name: 'Khác' },
      ]
    }
  }
}

export default state
