import {combineReducers} from '@reduxjs/toolkit'

import tagsViewReducer from './tags-view.store'
import tagsPageReducer from './tags-page.store'
import hideColumnsReducer from './hide-columns.store'
import userReducer from './user.store'
import formReducer from './form.store'
import imageReducer from 'components/core/image/image.store'
import tableReducer from 'stores/table.store'

// quan ly tai khoan
import accountReducer from 'pages/QuanLyTaiKhoan/Account/account.store'
import phanCapXacNhanReducer from 'pages/KeToan/ThietLapKeToan/PhanCapXacNhan/phan-cap-xac-nhan.store'

// nhan su
import nhanSuReducer from 'pages/QuanLyNhanSu/NhanSu/nhan-su.store'
import khamSucKhoeSuReducer from 'pages/QuanLyNhanSu/KhamSucKhoe/kham-suc-khoe.store'
import salaryReducer from 'pages/QuanLyNhanSu/Salary/salary.store'
import capPhapDongPhucSuReducer from 'pages/QuanLyNhanSu/DongPhuc/CapPhatDongPhuc/cap-phat-dong-phuc.store'
import duLieuDongPhucSuReducer from 'pages/QuanLyNhanSu/DongPhuc/DuLieuDongPhuc/du-lieu-dong-phuc.store'
import CMNDSuReducer from 'pages/QuanLyNhanSu/ThietLapNhanSu/CMND/cmnd.store'
import BHXHSuReducer from 'pages/QuanLyNhanSu/ThietLapNhanSu/BaoHiemXaHoi/bhxh.store'
import chucVuReducer from 'pages/QuanLyNhanSu/ThietLapNhanSu/ChucVu/chuc-vu.store'
import boPhanReducer from 'pages/QuanLyNhanSu/ThietLapNhanSu/BoPhan/bo-phan.store'
import ngayNghiLeTetReducer from 'pages/QuanLyNhanSu/ThietLapNhanSu/NgayNghiLeTet/ngay-nghi-le-tet.store'

import diemDanhReducer from 'pages/QuanLyNhanSu/QuanLyDiemDanh/DiemDanh/diem-danh.store'
import diemDanhThangReducer from 'pages/QuanLyNhanSu/QuanLyDiemDanh/DiemDanhThang/diem-danh-thang.store'
import bamVanTayReducer from 'pages/QuanLyNhanSu/QuanLyDiemDanh/BamVanTay/bam-van-tay.store'
import tinhLuongReducer from 'pages/QuanLyNhanSu/QuanLyDiemDanh/TinhLuong/tinh-luong.store'
import xemCongLamViecReducer from 'pages/QuanLyNhanSu/XemCongLamViec/xem-cong-lam-viec.store'

import noiPhucVuReducer from 'pages/AppSettings/NoiPhucVu/noi-phuc-vu.store'
import khachHangReducer from 'pages/AppSettings/KhachHang/khach-hang.store'
import diaDiemReducer from 'pages/AppSettings/DiaDiem/dia-diem.store'
import caLamViecReducer from 'pages/AppSettings/CaLamViec/ca-lam-viec.store'
import taiKhoanNganHangReducer from 'pages/AppSettings/TaiKhoanNganHang/tai-khoan-ngan-hang.store'
import nhaCungCapReducer from 'pages/AppSettings/NhaCungCap/nha-cung-cap.store'
import donViTinhReducer from 'pages/AppSettings/DonViTinh/don-vi-tinh.store'

// ke toan
import phieuDeNghiReducer from 'pages/KeToan/PhieuDeNghi/phieu-de-nghi.store'
import hoaDonThanhToanReducer from 'pages/KeToan/PhieuDeNghi/HoaDonThanhToan/hoa-don-thanh-toan.store'
import deNghiTamUngReducer from 'pages/KeToan/QuanLyPhieuDeNghi/DeNghiTamUng/de-nghi-tam-ung.store'
import danhSachPDNTTReducer from 'pages/KeToan/QuanLyPhieuDeNghi/DanhSachPDN/danh-sach-pdn.store'
import PDNDaDeNghiReducer from 'pages/KeToan/PhieuDeNghiCaNhan/PDNDaDeNghi/pdn-da-de-nghi.store'
import pDNChoXacNhanReducer from 'pages/KeToan/PhieuDeNghiCaNhan/PDNChoXacNhan/pdn-cho-xac-nhan.store'

// quan ly quay nuoc
import bcqnTienMatReducer from 'pages/QuanLyQuayNuoc/BaoCaoQuayNuoc/BCQNTienMat/bcqn-tien-mat.store'

const rootReducer = combineReducers({
  tagsView: tagsViewReducer,
  tagsPage: tagsPageReducer,
  hideColumns: hideColumnsReducer,
  user: userReducer,
  account: accountReducer,
  form: formReducer,

  // nhan su
  nhanSu: nhanSuReducer,
  khamSucKhoe: khamSucKhoeSuReducer,
  salary: salaryReducer,
  cMND: CMNDSuReducer,
  bHXH: BHXHSuReducer,
  boPhan: boPhanReducer,
  chucVu: chucVuReducer,
  capPhatDongPhuc: capPhapDongPhucSuReducer,
  duLieuDongPhuc: duLieuDongPhucSuReducer,
  ngayNghiLeTet: ngayNghiLeTetReducer,

  diemDanh: diemDanhReducer,
  diemDanhThang: diemDanhThangReducer,
  bamVanTay: bamVanTayReducer,
  tinhLuong: tinhLuongReducer,
  xemCongLamViec: xemCongLamViecReducer,

  noiPhucVu: noiPhucVuReducer,
  khachHang: khachHangReducer,
  diaDiem: diaDiemReducer,
  caLamViec: caLamViecReducer,
  taiKhoanNganHang: taiKhoanNganHangReducer,
  nhaCungCap: nhaCungCapReducer,
  donViTinh: donViTinhReducer,

  // ketoan
  phanCapXacNhan: phanCapXacNhanReducer,
  danhSachPDNTT: danhSachPDNTTReducer,

  phieuDeNghi: phieuDeNghiReducer,
  hoaDonThanhToan: hoaDonThanhToanReducer,
  deNghiTamUng: deNghiTamUngReducer,
  pDNDaDeNghi: PDNDaDeNghiReducer,
  pDNChoXacNhan: pDNChoXacNhanReducer,

  // quan ly quay nuoc
  bcqnTienMat: bcqnTienMatReducer,

  image: imageReducer,
  table: tableReducer
})

export default rootReducer
