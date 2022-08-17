import {AppClass, IConstantItem, IConstants, IPageState} from '@caominhhung1991/components'

export interface IAccount {
  id?: string
  email?: string
  photoURL?: string
  nhanSuId?: string
  tenAccount?: string
  hoTen?: string
  password?: string
  paths?: any
  active?: boolean
}

export interface AccountObject {
  email: IConstantItem
  password: IConstantItem
  photoURL: IConstantItem
  tenAccount: IConstantItem
}

export type IAccountConstants = IConstants & AccountObject

export interface IAccountRecord {
  [id: string]: IAccount
}

export interface AccountState extends IPageState {
  accounts: IAccountRecord
  accountData?: IAccount
  phanQuyenData?: IAccount
  accountId: string
}

export class Account extends AppClass<IAccount> {
  pathDatas = ['quanLyTaiKhoan', 'account', 'datas']
  pathDeleted = ['quanLyTaiKhoan', 'account', 'deleted']

  initData = {
    email: '',
    password: '',
    photoURL: '',
    active: true
  }

}
