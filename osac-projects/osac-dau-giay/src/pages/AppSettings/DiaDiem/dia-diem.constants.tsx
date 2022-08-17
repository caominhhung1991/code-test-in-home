import {constants} from 'app-constants'
import {IDiaDiemConstants} from './DiaDiem'

export const diaDiemConstants: IDiaDiemConstants = {
  diaDiemName: {
    id: 'diaDiemName',
    name: 'Địa điểm',
    className: 'text-small font-weight-bold',
    width: 135,
    align: '',
    isSearch: true,
    form: {
      type: 'input',
      rules: [{message: 'Chưa nhập', required: true}]
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.diaDiemName,
      constants.active,
      constants.editRow
    ]
  },
  getInputFields(edit?: any): any[] {
    return [
      this.diaDiemName
    ]
  }
}

