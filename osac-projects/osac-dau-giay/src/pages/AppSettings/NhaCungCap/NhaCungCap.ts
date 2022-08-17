import {AppClass, IConstantItem, IConstants, IPageState} from '@caominhhung1991/components'

export interface INhaCungCap {
  id?: string
  tenNhaCungCap: string
  nganhNgheKinhDoanh: string
  nguoiLienHe: string
  soDienThoai: string
  diaChiNhaCungCap: string
  active?: boolean
}

export interface INhaCungCapObject {
  tenNhaCungCap: IConstantItem
  nganhNgheKinhDoanh: IConstantItem
  nguoiLienHe: IConstantItem
  soDienThoai: IConstantItem
  diaChiNhaCungCap: IConstantItem
}

export interface INhaCungCapRecord {
  [index: string]: INhaCungCap
}

export type INhaCungCapConstants = IConstants & INhaCungCapObject

export interface NhaCungCapState extends IPageState {
  nhaCungCaps: INhaCungCapRecord
  nhaCungCapId: string
}

export class NhaCungCap extends AppClass<INhaCungCap> {
  pathDatas = ['appSetting', 'nhaCungCap', 'datas']
  pathDeleted = ['appSetting', 'nhaCungCap', 'deleted']

  initData = {
    tenNhaCungCap: '',
    nganhNgheKinhDoanh: '',
    nguoiLienHe: '',
    soDienThoai: '',
    diaChiNhaCungCap: ''
  }
}
