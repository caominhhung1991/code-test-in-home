import {IConstants, IConstantItem} from '@caominhhung1991/components'
import {AppClass, IPageState} from '@caominhhung1991/components'

export interface IPhanQuyenPath {
  id?: string
  email: string
}

export interface PhanQuyenPathObject {
  email: IConstantItem
}

export type IPhanQuyenPathConstants = IConstants & PhanQuyenPathObject

export interface IPhanQuyenPathRecord {
  [id: string]: IPhanQuyenPath
}

export interface PhanQuyenPathState extends IPageState {
  phanQuyenDuongDans: IPhanQuyenPathRecord
  phanQuyenDuongDanId: string
}

export class PhanQuyenPath extends AppClass<IPhanQuyenPath> {
  pathDatas = ['quanLyTaiKhoan', 'phanQuyenDuongDan', 'datas']
  pathDeleted = ['quanLyTaiKhoan', 'phanQuyenDuongDan', 'deleted']

  initData = {
    email: '',
  }

}
