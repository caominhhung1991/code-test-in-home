import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {PlusOutlined} from '@ant-design/icons'
import {CanThayThe, CanThayTheState, ICanThayThe} from './CanThayThe'
import {canThayTheConstants} from './can-thay-the.constants'
import {listenerDB, onValueDB, getData} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  constantTabs.moRong,
  {label: 'Thêm mới', value: 'add', Icon: PlusOutlined},
  constantTabs.taiExcel,
]

const initialState: CanThayTheState = {
  loading: false,
  canThayTheLoading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  pageSize: Number(localStorage.getItem('pageSize-canThayThe') || '50'),
  canThayThes: {},
  canThayTheId: '',
  selectedCanThayTheId: null,
}

const canThayTheSlice = createSlice({
  name: 'canThayThe',
  initialState,
  reducers: {
    setCanThayThes(state: CanThayTheState, action) {
      state.canThayThes = action.payload
    },
    setPageSize(state: CanThayTheState, action) {
      localStorage.setItem('pageSize-canThayThe', `${action.payload}`)
      state.pageSize = action.payload
    },
    setCanThayThePending(state: CanThayTheState, action) {
      state.canThayTheLoading = !!action.payload
    },
    addSelectedId(state: CanThayTheState, action) {
      localStorage.setItem('canThayTheId', action.payload || '')
      state.canThayTheId = action.payload
    },
    selectCanThayTheId(state: CanThayTheState, action) {
      state.selectedCanThayTheId = action.payload
    }
  }
})

export const {addSelectedId, selectCanThayTheId, setCanThayThes, setCanThayThePending, setPageSize} = canThayTheSlice.actions

export default canThayTheSlice.reducer

export const onGetsCanThayThe = () => (dispatch: Dispatch) => {
  dispatch(setCanThayThePending(true))

  const db = getDatabase()

  const canThayThe = new CanThayThe()
  const pathDatas = canThayThe.getPathDatas()

  const dbRef = ref(db, pathDatas)
  const unsubscribe = onValueDB(dbRef, (snapshot) => {
    const datas = snapshot.val() || {}

    dispatch(setCanThayThes(datas))
  })

  listenerDB.push(['canThayThe', unsubscribe])

  dispatch(setCanThayThePending(false))
}

export function onUpdateById(canThayTheId: any) {
  return async (dispatch: Dispatch, getState: any) => {
    if (!canThayTheId) return console.log('error, missing id')

    const {canThayThes} = getState().canThayThe
    const canThayThe = new CanThayThe()

    const pathDatas = [...canThayThe.pathDatas, canThayTheId]
    const data = await getData(pathDatas)

    const newDatas = {...canThayThes, [canThayTheId]: data}

    dispatch(setCanThayThes(newDatas))
  }
}

export function toString(data: ICanThayThe) {
  return async () => {
    const fields = canThayTheConstants.getTableColumns()
    // @ts-ignore
    return fields.map(field => `${field.name}: ${data[field.id] || ''}`).join(', ')
  }
}

// export const getTenCanThayThe = (data: any) => async (dispatch: any, getState: any) => {
//   if (!data?.canThayTheId) return data
//
//   const tenCanThayThe = getState().canThayThe.canThayThes?.[data.canThayTheId]?.tenCanThayThe
//
//   return  {...data, tenCanThayThe}
// }

export const getTenCanThayThe = (data: any) => (dispatch: any, getState: any) => {
  if (!data?.canThayTheId) return {...data, tenCanThayThe: ''}
  const canThayThes = getState().canThayThe.canThayThes

  let tenCanThayThe
  if (data?.canThayTheId?.length && typeof data.canThayTheId !== 'string') {
    tenCanThayThe = data.canThayTheId.map((id: any) => {
      const canThayTheData = canThayThes?.[id] || {}

      return `${canThayTheData.tenCanThayThe || ''}`
    }).join(', ')
  } else {
    const canThayTheData = canThayThes?.[data.canThayTheId] || {}
    tenCanThayThe = `${canThayTheData.tenCanThayThe || ''}`
  }

  return  {...data, tenCanThayThe}
}

export function onCheckPhanQuyenCanThayThe(chucNangId: string) {
  return (dispatch: Dispatch<any>, getState: any) => {
    const state = getState()
    const {accountData} = state.account
    const {phanQuyenCanThayThes} = state.phanQuyenCanThayThe
    const phanQuyens = phanQuyenCanThayThes?.[chucNangId]

    return phanQuyens?.[accountData.id]
  }
}
