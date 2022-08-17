import {constants} from 'app-constants'
import {INoiPhucVuConstants} from './NoiPhucVu'
import {sortByText, trueFalseFilter} from '@caominhhung1991/components'
import {khachHangConstants} from '../KhachHang/khach-hang.constants'
import {ActiveButton} from 'components/core/button/activeButton'

export const noiPhucVuConstants: INoiPhucVuConstants = {
  noiPhucVuName: {
    id: 'noiPhucVuName',
    name: 'Nơi phục vụ',
    className: 'text-small font-weight-bold',
    width: 100,
    align: '',
    isSearch: true,
    sorter: sortByText('noiPhucVuName'),
    form: {
      required: true,
      type: 'input'
    }
  },
  bcqnTienMat: {
    id: 'bcqnTienMat',
    name: 'BCQN tiền mặt',
    width: 100,
    className: 'text-small',
    filters: trueFalseFilter.filters,
    onFilter: trueFalseFilter.onFilter('bcqnTienMat'),
    align: 'center',
    render: (cell: any, row: any, index: any, options: any) => {
      return <ActiveButton cell={cell} row={row} index={index} name={'bcqnTienMat'} {...options}/>
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.noiPhucVuName,
      constants.soThuTu,
      khachHangConstants.khachHangName,
      {...constants.active, ...this.bcqnTienMat},
      constants.active,
      constants.editRow
    ]
  },
  getInputFields(): any[] {
    return [
      this.noiPhucVuName,
      constants.soThuTu,
    ]
  },
  getExcelFields(): any[] {
    return [
      constants.stt,
      this.noiPhucVuName,
      constants.soThuTu,
      khachHangConstants.khachHangName,
      {...constants.active, ...this.bcqnTienMat},
      constants.active,
    ]
  }
}

