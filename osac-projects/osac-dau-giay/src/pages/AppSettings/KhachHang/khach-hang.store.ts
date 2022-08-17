import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {PlusOutlined} from '@ant-design/icons'
import {KhachHang, KhachHangState, IKhachHang} from './KhachHang'
import {khachHangConstants} from './khach-hang.constants'
import {listenerDB, onValueDB} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  {label: 'Thêm mới', value: 'add', Icon: PlusOutlined},
  constantTabs.taiExcel,
]

const initialState: KhachHangState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  pageSize: Number(localStorage.getItem('pageSize-khachHang') || '25'),
  khachHangs: {},
  khachHangData: null,
}

const khachHangSlice = createSlice({
  name: 'khachHang',
  initialState,
  reducers: {
    setDatas(state: KhachHangState, action) {
      state.khachHangs = action.payload
    },
    setPageSize(state: KhachHangState, action) {
      localStorage.setItem('pageSize-khachHang', `${action.payload}`)
      state.pageSize = action.payload
    },
    onPending(state: KhachHangState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: KhachHangState, action) {
      state.khachHangId = action.payload
      state.khachHangData = state.khachHangs?.[action.payload] || null
    }
  }
})

export const {addSelectedId, setDatas, onPending, setPageSize} = khachHangSlice.actions

export default khachHangSlice.reducer

export const onGetsAsync = () => (dispatch: Dispatch) => {
  dispatch(onPending(true))

  const db = getDatabase()

  const khachHang = new KhachHang()
  const pathDatas = khachHang.getPathDatas()

  const dbRef = ref(db, pathDatas)
  const unsubscribe = onValueDB(dbRef, (snapshot) => {
    const datas = snapshot.val() || {}

    dispatch(setDatas(datas))
  })

  listenerDB.push(['khachHang', unsubscribe])

  dispatch(onPending(false))
}

export function toString(data: IKhachHang) {
  return async () => {
    const fields = khachHangConstants.getTableColumns()
    // @ts-ignore
    return fields.map(field => `${field.name}: ${data[field.id] || ''}`).join(', ')
  }
}

export const getTenKhachHang = (data: any) => async (dispatch: any, getState: any) => {
  if (!data?.khachHangId) return data
  const khachHangs = getState().khachHang.khachHangs

  let khachHangName = ''
  if (data?.khachHangId?.length && typeof data.khachHangId !== 'string') {
    khachHangName = data.khachHangId.map((id: any) => {
      const khachHangData = khachHangs?.[id] || {}

      return `${khachHangData.khachHangName || ''}`
    }).join(', ')
  } else {
    const khachHangData = khachHangs?.[data.khachHangId] || {}
    khachHangName = `${khachHangData.khachHangName || ''}`
  }

  return  {...data, khachHangName}
}
