import {Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {Account} from '../Account/Account'
import {getData, updateData} from 'services/firebase'
import {addPhanQuyenData} from '../Account/account.store'

export const phanQuyenTabsData: TabItem[] = [
  constantTabs.all,
  {label: 'Thêm Account', value: 'add'}
]

const setPhanQuyenPath = (key: string | number, updatedData: any) => async (dispatch: Dispatch, getState: any) => {
  const state = getState()
  const {accountId, phanQuyenData} = state.account || {}

  if (!accountId) return null
  const pathDatas = (new Account()).pathDatas
  const pathFinal = [...pathDatas, accountId, 'paths', key]

  const newPhanQuyenData = {
    ...phanQuyenData,
    [key]: {
      ...(phanQuyenData[key] || {}),
      ...updatedData,
    }
  }
  dispatch<any>(addPhanQuyenData(newPhanQuyenData))
  return await updateData(pathFinal, updatedData)
}

export const setPhanQuyenAccess = (key: string | number, value: boolean) => async (dispatch: Dispatch) => {
  const updatedData = {access: value}

  await dispatch<any>(setPhanQuyenPath(key, updatedData))
}

export const setPhanQuyenEdit = (key: string | number, value: boolean) => async (dispatch: Dispatch) => {
  const updatedData = {edit: value}

  await dispatch<any>(setPhanQuyenPath(key, updatedData))
}

export const getPhanQuyenData = (accountId: string) => async (dispatch: Dispatch) => {
  const pathDatas = (new Account()).pathDatas

  const pathFinal = [...pathDatas, accountId, 'paths']
  const data = await getData(pathFinal)

  dispatch<any>(addPhanQuyenData(data))
}
