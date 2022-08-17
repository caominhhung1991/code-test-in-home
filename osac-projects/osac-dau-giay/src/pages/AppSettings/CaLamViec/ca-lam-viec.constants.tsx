import {constants} from 'app-constants'
import {ICaLamViecConstants} from './CaLamViec'
import {sortByText} from '@caominhhung1991/components'

export const caLamViecConstants: ICaLamViecConstants = {
  caLamViecName: {
    id: 'caLamViecName',
    name: 'Ca làm việc',
    className: 'text-small font-weight-bold',
    width: 120,
    align: 'center',
    isSearch: true,
    sorter: sortByText('caLamViecName'),
    form: {
      required: true,
      type: 'input'
    }
  },
  gioBatDau: {
    id: 'gioBatDau',
    name: 'Giờ bắt đầu',
    className: 'text-small',
    width: 100,
    align: '',
    form: {
      type: 'input',
      style: {width: '100%'}
    }
  },
  gioKetThuc: {
    id: 'gioKetThuc',
    name: 'Giờ kết thúc',
    className: 'text-small',
    width: 100,
    align: '',
    form: {
      type: 'input'
    }
  },
  soGioLamViec: {
    id: 'soGioLamViec',
    name: 'Số giờ làm việc',
    className: 'text-small',
    width: 100,
    align: '',
    form: {
      type: 'input-number'
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.caLamViecName,
      this.gioBatDau,
      this.gioKetThuc,
      this.soGioLamViec,
      constants.active,
      constants.editRow
    ]
  },
  getInputFields(): any[] {
    return [
      this.caLamViecName,
      this.gioBatDau,
      this.gioKetThuc,
      this.soGioLamViec
    ]
  }
}

