import {AppClass, IConstantItem, IConstants, IPageState} from '@caominhhung1991/components'

export interface IDonViTinh {
  id?: string
  tenDonViTinh: string
  active?: boolean
}

export interface IDonViTinhObject {
  tenDonViTinh: IConstantItem

}

export interface IDonViTinhRecord {
  [index: string]: IDonViTinh
}

export type IDonViTinhConstants = IConstants & IDonViTinhObject

export interface DonViTinhState extends IPageState {
  donViTinhs: IDonViTinhRecord
  donViTinhId: string
}

export class DonViTinh extends AppClass<IDonViTinh> {
  pathDatas = ['appSetting', 'donViTinh', 'datas']
  pathDeleted = ['appSetting', 'donViTinh', 'deleted']

  initData = {
    tenDonViTinh: ''
  }
}
