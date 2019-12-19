/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/",
  //   name: "Dashboard",
  //   slug: "home",
  //   icon: "HomeIcon",
  // },
  {
    url: "/cvct",
    name: "Văn bản cần giải quyết",
    slug: "cvct",
    icon: "CheckSquareIcon",
  },
  {
    url: "/pkh",
    name: "Phiếu Kiểm Hỏng",
    slug: "pkh",
    icon: "FileIcon",
  },
  {
    url: "/pdh",
    name: "Phiếu Đặt Hàng",
    slug: "pdh",
    icon: "FileIcon",
  },
  {
    url: "/pa",
    name: "Phương án",
    slug: "pa",
    icon: "FileIcon",
  },
  {
    url: "/pcntp",
    name: "Phiếu Công Nhận Thành Phẩm",
    slug: "pcntp",
    icon: "FileIcon",
  },
  {
    url: "/vbg",
    name: "Gửi văn bản, giấy tờ",
    slug: "vbg",
    icon: "ShareIcon",
  },
  {
    url: "/vbd",
    name: "Văn bản đến",
    slug: "vbd",
    icon: "DownloadIcon",
    roles: ['VAN_THU_BAO_MAT']
  },
  {
    url: "/tktdsp",
    name: "Thống Kê Tiến Độ Sản Phẩm",
    slug: "tktdsp",
    icon: "ActivityIcon",
  },
  {
    url: null,
    name: "Cài đặt",
    icon: "SettingsIcon",
    submenu: [
      {
        url: "/nd",
        name: "Người Dùng",
        slug: "nd",
        icon: "UserIcon",
        roles: ['ADMIN']
      },
      {
        url: "/cdc",
        name: "Cài Đặt Chung",
        slug: "cdc",
        icon: "UserIcon",
      }
    ]
  },
]
