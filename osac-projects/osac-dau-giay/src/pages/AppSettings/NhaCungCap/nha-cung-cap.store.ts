import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {NhaCungCap as Instance, NhaCungCapState} from './NhaCungCap'
import {listenerDB, onValueDB} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  constantTabs.all,
  {label: 'Thêm nhà cung cấp', value: 'add'},
  constantTabs.taiExcel,
]

const initialState: NhaCungCapState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  nhaCungCaps: {},
  nhaCungCapId: '',
}

const nhaCungCapSlice = createSlice({
  name: 'nhaCungCap',
  initialState,
  reducers: {
    setDatas(state: NhaCungCapState, action) {
      state.nhaCungCaps = action.payload
    },
    onPending(state: NhaCungCapState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: NhaCungCapState, action) {
      state.nhaCungCapId = action.payload
    }
  }
})

export const {addSelectedId, setDatas, onPending} = nhaCungCapSlice.actions

export default nhaCungCapSlice.reducer

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

  listenerDB.push(['nhaCungCap', unsubscribe])

  dispatch(onPending(false))
}
