import moment, {Moment} from 'moment'
import {AppClass, IPageState, IConstants, IConstantItem} from '@caominhhung1991/components'

export interface IBCQNTienMat {
  id?: string
  ghiChu: string
  thuBoSung: number
  tongCa?: number
  tongNgay?: number
  ngay: number | Moment
}

export interface IBCQNTienMatObject {
  ghiChu: IConstantItem
  thuBoSung: IConstantItem
  ngay: IConstantItem
  tongCa: IConstantItem
  tongNgay: IConstantItem
}

export interface IBCQNTienMatRecord {
  [index: string]: IBCQNTienMat
}

export type IBCQNTienMatConstants = IConstants & IBCQNTienMatObject

export interface BCQNTienMatState extends IPageState {
  bcqnTienMats: IBCQNTienMatRecord
  bcqnTienMatData: IBCQNTienMat | null
  bcqnTienMatId?: string
  pageSize: number
  tableConstants: any
  noiPhucVuFields: any
}

export class BCQNTienMat extends AppClass<IBCQNTienMat> {
  pathDatas = ['quanLyQuayNuoc', 'baoCaoQuayNuoc', 'bcqnTienMat', 'datas'] //, yearMonthId
  pathDeleted = ['quanLyQuayNuoc', 'baoCaoQuayNuoc','bcqnTienMat', 'deleted']

  initData = {
    ghiChu: '',
    thuBoSung: 0,
    ngay: moment()
  }
}
