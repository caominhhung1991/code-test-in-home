import {MenuList} from '@caominhhung1991/components'
import {intercepter, mock} from '../config'

const mockMenuList: MenuList = [
  {
    title: 'Trang chủ',
    label: {
      en_US: 'Dashboard',
      vi_VN: 'Dashboard'
    },
    icon: 'dashboard',
    key: 'dashboard',
    component: 'dashboard',
    path: '/dashboard',
    componentPath: 'dashboard',
  },
  {
    title: 'QL quầy nước',
    label: {
      en_US: 'QL quầy nước',
      vi_VN: 'QL quầy nước'
    },
    icon: 'kimCuong',
    key: 'quanLyQuayNuoc',
    component: 'quanLyQuayNuoc',
    path: '/quan-ly-quay-nuoc',
    componentPath: 'quan-ly-quay-nuoc',
    children: [
      {
        title: 'Báo cáo QN',
        label: {
          en_US: 'Báo cáo QN',
          vi_VN: 'Báo cáo QN'
        },
        icon: 'kimCuong',
        key: 'baoCaoQuayNuoc',
        component: 'baoCaoQuayNuoc',
        path: '/quan-ly-quay-nuoc/bao-cao',
        componentPath: 'bao-cao',
        children: [
          {
            title: 'BC tiền mặt',
            label: {
              en_US: 'BC tiền mặt',
              vi_VN: 'BC tiền mặt'
            },
            icon: 'kimCuong',
            key: 'bcqnTienMat',
            component: 'bcqnTienMat',
            path: '/quan-ly-quay-nuoc/bao-cao/tien-mat',
            componentPath: 'tien-mat',
          },
        ]
      },
    ]
  },
  {
    title: 'Layout Mẫu',
    label: {
      en_US: 'Layout Template',
      vi_VN: 'Layout mẫu'
    },
    icon: 'permission',
    key: 'layout-mau',
    component: 'withTabs',
    path: '/layout-mau',
    componentPath: 'layout-mau',
  },
  {
    title: 'Nhân sự',
    label: {
      en_US: 'Employees',
      vi_VN: 'Nhân sự'
    },
    icon: 'nhanSu',
    key: 'quanLyNhanSu',
    component: 'quanLyNhanSu',
    path: '/nhan-su',
    componentPath: 'nhan-su',
    children: [
      {
        title: 'DS Nhân Sự',
        label: {
          en_US: 'Employees List',
          vi_VN: 'DS Nhân Sự'
        },
        key: 'nhanSu',
        icon: 'nhanSu',
        component: 'danhSachNhanSu',
        path: '/nhan-su/danh-sach',
        componentPath: 'danh-sach',
        children: [
          {
            title: 'Tất cả NS',
            label: {
              en_US: 'All Emp',
              vi_VN: 'Tất cả NS'
            },
            key: 'tatCaNhanSu',
            component: 'tatCaNhanSu',
            path: '/nhan-su/danh-sach/tat-ca',
            componentPath: 'tat-ca',
          },
          {
            title: 'Làm Việc',
            label: {
              en_US: 'Work List',
              vi_VN: 'Làm Việc'
            },
            key: 'danhSachLamViec',
            component: 'danhSachLamViec',
            path: '/nhan-su/danh-sach/lam-viec',
            componentPath: 'lam-viec',
          },
          {
            title: 'Nghỉ K. lương',
            label: {
              en_US: 'Nghỉ k lương',
              vi_VN: 'Nghỉ k lương'
            },
            key: 'unpaidLeave',
            component: 'unpaidLeave',
            path: '/nhan-su/danh-sach/unpaid-leave',
            componentPath: 'unpaid-leave',
          },
          {
            title: 'Nghỉ việc',
            label: {
              en_US: 'List',
              vi_VN: 'Nghỉ Việc'
            },
            key: 'danhSachNghiViec',
            component: 'danhSachNghiViec',
            path: '/nhan-su/danh-sach/nghi-viec',
            componentPath: 'nghi-viec',
          },
        ]
      },
      {
        title: 'CMND',
        label: {
          en_US: 'CMND',
          vi_VN: 'CMND'
        },
        key: 'cMND',
        icon: 'card',
        component: 'cMND',
        path: '/nhan-su/cmnd',
        componentPath: 'cmnd'
      },
      {
        title: 'Lương',
        label: {
          en_US: 'Salary',
          vi_VN: 'Lương '
        },
        key: 'salary',
        icon: 'salary',
        component: 'salary',
        path: '/nhan-su/salary',
        componentPath: 'salary',
      },
      {
        title: 'QL Điểm danh',
        label: {
          en_US: 'QL Điểm danh',
          vi_VN: 'QL Điểm danh'
        },
        key: 'quanLyDiemDanh',
        icon: 'clock',
        component: 'quanLyDiemDanh',
        path: '/nhan-su/quan-ly-diem-danh',
        componentPath: 'quan-ly-diem-danh',
        children: [
          {
            title: 'ĐD cơm',
            label: {
              en_US: 'ĐD cơm',
              vi_VN: 'ĐD cơm'
            },
            key: 'diemDanh',
            icon: 'clock',
            component: 'diemDanh',
            path: '/nhan-su/quan-ly-diem-danh/diem-danh-com',
            componentPath: 'diem-danh-com',
          },
          {
            title: 'ĐD tháng',
            label: {
              en_US: 'ĐD tháng',
              vi_VN: 'ĐD tháng'
            },
            key: 'diemDanhThang',
            icon: 'clock',
            component: 'diemDanhThang',
            path: '/nhan-su/quan-ly-diem-danh/diem-danh-thang',
            componentPath: 'diem-danh-thang',
          },
          // {
          //   title: 'Bấm vân tay',
          //   label: {
          //     en_US: 'Bấm vân tay',
          //     vi_VN: 'Bấm vân tay'
          //   },
          //   key: 'bamVanTay',
          //   icon: 'clock',
          //   component: 'bamVanTay',
          //   path: '/nhan-su/quan-ly-diem-danh/bam-van-tay',
          //   componentPath: 'bam-van-tay',
          // },
          {
            title: 'Tính lương',
            label: {
              en_US: 'Tính lương',
              vi_VN: 'Tính lương'
            },
            key: 'tinhLuong',
            icon: 'salary',
            component: 'tinhLuong',
            path: '/nhan-su/quan-ly-diem-danh/tinh-luong',
            componentPath: 'tinh-luong',
          },
        ]
      },
      {
        title: 'Khám sức khỏe',
        icon: 'heart',
        label: {
          en_US: 'Khám sức khỏe',
          vi_VN: 'Khám sức khỏe'
        },
        key: 'khamSucKhoe',
        component: 'khamSucKhoe',
        path: '/nhan-su/kham-suc-khoe',
        componentPath: 'kham-suc-khoe'
      },
      {
        title: 'Đồng phục',
        label: {
          en_US: 'Đồng phục',
          vi_VN: 'Đồng phục'
        },
        key: 'dongPhuc',
        icon: 'dongPhuc',
        component: 'dongPhuc',
        path: '/nhan-su/dong-phuc',
        componentPath: 'dong-phuc',
        children: [
          {
            title: 'Cấp phát ĐP',
            label: {
              en_US: 'Cấp phát ĐP',
              vi_VN: 'Cấp phát ĐP'
            },
            key: 'capPhatDongPhuc',
            component: 'capPhatDongPhuc',
            path: '/nhan-su/dong-phuc/cap-phat',
            componentPath: 'cap-phat',
          },
          {
            title: 'Dữ liệu ĐP',
            label: {
              en_US: 'Dữ liệu ĐP',
              vi_VN: 'Dữ liệu ĐP'
            },
            key: 'duLieuDongPhuc',
            component: 'duLieuDongPhuc',
            path: '/nhan-su/dong-phuc/du-lieu',
            componentPath: 'du-lieu',
          },
          {
            title: 'Nhập kho ĐP',
            label: {
              en_US: 'Nhập kho ĐP',
              vi_VN: 'Nhập kho ĐP'
            },
            key: 'nhapKhoDongPhuc',
            component: 'nhapKhoDongPhuc',
            path: '/nhan-su/dong-phuc/nhap-kho',
            componentPath: 'nhap-kho',
          },
        ]
      },
      {
        title: 'BHXH',
        label: {
          en_US: 'BHXH',
          vi_VN: 'BHXH'
        },
        key: 'baoHiemXaHoi',
        icon: 'thungThuoc',
        component: 'baoHiemXaHoi',
        path: '/nhan-su/bao-hiem-xa-hoi',
        componentPath: 'bao-hiem-xa-hoi',
        children: [
          {
            title: 'Danh sách đóng BHXH',
            label: {
              en_US: 'Danh sách đóng BHXH',
              vi_VN: 'Danh sách đóng BHXH'
            },
            key: 'danhSachDongBHXH',
            component: 'danhSachDongBHXH',
            path: '/nhan-su/bao-hiem-xa-hoi/danh-sach-dong',
            componentPath: 'danh-sach-dong'
          },
          {
            title: 'Danh sách nghỉ BHXH',
            label: {
              en_US: 'Danh sách nghỉ BHXH',
              vi_VN: 'Danh sách nghỉ BHXH'
            },
            key: 'danhSachNghiBHXH',
            component: 'danhSachNghiBHXH',
            path: '/nhan-su/bao-hiem-xa-hoi/danh-sach-nghi',
            componentPath: 'danh-sach-nghi'
          },
        ]
      },
      {
        icon: 'settings',
        title: 'Thiết Lập Nhân Sự',
        label: {
          en_US: 'Employees List',
          vi_VN: 'Thiết Lập NS'
        },
        key: 'thietLapNhanSu',
        component: 'thietLapNhanSu',
        path: '/nhan-su/thiet-lap-nhan-su',
        componentPath: 'thiet-lap-nhan-su',
        children: [
          {
            title: 'Bộ Phận',
            label: {
              en_US: 'Department',
              vi_VN: 'Bộ Phận'
            },
            key: 'boPhan',
            component: 'boPhan',
            path: '/nhan-su/thiet-lap-nhan-su/bo-phan',
            componentPath: 'bo-phan',
          },
          {
            title: 'Chức vụ',
            label: {
              en_US: 'Chuc Vu',
              vi_VN: 'Chức vụ'
            },
            key: 'chucVu',
            component: 'chucVu',
            path: '/nhan-su/thiet-lap-nhan-su/chuc-vu',
            componentPath: 'chuc-vu'
          },
          {
            title: 'Ngày nghỉ, lễ tết',
            label: {
              en_US: 'Ngày nghỉ, lễ tết',
              vi_VN: 'Ngày nghỉ, lễ tết'
            },
            key: 'ngayNghiLeTet',
            component: 'ngayNghiLeTet',
            path: '/nhan-su/thiet-lap-nhan-su/ngay-nghi-le-tet',
            componentPath: 'ngay-nghi-le-tet'
          },
        ]
      },
    ]
  },
  {
    title: 'Kế toán',
    key: 'keToan',
    label: {
      en_US: 'Accountant',
      vi_VN: 'Kế toán'
    },
    icon: 'snipest',
    component: 'keToan',
    path: '/ke-toan',
    componentPath: 'ke-toan',
    children: [
      {
        title: 'Danh sách ĐN',
        key: 'quanLyPhieuDeNghi',
        icon: 'money',
        label: {
          en_US: 'Danh sách ĐN',
          vi_VN: 'Danh sách ĐN'
        },
        component: 'quanLyPhieuDeNghi',
        path: '/ke-toan/quan-ly-de-nghi',
        componentPath: 'quan-ly-de-nghi',
        children: [
          {
            title: 'DS phiếu đề nghị',
            label: {
              en_US: 'DS phiếu đề nghị',
              vi_VN: 'DS phiếu đề nghị',
            },
            key: 'danhSachPDN',
            icon: 'box-slot',
            component: 'danhSachPDN',
            path: '/ke-toan/quan-ly-de-nghi/danh-sach-pdn',
            componentPath: 'danh-sach-pdn',
          }
        ]
      },
      {
        title: 'Thiết lập KT',
        key: 'thietLapKeToan',
        icon: 'settings',
        label: {
          en_US: 'Settings',
          vi_VN: 'Thiết lập KT'
        },
        component: 'thietLapKeToan',
        path: '/ke-toan/thiet-lap-ke-toan',
        componentPath: 'thiet-lap-ke-toan',
        children: [
          {
            title: 'P.cấp xác nhận',
            label: {
              en_US: 'P.cấp xác nhận',
              vi_VN: 'P.cấp xác nhận',
            },
            key: 'phanCapXacNhan',
            icon: 'box-slot',
            component: 'phanCapXacNhan',
            path: '/ke-toan/thiet-lap-ke-toan/phan-quyen-xac-nhan',
            componentPath: 'phan-quyen-xac-nhan',
          },
        ]
      },
    ]
  },
  {
    title: 'Thiết lập chung',
    label: {
      en_US: 'Mgt Settings',
      vi_VN: 'Thiết lập chung'
    },
    icon: 'settings',
    key: 'appSettings',
    component: 'appSettings',
    path: '/app-settings',
    componentPath: 'app-settings',
    children: [
      {
        title: 'Nơi phục vụ',
        label: {
          en_US: 'Service Location',
          vi_VN: 'Nơi phục vụ'
        },
        key: 'noiPhucVu',
        component: 'noiPhucVu',
        path: '/app-settings/noi-phuc-vu',
        componentPath: 'noi-phuc-vu',
      },
      {
        title: 'Khách hàng',
        label: {
          en_US: 'Customer',
          vi_VN: 'Khách hàng'
        },
        key: 'khachHang',
        component: 'khachHang',
        path: '/app-settings/khach-hang',
        componentPath: 'khach-hang'
      },
      {
        title: 'Nhà cung cấp',
        label: {
          en_US: 'Vendor',
          vi_VN: 'Nhà cung cấp'
        },
        key: 'nhaCungCap',
        component: 'nhaCungCap',
        path: '/app-settings/nha-cung-cap',
        componentPath: 'nha-cung-cap'
      },
      {
        title: 'Địa điểm nấu',
        label: {
          en_US: 'Cook Location',
          vi_VN: 'Địa điểm nấu'
        },
        key: 'diaDiem',
        component: 'diaDiem',
        path: '/app-settings/dia-diem-nau',
        componentPath: 'dia-diem-nau'
      },
      {
        title: 'Ca làm việc',
        label: {
          en_US: 'Working Shift',
          vi_VN: 'Ca làm việc'
        },
        key: 'caLamViec',
        component: 'caLamViec',
        path: '/app-settings/ca-lam-viec',
        componentPath: 'ca-lam-viec'
      },
      {
        title: 'Tài khoản ngân hàng',
        label: {
          en_US: 'Bank Accounts',
          vi_VN: 'Tài khoản ngân hàng'
        },
        key: 'taiKhoanNganHang',
        component: 'taiKhoanNganHang',
        path: '/app-settings/tai-khoan-ngan-hang',
        componentPath: 'tai-khoan-ngan-hang'
      },
      {
        title: 'Đơn vị tính',
        label: {
          en_US: 'Quantitative',
          vi_VN: 'Đơn vị tính'
        },
        key: 'donViTinh',
        component: 'donViTinh',
        path: '/app-settings/don-vi-tinh',
        componentPath: 'don-vi-tinh'
      },
    ]
  },
  {
    title: 'Quản Lý Tài Khoản',
    label: {
      en_US: 'Mgt Account',
      vi_VN: 'Quản Lý Tài Khoản'
    },
    icon: 'account',
    key: 'quanLyTaiKhoan',
    component: 'quanLyTaiKhoan',
    path: '/quan-ly-tai-khoan',
    componentPath: 'quan-ly-tai-khoan',
    children: [

      {
        title: 'DS Tài khoản',
        label: {
          en_US: 'Account list',
          vi_VN: 'DS Tài khoản'
        },
        key: 'accountList',
        component: 'accountList',
        path: '/quan-ly-tai-khoan/account-list',
        componentPath: 'account-list'
      },
      {
        title: 'Phân quyền',
        label: {
          en_US: 'Phân quyền',
          vi_VN: 'Phân quyền'
        },
        key: 'phanQuyenDuongDan',
        icon: 'account',
        component: 'phanQuyenDuongDan',
        path: '/quan-ly-tai-khoan/phan-quyen-duong-dan',
        componentPath: 'phan-quyen-duong-dan'
      },
    ]
  },
  {
    title: 'Quản Lý Cá Nhân',
    label: {
      en_US: 'Mgt Account',
      vi_VN: 'Quản Lý Cá Nhân'
    },
    icon: 'chimCanhCut',
    key: 'quanLyCaNhan',
    component: 'quanLyCaNhan',
    path: '/quan-ly-ca-nhan',
    componentPath: 'quan-ly-ca-nhan',
    children: [
      {
        title: 'TT cá nhân',
        label: {
          en_US: 'User Info',
          vi_VN: 'TT cá nhân'
        },
        key: 'caNhan',
        component: 'caNhan',
        path: '/quan-ly-ca-nhan/thong-tin-ca-nhan',
        componentPath: 'thong-tin-ca-nhan'
      },
      {
        title: 'Phiếu đề nghị',
        label: {
          en_US: 'Phiếu đề nghị',
          vi_VN: 'Phiếu đề nghị'
        },
        key: 'phieuDeNghiCaNhan',
        component: 'phieuDeNghiCaNhan',
        path: '/quan-ly-ca-nhan/phieu-de-nghi-ca-nhan',
        componentPath: 'phieu-de-nghi-ca-nhan',
        children: [
          {
            title: 'Tạo ĐN thanh toán',
            label: {
              en_US: 'Tạo ĐN thanh toán',
              vi_VN: 'Tạo ĐN thanh toán'
            },
            key: 'phieuDeNghiThanhToan',
            component: 'phieuDeNghiThanhToan',
            path: '/quan-ly-ca-nhan/phieu-de-nghi-ca-nhan/de-nghi-thanh-toan',
            componentPath: 'de-nghi-thanh-toan'
          },
          {
            title: 'Tạo ĐN tạm ứng',
            label: {
              en_US: 'Tạo ĐN tạm ứng',
              vi_VN: 'Tạo ĐN tạm ứng'
            },
            key: 'phieuDeNghiTamUng',
            component: 'phieuDeNghiTamUng',
            path: '/quan-ly-ca-nhan/phieu-de-nghi-ca-nhan/de-nghi-tam-ung',
            componentPath: 'de-nghi-tam-ung'
          },
          {
            title: 'Đã đề nghị',
            label: {
              en_US: 'Đã đề nghị',
              vi_VN: 'Đã đề nghị'
            },
            key: 'danhSachDaDeNghi',
            component: 'danhSachDaDeNghi',
            path: '/quan-ly-ca-nhan/phieu-de-nghi-ca-nhan/phieu-da-de-nghi',
            componentPath: 'phieu-da-de-nghi',
          },
          {
            title: 'Chờ xác nhận',
            label: {
              en_US: 'Chờ xác nhận',
              vi_VN: 'Chờ xác nhận'
            },
            key: 'phieuDeNghiChoXacNhan',
            component: 'phieuDeNghiChoXacNhan',
            path: '/quan-ly-ca-nhan/phieu-de-nghi-ca-nhan/phieu-cho-xac-nhan',
            componentPath: 'phieu-cho-xac-nhan',
          },

        ]
      },
    ]
  },
]

mock.mock('/user/menu', 'get', intercepter(mockMenuList))
