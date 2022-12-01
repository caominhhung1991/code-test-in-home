import {Moment} from 'moment'
import {IConstantItem, IConstants, IPageState} from '@caominhhung1991/components'
import {IIndex} from 'stores/types'

export interface ICanThayTheChiTiet {
  id?: string
  soLuong?: string | Moment
}

export interface ICanThayTheChiTietObject {
  soLuong: IConstantItem
}

export interface ICanThayTheChiTietRecord {
  [index: IIndex]: ICanThayTheChiTiet
}

export type ICanThayTheChiTietConstants = IConstants & ICanThayTheChiTietObject

export interface CanThayTheChiTietState {
  canThayTheChiTiets: ICanThayTheChiTietRecord
  canThayTheChiTietData?: ICanThayTheChiTiet | null
  canThayTheChiTietDirty?: boolean
}
