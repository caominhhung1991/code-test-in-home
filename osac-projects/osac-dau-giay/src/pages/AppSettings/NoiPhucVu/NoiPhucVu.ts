import {AppClass, IConstantItem, IConstants, IPageState} from '@caominhhung1991/components'

export interface INoiPhucVu {
  id?: string
  noiPhucVuName: string
  noiPhucVuAddress?: string
  tenQuanLyNoiPhucVu?: string
  khachHangName?: string
  khachHangId?: string
  soThuTu?: number
  active?: boolean
  bcqnTienMat?: boolean
}

export interface INoiPhucVuRecord {
  [id: string]: INoiPhucVu
}

interface INoiPhucVuObject {
  noiPhucVuName: IConstantItem;
  bcqnTienMat: IConstantItem;
}

export interface NoiPhucVuState extends IPageState {
  noiPhucVus: INoiPhucVuRecord
  noiPhucVuData: INoiPhucVu | null
  noiPhucVuId: string
  pageSize: number
}

export type INoiPhucVuConstants = IConstants & INoiPhucVuObject

export class NoiPhucVu extends AppClass<INoiPhucVu> {
  pathDatas = ['appSetting', 'noiPhucVu', 'datas']
  pathDeleted = ['appSetting', 'noiPhucVu', 'deleted']
  initData = {
    noiPhucVuName: '', noiPhucVuAddress: '', tenQuanLyNoiPhucVu: '', active: true
  }
}
