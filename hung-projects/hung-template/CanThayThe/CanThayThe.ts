import moment, {Moment} from 'moment'
import {AppClass, IPageState, IConstants, IConstantItem} from '@caominhhung1991/components'

export interface ICanThayThe {
  id?: string
  inputText?: string
  inputNumber?: number
  time?: number | Moment
  active?: boolean
}

export interface ICanThayTheObject {
  inputText: IConstantItem
  inputNumber: IConstantItem
  time: IConstantItem
}

export interface ICanThayTheRecord {
  [index: string]: ICanThayThe
}

export type ICanThayTheConstants = IConstants & ICanThayTheObject

export interface CanThayTheState extends IPageState {
  canThayThes: ICanThayTheRecord
  canThayTheData?: ICanThayThe | null
  canThayTheLoading?: boolean
  canThayTheId: string
  selectedCanThayTheId?: any
  pageSize: number
}

export class CanThayThe extends AppClass<ICanThayThe> {
  pathDatas = ['canThayThe', 'datas']
  pathDeleted = ['canThayThe', 'deleted']

  initData = {
  }
}
