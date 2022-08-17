import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {TaiKhoanNganHang as Instance, TaiKhoanNganHangState} from './TaiKhoanNganHang'
import {listenerDB, onValueDB} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  constantTabs.all,
  {label: 'Thêm TK ngân hàng', value: 'add'}
]

const initialState: TaiKhoanNganHangState = {
  loading: false,
  selectedTab: tabsData[0].value,
  pageSize: Number(localStorage.getItem('pageSize-TKNH') || '25'),
  tabsData,
  taiKhoanNganHangs: {},
  taiKhoanNganHangId: ''
}

const taiKhoanNganHangSlice = createSlice({
  name: 'taiKhoanNganHang',
  initialState,
  reducers: {
    setDatas(state: TaiKhoanNganHangState, action) {
      state.taiKhoanNganHangs = action.payload
    },
    setPageSize(state: TaiKhoanNganHangState, action) {
      localStorage.setItem('pageSize-TKNH', `${action.payload}`)
      state.pageSize = action.payload
    },
    onPending(state: TaiKhoanNganHangState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: TaiKhoanNganHangState, action) {
      state.taiKhoanNganHangId = action.payload
    }
  }
})

export const {addSelectedId, setDatas, onPending, setPageSize} = taiKhoanNganHangSlice.actions

export default taiKhoanNganHangSlice.reducer

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

  listenerDB.push(['tai-khoan-ngan-hang', unsubscribe])

  dispatch(onPending(false))
}

export const getTenTaiKhoanNganHang = (data: any) => async (dispatch: any, getState: any) => {
  if (!data?.taiKhoanNganHangId) return data
  const taiKhoanNganHangs = getState().taiKhoanNganHang.taiKhoanNganHangs

  let tenTaiKhoanNganHang = ''
  if (data?.taiKhoanNganHangId?.length && typeof data.taiKhoanNganHangId !== 'string') {
    tenTaiKhoanNganHang = data.taiKhoanNganHangId.map((id: any) => {
      const taiKhoanNganHangData = taiKhoanNganHangs?.[id] || {}

      return `${taiKhoanNganHangData.maTaiKhoan || ''} - ${taiKhoanNganHangData.tenTaiKhoan} - ${taiKhoanNganHangData.soTaiKhoan} - ${taiKhoanNganHangData.nganHang} - ${taiKhoanNganHangData.chiNhanh || ''}`
    }).join(', ')
  } else {
    const taiKhoanNganHangData = taiKhoanNganHangs?.[data.taiKhoanNganHangId] || {}
    tenTaiKhoanNganHang = `${taiKhoanNganHangData.maTaiKhoan || ''} - ${taiKhoanNganHangData.tenTaiKhoan} - ${taiKhoanNganHangData.soTaiKhoan} - ${taiKhoanNganHangData.nganHang} - ${taiKhoanNganHangData.chiNhanh || ''}`
  }

  return {...data, tenTaiKhoanNganHang}
}

