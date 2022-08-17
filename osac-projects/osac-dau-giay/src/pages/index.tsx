import {lazy} from 'react'
import {NotFoundPage as notFound} from '@caominhhung1991/components'

// others
const dashboard = lazy(() => import('./dashboard'))
const withTabs = lazy(() => import('./business/with-tabs'))

// nhan su
const quanLyNhanSu = lazy(() => import('./QuanLyNhanSu'))
const danhSachNhanSu = lazy(() => import('./QuanLyNhanSu/NhanSu'))
const tatCaNhanSu = lazy(() => import('./QuanLyNhanSu/NhanSu/TatCaNhanSu'))
const danhSachLamViec = lazy(() => import('./QuanLyNhanSu/NhanSu/LamViec'))
const unpaidLeave = lazy(() => import('./QuanLyNhanSu/NhanSu/UnpaidLeave'))
const danhSachNghiViec = lazy(() => import('./QuanLyNhanSu/NhanSu/NghiViec'))

const salary = lazy(() => import('./QuanLyNhanSu/Salary'))

const baoHiemXaHoi = lazy(() => import ('./QuanLyNhanSu/ThietLapNhanSu/BaoHiemXaHoi'))
const danhSachDongBHXH = lazy(() => import ('./QuanLyNhanSu/ThietLapNhanSu/BaoHiemXaHoi/DanhSachDongBHXH'))
const ngayNghiLeTet = lazy(() => import ('./QuanLyNhanSu/ThietLapNhanSu/NgayNghiLeTet'))
// -- Diem Danh
const quanLyDiemDanh = lazy(() => import('./QuanLyNhanSu/QuanLyDiemDanh'))
const diemDanh = lazy(() => import('./QuanLyNhanSu/QuanLyDiemDanh/DiemDanh'))
const diemDanhThang = lazy(() => import('./QuanLyNhanSu/QuanLyDiemDanh/DiemDanhThang'))
const tinhLuong = lazy(() => import('./QuanLyNhanSu/QuanLyDiemDanh/TinhLuong'))

const thietLapNhanSu = lazy(() => import('./QuanLyNhanSu/ThietLapNhanSu'))
const chucVu = lazy(() => import('./QuanLyNhanSu/ThietLapNhanSu/ChucVu'))
const boPhan = lazy(() => import('./QuanLyNhanSu/ThietLapNhanSu/BoPhan'))
const cMND = lazy(() => import('./QuanLyNhanSu/ThietLapNhanSu/CMND'))

const khamSucKhoe = lazy(() => import ('./QuanLyNhanSu/KhamSucKhoe'))
const dongPhuc = lazy(() => import ('./QuanLyNhanSu/DongPhuc'))
// const danhSachDongPhuc = lazy(() => import ('./QuanLyNhanSu/DongPhuc/DanhSachDongPhuc'))
const capPhatDongPhuc = lazy(() => import ('./QuanLyNhanSu/DongPhuc/CapPhatDongPhuc'))
const duLieuDongPhuc = lazy(() => import ('./QuanLyNhanSu/DongPhuc/DuLieuDongPhuc'))

// ke toan
const keToan = lazy(() => import('./KeToan'))
const quanLyPhieuDeNghi = lazy(() => import('./KeToan/QuanLyPhieuDeNghi'))
const danhSachPDN = lazy(() => import('./KeToan/QuanLyPhieuDeNghi/DanhSachPDN'))

const thietLapKeToan = lazy(() => import('./KeToan/ThietLapKeToan'))
const phanCapXacNhan = lazy(() => import('./KeToan/ThietLapKeToan/PhanCapXacNhan'))

// quan ly quay nuoc
const quanLyQuayNuoc = lazy(() => import('./QuanLyQuayNuoc'))
const baoCaoQuayNuoc = lazy(() => import('./QuanLyQuayNuoc/BaoCaoQuayNuoc'))
const bcqnTienMat = lazy(() => import('./QuanLyQuayNuoc/BaoCaoQuayNuoc/BCQNTienMat'))

// app settings
const appSettings = lazy(() => import('./AppSettings'))
const noiPhucVu = lazy(() => import('./AppSettings/NoiPhucVu'))
const khachHang = lazy(() => import('./AppSettings/KhachHang'))
const diaDiem = lazy(() => import('./AppSettings/DiaDiem'))
const caLamViec = lazy(() => import('./AppSettings/CaLamViec'))
const taiKhoanNganHang = lazy(() => import('./AppSettings/TaiKhoanNganHang'))
const nhaCungCap = lazy(() => import('./AppSettings/NhaCungCap'))
const donViTinh = lazy(() => import('./AppSettings/DonViTinh'))

// quan ly tai khoan
const quanLyTaiKhoan = lazy(() => import('./QuanLyTaiKhoan'))
const accountList = lazy(() => import('./QuanLyTaiKhoan/Account'))
const phanQuyenDuongDan = lazy(() => import('./QuanLyTaiKhoan/PhanQuyenPath'))

// quan ly ca nhan
const quanLyCaNhan = lazy(() => import('./QuanLyCaNhan'))
const caNhan = lazy(() => import('./QuanLyCaNhan/CaNhan'))
const phieuDeNghiThanhToan = lazy(() => import('./KeToan/PhieuDeNghi'))
const phieuDeNghiTamUng = lazy(() => import('./KeToan/QuanLyPhieuDeNghi/DeNghiTamUng'))
const phieuDeNghiCaNhan = lazy(() => import('pages/KeToan/PhieuDeNghiCaNhan'))
const danhSachDaDeNghi = lazy(() => import('pages/KeToan/PhieuDeNghiCaNhan/PDNDaDeNghi'))
const phieuDeNghiChoXacNhan = lazy(() => import('pages/KeToan/PhieuDeNghiCaNhan/PDNChoXacNhan'))

export const elements: any = {
  // quan ly nhan su
  quanLyNhanSu, thietLapNhanSu,
  danhSachNhanSu, tatCaNhanSu, danhSachLamViec, unpaidLeave, danhSachNghiViec,
  salary,
  quanLyDiemDanh, diemDanh, diemDanhThang, tinhLuong,
  baoHiemXaHoi, danhSachDongBHXH, khamSucKhoe,
  dongPhuc, capPhatDongPhuc, duLieuDongPhuc,
  boPhan, chucVu, cMND,
  ngayNghiLeTet,
  // app settings
  appSettings, khachHang, diaDiem, caLamViec, noiPhucVu, taiKhoanNganHang, nhaCungCap, donViTinh,
  // quan ly tai khoan
  quanLyTaiKhoan,  accountList, phanQuyenDuongDan,
  // quan ly ca nhan
  quanLyCaNhan, caNhan,
  phieuDeNghiThanhToan, phieuDeNghiTamUng, phieuDeNghiCaNhan, danhSachDaDeNghi, phieuDeNghiChoXacNhan,
  // ketoan
  keToan, thietLapKeToan, phanCapXacNhan,
  quanLyPhieuDeNghi, danhSachPDN,
  // quan ly quay nuoc
  quanLyQuayNuoc, baoCaoQuayNuoc, bcqnTienMat,

  dashboard, withTabs,
  // other pages
  notFound,
}

