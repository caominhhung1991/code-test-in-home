import {IConstants, IConstantItem} from '@caominhhung1991/components'
import {AppClass, IPageState} from '@caominhhung1991/components'

export interface IDiaDiem {
  id?: string
  diaDiemName: string
  active: boolean
}

interface IDiaDiemObject {
  diaDiemName: IConstantItem
}

export interface IDiaDiemRecord {
  [id: string]: IDiaDiem
}

export type IDiaDiemConstants = IConstants & IDiaDiemObject

export interface DiaDiemState extends IPageState {
  diaDiems: IDiaDiemRecord
  diaDiemId: string
}

export class DiaDiem extends AppClass<IDiaDiem> {
  pathDatas = ['appSetting', 'diaDiem', 'datas']
  pathDeleted = ['appSetting', 'diaDiem', 'deleted']
  initData = {
    diaDiemName: '',
    active: true,
  }
}
