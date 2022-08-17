import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {PlusOutlined} from '@ant-design/icons'
import {NoiPhucVu, NoiPhucVuState, INoiPhucVu} from './NoiPhucVu'
import {noiPhucVuConstants} from './noi-phuc-vu.constants'
import {listenerDB, onValueDB} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  {label: 'Thêm mới', value: 'add', Icon: PlusOutlined},
  constantTabs.taiExcel,

]

const initialState: NoiPhucVuState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  pageSize: Number(localStorage.getItem('pageSize-noiPhucVu') || '25'),
  noiPhucVus: {},
  noiPhucVuData: null,
  noiPhucVuId: '',
}

const noiPhucVuSlice = createSlice({
  name: 'noiPhucVu',
  initialState,
  reducers: {
    setDatas(state: NoiPhucVuState, action) {
      state.noiPhucVus = action.payload
    },
    setPageSize(state: NoiPhucVuState, action) {
      localStorage.setItem('pageSize-noiPhucVu', `${action.payload}`)
      state.pageSize = action.payload
    },
    onPending(state: NoiPhucVuState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: NoiPhucVuState, action) {
      state.noiPhucVuId = action.payload
      state.noiPhucVuData = state.noiPhucVus?.[action.payload] || null
    }
  }
})

export const {addSelectedId, setDatas, onPending, setPageSize} = noiPhucVuSlice.actions

export default noiPhucVuSlice.reducer

export const onGetsAsync = () => (dispatch: Dispatch) => {
  dispatch(onPending(true))

  const db = getDatabase()

  const noiPhucVu = new NoiPhucVu()
  const pathDatas = noiPhucVu.getPathDatas()

  const dbRef = ref(db, pathDatas)
  const unsubscribe = onValueDB(dbRef, (snapshot) => {
    const datas = snapshot.val() || {}

    dispatch(setDatas(datas))
  })

  listenerDB.push(['noiPhucVu', unsubscribe])

  dispatch(onPending(false))
}

export function toString(data: INoiPhucVu) {
  return async () => {
    const fields = noiPhucVuConstants.getTableColumns()
    // @ts-ignore
    return fields.map(field => `${field.name}: ${data[field.id] || ''}`).join(', ')
  }
}

export const getTenNoiPhucVu = (data: any) => async (dispatch: any, getState: any) => {
  if (!data?.noiPhucVuId) return data
  const noiPhucVus = getState().noiPhucVu.noiPhucVus

  let noiPhucVuName: string
  if (data?.noiPhucVuId?.length && typeof data.noiPhucVuId !== 'string') {
    noiPhucVuName = data.noiPhucVuId.map((id: any) => {
      const noiPhucVuData = noiPhucVus?.[id] || {}

      return `${noiPhucVuData.noiPhucVuName || ''}`
    }).join(', ')
  } else {
    const noiPhucVuData = noiPhucVus?.[data.noiPhucVuId] || {}
    noiPhucVuName = `${noiPhucVuData.noiPhucVuName || ''}`
  }

  return  {...data, noiPhucVuName}
}
