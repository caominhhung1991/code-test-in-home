import {sortByText, constants} from '@caominhhung1991/components'
import {ICanThayTheChiTietConstants} from './CanThayTheChiTiet'

export const canThayTheChiTietConstants: ICanThayTheChiTietConstants = {
  soLuong: {
    id: 'soLuong',
    name: 'Số lượng',
    width: 100,
    className: 'text-small font-weight-bold',
    align: 'center',
    isSearch: true,
    sorter: sortByText('soLuong'),
    form: {
      type: 'input-number',
      rules: [{required: true}]
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.soLuong,
      constants.editRow,
    ]
  },
  getInputFields() {
    return [
      constants.stt,
      constants.id,
      this.soLuong,
    ]
  },
  getExcelFields() {
    return [
      constants.stt,
      constants.active
    ]
  }
}

export const canThayTheChiTietViewConstants: any = {
  getTableColumns() {
    return [
      canThayTheChiTietConstants.soLuong,
    ]
  },
}
