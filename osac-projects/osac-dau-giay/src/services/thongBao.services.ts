import {message} from 'antd'

export function onThongBaoSuccess(thongBao: any) {
  message.success(thongBao)
}

export function onThongBaoError(thongBao: any) {
  message.error(thongBao)
}

export function thongBaoQuyenChinhSua(thongBao?: any) {
  message.error(thongBao || 'Bạn chưa có quyền chỉnh sửa!')
}

export function thongBaoDaLuu(thongBao?: any) {
  onThongBaoSuccess(thongBao || 'Đã lưu thông tin!')
}

export function thongBaoDaXoa(thongBao?: any) {
  onThongBaoSuccess(thongBao || 'Đã xóa thông tin!')
}

export function thongBaoDaLoi(thongBao?: any) {
  onThongBaoError(thongBao || 'Đã có lỗi xảy ra!')
}
