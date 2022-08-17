import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {DonViTinh as Instance, DonViTinhState} from './DonViTinh'
import {listenerDB, onValueDB} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'

const tabsData: TabItem[] = [
  constantTabs.all,
  {label: 'Thêm đơn vị tính', value: 'add'},
  constantTabs.taiExcel,
]

const initialState: DonViTinhState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  donViTinhs: {},
  donViTinhId: '',
}

const donViTinhSlice = createSlice({
  name: 'donViTinh',
  initialState,
  reducers: {
    setDatas(state: DonViTinhState, action) {
      state.donViTinhs = action.payload
    },
    onPending(state: DonViTinhState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: DonViTinhState, action) {
      state.donViTinhId = action.payload
    }
  }
})

export const {addSelectedId, setDatas, onPending} = donViTinhSlice.actions

export default donViTinhSlice.reducer

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

  listenerDB.push(['donViTinh', unsubscribe])

  dispatch(onPending(false))
}
