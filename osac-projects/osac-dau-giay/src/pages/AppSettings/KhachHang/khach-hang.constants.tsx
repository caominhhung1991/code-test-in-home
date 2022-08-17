import {constants} from 'app-constants'
import {IKhachHangConstants} from './KhachHang'
import {numberRender, sortByText} from '@caominhhung1991/components'

export const khachHangConstants: IKhachHangConstants = {
  khachHangId: {
    id: 'khachHangId',
    name: 'Khách hàng',
  },
  khachHangName: {
    id: 'khachHangName',
    name: 'Tên khách hàng',
    className: 'text-small font-weight-bold',
    width: 140,
    align: '',
    isSearch: true,
    sorter: sortByText('khachHangName'),
    form: {
      required: true,
      type: 'input'
    }
  },
  tenDayDu: {
    id: 'tenDayDu',
    name: 'Tên đầy đủ',
    className: 'text-small',
    width: 140,
    align: '',
    isSearch: true,
    form: {
      type: 'input'
    }
  },
  nhomKhachHang: {
    id: 'nhomKhachHang',
    name: 'Nhóm KH',
    className: 'text-small',
    width: 110,
    align: '',
    isSearch: true,
    form: {
      type: 'input'
    }
  },
  giaAnSang: {
    id: 'giaAnSang',
    name: 'Giá ăn sáng',
    className: 'text-small',
    width: 80,
    align: '',
    form: {
      type: 'input-number-format'
    },
    render: numberRender,
  },
  giaPhanAn: {
    id: 'giaPhanAn',
    name: 'Giá phần ăn',
    className: 'text-small',
    width: 100,
    align: '',
    form: {
      type: 'input-number-format'
    },
    render: numberRender,
  },
  giaCombo: {
    id: 'giaCombo',
    name: 'Giá combo',
    className: 'text-small',
    width: 80,
    align: '',
    form: {
      type: 'input-number-format'
    },
    render: numberRender,
  },
  giaPhanSua: {
    id: 'giaPhanSua',
    name: 'Giá phần sữa',
    className: 'text-small',
    width: 100,
    align: '',
    form: {
      type: 'input-number-format'
    },
    render: numberRender,
  },
  getTableColumns() {
    return [
      {...constants.stt, fixed: false},
      this.khachHangName,
      this.tenDayDu,
      this.nhomKhachHang,
      this.giaAnSang,
      this.giaPhanAn,
      this.giaCombo,
      this.giaPhanSua,
      constants.active,
      constants.editRow
    ]
  },
  getInputFields(edit?: any): any[] {
    return [
      this.khachHangName,
      this.tenDayDu,
      this.nhomKhachHang,
      this.giaAnSang,
      this.giaPhanAn,
      this.giaCombo,
      this.giaPhanSua,
    ]
  }
}

