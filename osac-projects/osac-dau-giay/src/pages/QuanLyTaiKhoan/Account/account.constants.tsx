import {constants} from 'app-constants'
import {IAccountConstants} from './Account'
import {cmndConstants} from '../../QuanLyNhanSu/ThietLapNhanSu/CMND/cmnd.constants'

export const accountConstants: IAccountConstants = {
  email: {
    id: 'email',
    name: 'Email',
    width: 100,
    className: 'text-small font-weight-bold',
    isSearch: true,
    notEdit: true,
    form: {
      type: 'input',
      rules: [
        {type: 'email', message: 'Email chưa đúng định dạng'},
        {required: true, message: 'Chưa nhập Email'}
      ]
    }
  },
  tenAccount: {
    id: 'tenAccount',
    name: 'Tên tài khoản',
    width: 200,
    className: 'text-small font-weight-bold',
    isSearch: true,
  },
  password: {
    id: 'password',
    name: 'Password',
    width: 100,
    className: 'text-small',
    form: {
      type: 'input-password',
      rules: [
        {required: true, message: 'Chưa nhập mật khẩu'}
      ]
    }
  },
  photoURL: {id: 'photoURL', name: 'Avatar'},
  getTableColumns() {
    return [
      {...constants.stt, fixed: false},
      {...this.email, fixed: false},
      {...cmndConstants.hoTen, fixed: false},
      constants.active,
      constants.editRow
    ]
  },
  getInputFields() {
    return [
      this.email,
      this.password
    ]
  }

}

