import {constants} from 'app-constants'
import {getFormItemViewFields, sortByText} from '@caominhhung1991/components'
import {INhaCungCapConstants} from './NhaCungCap'

export const nhaCungCapConstants: INhaCungCapConstants = {
  tenNhaCungCap: {
    id: 'tenNhaCungCap',
    name: 'Tên NCC',
    width: 120,
    isSearch: true,
    fixed: true,
    className: 'text-small font-weight-bold',
    sorter: sortByText('tenNhaCungCap'),
    form: {
      type: 'input',
      rules: [
        {required: true, message: 'Chưa nhập'}
      ]
    }
  },
  nganhNgheKinhDoanh: {
    id: 'nganhNgheKinhDoanh',
    name: 'Ngành nghề KD',
    width: 100,
    className: 'text-small ',
    isSearch: true,
    form: {type: 'input'}
  },
  diaChiNhaCungCap: {
    id: 'diaChiNhaCungCap',
    name: 'Địa chỉ',
    width: 140,
    className: 'text-small ',
    isSearch: true,
    form: {
      type: 'text-area',
    }
  },
  nguoiLienHe: {
    id: 'nguoiLienHe',
    name: 'Người liên hệ',
    width: 100,
    className: 'text-small ',
    form: {
      type: 'input',
    }
  },
  soDienThoai: {
    id: 'soDienThoai',
    name: 'Số ĐT',
    width: 100,
    className: 'text-small ',
    align: 'center',
    form: {
      type: 'input',
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.tenNhaCungCap,
      this.nganhNgheKinhDoanh,
      this.diaChiNhaCungCap,
      this.nguoiLienHe,
      this.soDienThoai,
      constants.active,
      constants.editRow,
    ]
  },
  getInputFields() {
    return [
      this.tenNhaCungCap,
      this.nganhNgheKinhDoanh,
      this.diaChiNhaCungCap,
      this.nguoiLienHe,
      this.soDienThoai,
    ]
  },
  getExcelFields() {
    return [
      this.tenNhaCungCap,
      this.nganhNgheKinhDoanh,
      this.diaChiNhaCungCap,
      this.nguoiLienHe,
      this.soDienThoai,

      constants.active
    ]
  },
  getFormViewFields() {
    const fields = [
      this.tenNhaCungCap,
      this.nganhNgheKinhDoanh,
      this.diaChiNhaCungCap,
      this.nguoiLienHe,
      this.soDienThoai,
    ]

    return getFormItemViewFields(fields)
  }
}

