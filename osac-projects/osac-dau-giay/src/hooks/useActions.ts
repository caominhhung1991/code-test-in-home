import {Dispatch} from '@reduxjs/toolkit'
import {addData, updateData} from 'services/firebase'
import {message} from 'antd'

type UpdateAsyncPayload = {
  currentData: any
  validatedValues: any
  otherPath?: any[]
}

type AddAsyncPayload = {
  validatedValues: any
  otherPath?: any[]
}

export interface IUseActions {
  onAddAsync(payload: any): any

  onUpdateAsync(payload: UpdateAsyncPayload): any

  onActiveAsync(payload: any): any

  onDeleteAsync(payload: any): any
}

type UseActionsProps = {
  Instance: any
  addSelectedId?(id?: string): any
  onDelete?(value?: any): any
  onEdit?(value?: any): any
  onActive?(id?: any, value?: boolean): any
  onPending(loading: boolean): any
}

export function useActions(props: UseActionsProps) {
  const {Instance, onPending, addSelectedId, onDelete, onActive} = props

  const onAddAsync = (payload: AddAsyncPayload) => async (dispatch: Dispatch) => {
    const {validatedValues} = payload
    const {otherPath} = validatedValues

    dispatch(onPending(true))

    const instance = new Instance()
    let pathDatas = otherPath ? [...instance.pathDatas, ...otherPath] : instance.pathDatas

    const data = await addData(pathDatas, validatedValues)
    addSelectedId && dispatch(addSelectedId?.(data?.id))
    dispatch(onPending(false))

    return data
  }
  const onUpdateAsync = (payload: UpdateAsyncPayload) => async (dispatch: Dispatch) => {
    const {currentData, validatedValues} = payload
    const {id, otherPath} = currentData

    if (!id) return message.error('Chưa có id')

    dispatch(onPending(true))

    const instance = new Instance()
    let pathDatas = otherPath ? [...instance.pathDatas, ...otherPath, id] : [...instance.pathDatas, id]

    await updateData(pathDatas, validatedValues)

    dispatch(onPending(false))

    return true
  }
  const onActiveAsync = (payload: any = {}) => async (dispatch: Dispatch) => {
    const {id, active, otherPath, name} = payload

    dispatch(onPending(true))

    const instance = new Instance()

    // const pathDatas = [...instance.pathDatas, id]
    let pathDatas = otherPath ? [...instance.pathDatas, ...otherPath, id] : [...instance.pathDatas, id]

    const activeName = name ? name : 'active'
    await updateData(pathDatas, {[activeName]: active})
    onActive && dispatch(onActive(id, active))
    dispatch(onPending(false))
  }
  const onDeleteAsync = (payload: any = {}) => async (dispatch: Dispatch) => {
    const {id, otherPath} = payload

    dispatch(onPending(true))

    const instance = new Instance()

    const path = otherPath ? [...otherPath, id].join('/') : id

    const pathDatas = instance.getPathDatas(path)
    const pathDeleted = instance.getPathDeleted(path)

    const updates: any = {
      [pathDatas]: null,
      [pathDeleted]: payload
    }

    await updateData(null, updates)
    onDelete && dispatch(onDelete(payload))

    dispatch(onPending(false))
    return true
  }

  return {onAddAsync, onUpdateAsync, onActiveAsync, onDeleteAsync}
}
