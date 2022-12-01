import {constants} from '@caominhhung1991/components'
import {ICanThayTheConstants} from './CanThayThe'

export const canThayTheConstants: ICanThayTheConstants = {
  inputText: {
    id: 'inputText',
    name: 'Input text',
    width: 100,
    className: 'text-small font-weight-bold',
    align: 'center',
    form: {
      type: 'input',
      rules: [
        {required: true, message: 'Chưa nhập'}
      ]
    }
  },
  inputNumber: {
    id: 'inputNumber',
    name: 'Input number',
    width: 100,
    className: 'text-small font-weight-bold',
    align: 'center',
    form: {
      type: 'input-number-format',
      rules: [
        {required: true, message: 'Chưa nhập'}
      ]
    }
  },
  time: {
    id: 'time',
    name: 'Time',
    width: 100,
    className: 'text-small',
    form: {
      type: 'date-picker',
      rules: [{required: true, message: 'Chưa nhập'}]
    }
  },
  getTableColumns() {
    return [
      constants.stt,
      this.inputText,
      this.inputNumber,
      this.time,
      constants.active,
      constants.editRow
    ]
  },
  getInputFields() {
    return [
      this.inputText,
      this.inputNumber,
      this.time
    ]
  },
  getExcelFields() {
    return [
      this.inputText,
      this.inputNumber,
      this.time,
      constants.active
    ]
  }
}
