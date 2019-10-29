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
  dashboard: {
    data: [],
    error: null,
    loading: false
  },
  cvct: {
    data: [],
    error: null,
    loading: false
  },
  requestId: null,
  pa: {
    isLoading: false,
    error: null,
    data: {
      dinhMucLaoDongs: [
        {
          bacCV: "string",
          dm: "string",
          dmId: 0,
          ghiChu: "string",
          noiDungCongViec: "string",
          tt: "string"
        }
      ],
      dinhMucVatTus: [
        {
          dm1SP: "string",
          dvt: "string",
          ghiChu: "string",
          khoDonGia: "string",
          khoSoLuong: "string",
          khoThanhTien: "string",
          khoTongTien: "string",
          kyMaKyHieu: "string",
          mnDonGia: "string",
          mnSoLuong: "string",
          mnThanhTien: "string",
          mnTongTien: "string",
          soLuongSanPham: "string",
          tenVatTuKyThuat: "string",
          tienLuong: "string",
          tongNhuCau: "string",
          tt: "string",
          vtId: 0
        }
      ],
      maSo: "string",
      ngayThangNamNguoiLap: "string",
      ngayThangNamPheDuyet: "string",
      ngayThangNamTPKEHOACH: "string",
      ngayThangNamTPKTHK: "string",
      ngayThangNamtpVatTu: "string",
      nguoiLap: "string",
      nguonKinhPhi: "string",
      noiDung: "string",
      paId: 0,
      pdh: "string",
      sanPham: "string",
      soTo: "string",
      tenNhaMay: "string",
      tienLuong: 0,
      toSo: "string",
      tongCongDinhMucLaoDong: 0,
      tongDMVTKho: 0,
      tongDMVTMuaNgoai: 0,
      truongPhongKTHK: "string",
      truongPhongKeHoach: "string",
      truongPhongVatTu: "string"
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
  pcntp: {
    data: {
      donviDatHang: "string",
      donviThucHien: "string",
      noiDung: "string",
      noiDungThucHiens: [
        {
          chuyen: 0,
          ketQua: "string",
          nghiemThu: "string",
          nguoiLam: "string",
          noiDung: "string",
          noiDungId: 0
        }
      ],
      requestId: 0,
      soNghiemThuDuoc: "string",
      soPA: "string",
      tenSanPham: "string",
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
  }
}

export default state
