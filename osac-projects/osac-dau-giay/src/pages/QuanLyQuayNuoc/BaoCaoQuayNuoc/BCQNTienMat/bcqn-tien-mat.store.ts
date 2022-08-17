import {Moment} from 'moment'
import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {constantTabs, numberRender, TabItem} from '@caominhhung1991/components'
import {DownloadOutlined} from '@ant-design/icons/'
import {BCQNTienMat, BCQNTienMatState, IBCQNTienMat} from './BCQNTienMat'
import {bcqnTienMatConstants} from './bcqn-tien-mat.constants'
import {getData, listenerDB, onValueDB, updateData} from 'services/firebase'
import {getDatabase, ref, query, equalTo, orderByChild, get} from 'firebase/database'
import {DatePickerHandle} from 'hooks/date-picker/useDatePicker'
import {thongBaoDaLoi} from 'services'
import {BcqnTienMatCost} from './bcqn-tien-mat.cost'

const tabsData: TabItem[] = [
  constantTabs.moRong,
  {label: 'Cập nhật dữ liệu ngày', value: 'capNhatDuLieu', Icon: DownloadOutlined},
  constantTabs.taiExcel
]

const initialState: BCQNTienMatState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  pageSize: Number(localStorage.getItem('pageSize-bcqnTienMat') || '25'),
  bcqnTienMats: {},
  bcqnTienMatData: null,
  tableConstants: bcqnTienMatConstants,
  noiPhucVuFields: [],
}

const bcqnTienMatSlice = createSlice({
  name: 'bcqnTienMat',
  initialState,
  reducers: {
    setDatas(state: BCQNTienMatState, action) {
      state.bcqnTienMats = action.payload
    },
    setNoiPhucVuFields(state: BCQNTienMatState, action) {
      state.noiPhucVuFields = action.payload
    },
    setTableConstants(state: BCQNTienMatState, action) {
      state.tableConstants = action.payload
    },
    setPageSize(state: BCQNTienMatState, action) {
      localStorage.setItem('pageSize-bcqnTienMat', `${action.payload}`)
      state.pageSize = action.payload
    },
    onPending(state: BCQNTienMatState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: BCQNTienMatState, action) {
      state.bcqnTienMatId = action.payload
      state.bcqnTienMatData = state.bcqnTienMats?.[action.payload] || null
    }
  }
})

export const {addSelectedId, setDatas, onPending, setPageSize, setTableConstants, setNoiPhucVuFields} = bcqnTienMatSlice.actions

export default bcqnTienMatSlice.reducer

export const onGetsAsync = () => (dispatch: Dispatch) => {
  dispatch(onPending(true))

  const db = getDatabase()

  const bcqnTienMat = new BCQNTienMat()
  const pathDatas = bcqnTienMat.getPathDatas()

  const dbRef = ref(db, pathDatas)
  const unsubscribe = onValueDB(dbRef, (snapshot) => {
    const datas = snapshot.val() || {}

    dispatch(setDatas(datas))
  })

  listenerDB.push(['bcqnTienMat', unsubscribe])

  dispatch(onPending(false))
}

export function onUpdateById(bcqnTienMatId: any) {
  return async (dispatch: Dispatch, getState: any) => {
    if (!bcqnTienMatId) return console.log('error, missing id')

    const {bcqnTienMats} = getState().bcqnTienMat
    const bcqnTienMat = new BCQNTienMat()

    const pathDatas = [...bcqnTienMat.pathDatas, bcqnTienMatId]
    const data = await getData(pathDatas)

    const newDatas = {...bcqnTienMats, [bcqnTienMatId]: data}

    dispatch(setDatas(newDatas))
  }
}

export function toString(data: IBCQNTienMat) {
  return async () => {
    const fields = bcqnTienMatConstants.getTableColumns()
    // @ts-ignore
    return fields.map(field => `${field.name}: ${data[field.id] || ''}`).join(', ')
  }
}

export const getTenBCQNTienMat = (data: any) => async (dispatch: any, getState: any) => {
  if (!data?.bcqnTienMatId) return data
  const bcqnTienMats = getState().bcqnTienMat.bcqnTienMats

  let tenBCQNTienMat: string
  if (data?.bcqnTienMatId?.length && typeof data.bcqnTienMatId !== 'string') {
    tenBCQNTienMat = data.bcqnTienMatId.map((id: any) => {
      const bcqnTienMatData = bcqnTienMats?.[id] || {}

      return `${bcqnTienMatData.tenBCQNTienMat || ''}`
    }).join(', ')
  } else {
    const bcqnTienMatData = bcqnTienMats?.[data.bcqnTienMatId] || {}
    tenBCQNTienMat = `${bcqnTienMatData.tenBCQNTienMat || ''}`
  }

  return {...data, tenBCQNTienMat}
}

export function getTableConstants() {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState()

    const {khachHangId} = state.khachHang
    const {noiPhucVus} = state.noiPhucVu

    if (khachHangId && noiPhucVus) {
      const inputFields = bcqnTienMatConstants.getTableColumns()

      const noiPhucVuFields = Object.values(noiPhucVus)
        .filter((noiPhucVuData: any) => {
          return noiPhucVuData.khachHangId === khachHangId && noiPhucVuData.active && noiPhucVuData.bcqnTienMat
        })
        .sort((a: any, b: any) => ((a.soThuTu || 0) - (b.soThuTu || 0)))
        .map((noiPhucVuData: any) => {
          return {
            id: noiPhucVuData.id,
            name: noiPhucVuData.noiPhucVuName,
            width: 80,
            className: 'text-small font-weight-bold',
            align: 'right',
            render: BcqnTienMatCost,
          }
        })

      dispatch(setNoiPhucVuFields(noiPhucVuFields))

      const tableConstants = {
        ...bcqnTienMatConstants,
        getTableColumns: function() {
          return [
            ...inputFields,
            ...noiPhucVuFields,
            bcqnTienMatConstants.tongCa,
            bcqnTienMatConstants.tongNgay,
            bcqnTienMatConstants.thuBoSung,
            bcqnTienMatConstants.ghiChu,
          ]
        }
      }

      return dispatch(setTableConstants(tableConstants))
    }

    return dispatch(setTableConstants(bcqnTienMatConstants))
  }
}

export function onCapNhatDuLieuOsacBinhDuong(selectedTime: Moment, dateTimePicker: DatePickerHandle) {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const state = getState()
    const {khachHangId, khachHangs} = state.khachHang

    if (!khachHangId) return thongBaoDaLoi('Chưa chọn khách hàng!')
    const khachHangData = khachHangs?.[khachHangId]

    dispatch(onPending(true))
    const ngay = selectedTime.format('L')
    const yearId = selectedTime.format('YYYY')
    const yearMonthId = selectedTime.format('YYMM')
    const dayId = selectedTime.format('YYMMDD')
    const {dayOfYear} = dateTimePicker.yearAndDayOfYear

    const bcqnTienMat = new BCQNTienMat()

    const path: any = ['dieuHanh/khoNuoc/baoCao/khoNoiBo/baoCaoKiemTon', yearId, dayOfYear]

    const datas = await getData(path)

    function getDatas(caLamViecId: string) {
      return Object.entries(datas).reduce((acc, [noiPhucVuId, data]: any) => {
        const caData = data?.[caLamViecId]
        const caId = dayId + caData.id
        const tienMat = caData.tienMat || 0

        const tongCa = Math.round(acc.tongCa + tienMat)

        const updateData = {
          id: caId,
          ngay,
          yearMonthId,
          dayId,
          [noiPhucVuId]: tienMat,
          tongCa,
          caLamViecId: caData.id,
          caLamViecName: caData.shiftName,
          khachHangId: khachHangId,
          khachHangName: khachHangData.khachHangName,
        }

        return {...acc, ...updateData}
      }, {tongCa: 0})
    }

    let caSangDatas: any = getDatas('caSang')
    let caToiDatas: any = getDatas('caToi')

    const tongNgay: any = (caSangDatas?.tongCa || 0) + (caToiDatas?.tongCa || 0)

    caSangDatas = {...caSangDatas, tongNgay}
    caToiDatas = {...caToiDatas, tongNgay}

    const caSangPathDatas = [...bcqnTienMat.pathDatas, caSangDatas.id]
    await updateData(caSangPathDatas, caSangDatas)

    const caToiPathDatas = [...bcqnTienMat.pathDatas, caToiDatas.id]
    await updateData(caToiPathDatas, caToiDatas)

    dispatch(onPending(false))

    dispatch(onHienThiDuLieuBCQNTienMatMonth(selectedTime, khachHangId))
  }
}

export function onHienThiDuLieuBCQNTienMatMonth(selectedTime?: Moment, khachHangId?: string) {
  return async (dispatch: Dispatch) => {
    if (!khachHangId || !selectedTime) return
    dispatch(onPending(true))

    const yearMonthId = selectedTime.format('YYMM')
    const bcqnTienMat = new BCQNTienMat()

    const pathDatas = bcqnTienMat.getPathDatas()
    const db = getDatabase()
    const dbRef = ref(db, pathDatas)
    let queryRef = query(dbRef, orderByChild('yearMonthId'), equalTo(yearMonthId))

    const datasRef = await get(queryRef)
    let datas = datasRef.val() || {}
    datas = Object.values(datas).reduce((acc: any, data: any) => {
      if (data.khachHangId === khachHangId) return {...acc, [data.id]: data}

      return acc
    }, {})

    dispatch(setDatas(datas))
    dispatch(onPending(false))
  }
}

export function onUpdateBCQNTienMat(bcqnTienMatData: IBCQNTienMat) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(onPending(true))
    const bcqnTienMat = new BCQNTienMat()
    const pathDatas = [...bcqnTienMat.pathDatas, bcqnTienMatData.id]
    await updateData(pathDatas, bcqnTienMatData)

    await dispatch(onUpdateById(bcqnTienMatData.id))

    dispatch(onPending(false))
  }
}
