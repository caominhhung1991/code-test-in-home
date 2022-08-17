import {constants} from 'app-constants'
import {getFormItemViewFields, sortByText} from '@caominhhung1991/components'
import {ITaiKhoanNganHangConstants} from './TaiKhoanNganHang'

export const taiKhoanNganHangConstants: ITaiKhoanNganHangConstants = {
  maTaiKhoan: {
    id: 'maTaiKhoan',
    name: 'Mã tài khoản',
    className: 'text-small font-weight-bold',
    width: 100,
    isSearch: true,
    form: {
      type: 'input'
    }
  },
  tenTaiKhoan: {
    id: 'tenTaiKhoan',
    name: 'Tên tài khoản',
    className: 'text-small font-weight-bold',
    width: 130,
    isSearch: true,
    form: {
      type: 'input',
      rules: [{message: 'Chưa nhập', required: true}]
    }
  },
  tenTaiKhoanNganHang: {
    id: 'tenTaiKhoanNganHang',
    name: 'Tên tài khoản',
    className: 'text-small',
    isSearch: true,
    width: 200,
  },
  soTaiKhoan: {
    id: 'soTaiKhoan',
    name: 'Số tài khoản',
    className: 'text-small',
    width: 100,
    align: '',
    isSearch: true,
    form: {
      rules: [{message: 'Chưa nhập', required: true}],
      type: 'input'
    }
  },
  nganHang: {
    id: 'nganHang',
    name: 'Ngân hàng',
    className: 'text-small',
    width: 100,
    align: '',
    isSearch: true,
    sorter: sortByText('nganHang'),
    form: {
      rules: [{message: 'Chưa nhập', required: true}],
      type: 'input'
    }
  },
  chiNhanh: {
    id: 'chiNhanh',
    name: 'Chi nhánh',
    className: 'text-small',
    width: 100,
    align: '',
    form: {type: 'input'}
  },
  loaiTaiKhoan: {
    id: 'loaiTaiKhoan',
    name: 'Loại TK',
    className: 'text-small',
    width: 100,
    align: '',
    isSearch: true,
    sorter: sortByText('loaiTaiKhoan'),
    form: {type: 'input'}
  },
  getTableColumns() {
    return [
      constants.stt,
      this.maTaiKhoan,
      this.tenTaiKhoan,
      this.soTaiKhoan,
      this.nganHang,
      this.chiNhanh,
      this.loaiTaiKhoan,
      constants.active,
      constants.editRow
    ]
  },
  getInputFields(edit?: any): any[] {
    return [
      this.maTaiKhoan,
      this.tenTaiKhoan,
      this.soTaiKhoan,
      this.nganHang,
      this.chiNhanh,
      this.loaiTaiKhoan
    ]
  },
  getFormViewFields(): any[] {
    const fields = [
      this.maTaiKhoan,
      this.tenTaiKhoan,
      this.soTaiKhoan,
      this.nganHang,
      this.chiNhanh,
      this.loaiTaiKhoan,
    ]

    return getFormItemViewFields(fields)
  }
}

