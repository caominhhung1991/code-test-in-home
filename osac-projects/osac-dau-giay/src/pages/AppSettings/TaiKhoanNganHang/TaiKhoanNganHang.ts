import {AppClass, IPageState} from '@caominhhung1991/components'
import {IConstants, IConstantItem} from '@caominhhung1991/components'

export interface ITaiKhoanNganHang {
  id?: string
  maTaiKhoan: string
  tenTaiKhoan: string
  tenTaiKhoanNganHang?: string
  soTaiKhoan: string
  nganHang: string
  chiNhanh?: string | null
  loaiTaiKhoan: string
  active: boolean
}

export interface ITaiKhoanNganHangRecord {
  [id: string]: ITaiKhoanNganHang
}

interface ITaiKhoanNganHangObject {
  maTaiKhoan: IConstantItem
  tenTaiKhoan: IConstantItem
  tenTaiKhoanNganHang: IConstantItem
  soTaiKhoan: IConstantItem
  nganHang: IConstantItem
  chiNhanh?: IConstantItem
  loaiTaiKhoan: IConstantItem
}

export interface TaiKhoanNganHangState extends IPageState {
  taiKhoanNganHangs: ITaiKhoanNganHangRecord
  pageSize: number
  taiKhoanNganHangId: string
}

export type ITaiKhoanNganHangConstants = IConstants & ITaiKhoanNganHangObject

export class TaiKhoanNganHang extends AppClass<ITaiKhoanNganHang> {
  pathDatas = ['appSetting', 'taiKhoanNganHang', 'datas']
  pathDeleted = ['appSetting', 'taiKhoanNganHang', 'deleted']

  initData = {
    maTaiKhoan: '',
    tenTaiKhoan: '',
    soTaiKhoan: '',
    nganHang: '',
    chiNhanh: '',
    loaiTaiKhoan: '',
    active: true
  }
}

