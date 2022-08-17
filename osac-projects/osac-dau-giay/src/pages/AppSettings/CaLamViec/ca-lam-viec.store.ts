import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {CaLamViec as Instance, CaLamViecState} from './CaLamViec'
import {addData, listenerDB, onValueDB, updateData} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  constantTabs.all,
  {label: 'Thêm ca làm việc', value: 'add'}
]

const initialState: CaLamViecState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  caLamViecs: {},
  caLamViecId: undefined
}

const noiPhucVuSlice = createSlice({
  name: 'caLamViec',
  initialState,
  reducers: {
    setDatas(state: CaLamViecState, action) {
      state.caLamViecs = action.payload
    },
    onPending(state: CaLamViecState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: CaLamViecState, action) {
      state.caLamViecId = action.payload
    }
  }
})

export const {addSelectedId, setDatas, onPending} = noiPhucVuSlice.actions

export default noiPhucVuSlice.reducer

export const onGetsAsync = () => (dispatch: Dispatch) => {
  dispatch(onPending(true))

  const db = getDatabase()

  const instance = new Instance()
  const pathDatas = instance.getPathDatas()

  const dbRef = ref(db, pathDatas)
  const unsubscribe = onValueDB(dbRef, (snapshot) => {
    const datas = snapshot.val() || {}

    dispatch(setDatas(datas))
  })

  listenerDB.push(['ca-lam-viec', unsubscribe])

  dispatch(onPending(false))
}
export const onAddAsync = (payload: any = {}) => async (dispatch: Dispatch) => {
  const {validatedValues} = payload

  dispatch(onPending(true))

  const instance = new Instance()
  const pathDatas = instance.pathDatas

  await addData(pathDatas, validatedValues)

  dispatch(onPending(false))

  return true
}
export const onUpdateAsync = (payload: any = {}) => async (dispatch: Dispatch) => {
  const {currentData, validatedValues} = payload
  const {id} = currentData

  dispatch(onPending(true))

  const instance = new Instance()
  const pathDatas = [...instance.pathDatas, id]

  await updateData(pathDatas, validatedValues)

  dispatch(onPending(false))

  return true
}
export const onActiveAsync = (payload: any = {}) => async (dispatch: Dispatch) => {
  const {id, active} = payload

  dispatch(onPending(true))

  const instance = new Instance()
  const pathDatas = [...instance.pathDatas, id]

  await updateData(pathDatas, {active})

  dispatch(onPending(false))
}
export const onDeleteAsync = (payload: any = {}) => async (dispatch: Dispatch) => {
  const {id} = payload

  dispatch(onPending(true))

  const instance = new Instance()

  const pathDatas = instance.getPathDatas(id)
  const pathDeleted = instance.getPathDeleted(id)

  const updates: any = {
    [pathDatas]: null,
    [pathDeleted]: payload
  }

  await updateData(null, updates)

  dispatch(onPending(false))

  return true
}
