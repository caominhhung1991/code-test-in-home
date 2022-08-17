import {IConstants, IConstantItem} from '@caominhhung1991/components'
import {AppClass, IPageState} from '@caominhhung1991/components'

export interface ICaLamViec {
  id?: string
  caLamViecName: string
  gioBatDau?: string
  gioKetThuc?: string
  soGioLamViec?: number
  active: boolean
}

interface ICaLamViecObject {
  caLamViecName: IConstantItem
  gioBatDau: IConstantItem
  gioKetThuc: IConstantItem
  soGioLamViec: IConstantItem
}

export interface ICaLamViecRecord {
  [id: string]: ICaLamViec
}

export type ICaLamViecConstants = IConstants & ICaLamViecObject

export interface CaLamViecState extends IPageState {
  caLamViecs: ICaLamViecRecord
  caLamViecId: any
}

export class CaLamViec extends AppClass<ICaLamViec> {
  pathDatas = ['appSetting', 'caLamViec', 'datas']
  pathDeleted = ['appSetting', 'caLamViec', 'deleted']

  initData = {
    caLamViecName: '',
    gioBatDau: '06:00',
    gioKetThuc: '18:00',
    soGioLamViec: 12,
    active: true,
  }
}
