import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {CanThayTheChiTietState} from './CanThayTheChiTiet'
import moment from 'moment'

const initialState: CanThayTheChiTietState = {
  canThayTheChiTiets: {},
  canThayTheChiTietDirty: false
}

const canThayTheChiTietSlice = createSlice({
  name: 'canThayTheChiTiet',
  initialState,
  reducers: {
    setCanThayTheChiTiets(state: CanThayTheChiTietState, action) {
      state.canThayTheChiTiets = action.payload
    },
    setCanThayTheChiTiet(state: CanThayTheChiTietState, action) {
      const {convertedData, nameOfId} = action.payload

      const initId = nameOfId ? convertedData?.[nameOfId] : moment().valueOf().toString()

      const id = convertedData.id ? convertedData.id : initId
      const canThayTheChiTietData = state.canThayTheChiTiets?.[id] || {}

      const newCanThayTheChiTiets = {
        ...state.canThayTheChiTiets,
        [id]: {...canThayTheChiTietData, ...convertedData, id}
      }

      state.canThayTheChiTiets = newCanThayTheChiTiets
      state.canThayTheChiTietDirty = true
    },
    deleteCanThayTheChiTiet(state: CanThayTheChiTietState, action) {
      const canThayTheId = action.payload?.id
      const newCanThayTheChiTiets = state.canThayTheChiTiets

      delete newCanThayTheChiTiets[canThayTheId]
      state.canThayTheChiTiets = newCanThayTheChiTiets
    },
    deleteCanThayTheChiTiets(state: CanThayTheChiTietState, action) {
      const {canThayTheChiTietDataArray} = action.payload
      const newCanThayTheChiTiets = Object.values(state?.canThayTheChiTiets || {}).reduce((acc: any, data: any) => {

        const isDeleted = (canThayTheChiTietDataArray || [])
          .some((canThayTheChiTietData: any) => canThayTheChiTietData.id === data.id)
        if (isDeleted) return acc

        return {...acc, [data.id]: data}
      }, {})

      state.canThayTheChiTiets = newCanThayTheChiTiets
    },
    setCanThayTheChiTietDirty(state: CanThayTheChiTietState, action) {
      state.canThayTheChiTietDirty = action.payload
    }
  }
})

export const {
  setCanThayTheChiTiets,
  setCanThayTheChiTiet,
  deleteCanThayTheChiTiet,
  deleteCanThayTheChiTiets,
  setCanThayTheChiTietDirty
} = canThayTheChiTietSlice.actions

export default canThayTheChiTietSlice.reducer

export function getCanThayTheChiTiets(data: any) {
  return (dispatch: Dispatch<any>, getState: any) => {
    const state = getState()
    const {canThayTheChiTiets} = state.canThayTheChiTiet

    return {...data, canThayTheChiTiets}
  }
}
