import moment from 'moment'
import {constants} from 'app-constants'
import {IBCQNTienMatConstants} from './BCQNTienMat'
import {formatNumber, numberRender, sortByText} from '@caominhhung1991/components'
import {caLamViecConstants} from '../../../AppSettings/CaLamViec/ca-lam-viec.constants'
import {BcqnTienMatCost} from './bcqn-tien-mat.cost'
import {BcqnTienMatGhichu} from './bcqn-tien-mat.ghichu'

export const bcqnTienMatConstants: IBCQNTienMatConstants = {
  ngay: {
    id: 'ngay',
    name: 'Ngày',
    width: 60,
    className: 'text-small',
    align: 'center',
    // isSearch: true,
    // sorter: sortByText('dayId'),
    form: {
      type: 'date-picker',
      innerProps: {
        disabled: true
      }
    },
    render: cell => {
      return moment(cell, 'L').format('DD/MM')
    }
  },
  tongCa: {
    id: 'tongCa',
    name: 'Tổng ca',
    width: 85,
    className: 'text-small font-weight-bold',
    align: 'right',
    render: BcqnTienMatCost,
  },
  tongNgay: {
    id: 'tongNgay',
    name: 'Tổng ngày',
    width: 85,
    className: 'text-small font-weight-bold text-danger',
    align: 'right',
    render: (cell: any, row: any) => {
      if (row.caLamViecId === 'caSang') return formatNumber(cell)

      return ''
    },
  },
  thuBoSung: {
    id: 'thuBoSung',
    name: 'Thu bổ sung',
    width: 90,
    className: 'text-small font-weight-bold',
    align: 'right',
    form: {
      type: 'input-number-format',
      innerProps: {
        min: 0, step: 1_000
      }
    },
    render: numberRender,
  },
  ghiChu: {
    id: 'ghiChu',
    name: 'Ghi chú',
    width: 220,
    className: 'text-small-10',
    form: {
      type: 'text-area',
    },
    render: BcqnTienMatGhichu,
  },
  getTableColumns() {
    return [
      this.ngay,
      {
        ...caLamViecConstants.caLamViecName,
        name: 'Ca LV',
        width: 70,
        isSearch: false,
      }
    ]
  },
  getInputFields() {
    return [
      this.ngay,
      this.thuBoSung,
      this.ghiChu
    ]
  },
  getExcelFields() {
    return [
      this.ngay,
      this.thuBoSung,
      this.ghiChu,
      constants.active
    ]
  },
}

