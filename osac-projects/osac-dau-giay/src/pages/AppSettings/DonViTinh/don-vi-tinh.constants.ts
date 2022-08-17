import {constants} from 'app-constants'
import {getFormItemViewFields} from '@caominhhung1991/components'
import {IDonViTinhConstants} from './DonViTinh'

export const donViTinhConstants: IDonViTinhConstants = {
  tenDonViTinh: {
    id: 'tenDonViTinh',
    name: 'Đơn vị tính',
    width: 120,
    className: 'text-small font-weight-bold',
    form: {
      type: 'input',
      rules: [
        {required: true, message: 'Chưa nhập'}
      ]
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.tenDonViTinh,
      constants.active,
      constants.editRow
    ]
  },
  getInputFields() {
    return [
      this.tenDonViTinh]
  },
  getExcelFields() {
    return [
      this.tenDonViTinh,
      constants.active
    ]
  },
  getFormViewFields() {
    const fields = [
      this.tenDonViTinh
    ]

    return getFormItemViewFields(fields)
  }
}

