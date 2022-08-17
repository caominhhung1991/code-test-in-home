import {IConstants, IConstantItem, IPageState} from '@caominhhung1991/components'
import {AppClass} from '@caominhhung1991/components'

export interface IKhachHang {
  id?: string
  khachHangId?: string
  khachHangName?: string
  tenDayDu?: string
  nhomKhachHang?: string
  giaAnSang?: number
  giaPhanAn?: number
  giaCombo?: number
  giaPhanSua?: number
  active?: boolean
}

interface IKhachHangObject {
  khachHangId: IConstantItem
  khachHangName: IConstantItem
  tenDayDu: IConstantItem
  nhomKhachHang: IConstantItem
  giaAnSang: IConstantItem
  giaPhanAn: IConstantItem
  giaCombo: IConstantItem
  giaPhanSua: IConstantItem
}

export interface KhachHangState extends IPageState {
  khachHangs: IKhachHangRecord
  khachHangData: IKhachHang | null
  khachHangId?: string
  pageSize: number
}

export interface IKhachHangRecord {
  [id: string]: IKhachHang
}

export type IKhachHangConstants = IConstants & IKhachHangObject

export class KhachHang extends AppClass<IKhachHang>{
  pathDatas = ['appSetting', 'khachHang', 'datas']
  pathDeleted = ['appSetting', 'khachHang', 'deleted']
  initData = {
    khachHangName: '',
    active: true,
  }
}
