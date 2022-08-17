import {createSlice} from '@reduxjs/toolkit'

interface IData {
  [key: string]: any
}

interface IOpenModal {
  [key: string]: any
}

export interface FormState {
  edit: boolean
  type?: any
  modalId: string
  data: IData | null | undefined
  datas: any
  modal: IOpenModal
  download: any
}

const initialState: FormState = {
  edit: false,
  modalId: '',
  data: {},
  datas: {},
  modal: {},
  download: {},
}

const formSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    onChange(state: FormState, {payload}) {
      const {name, value} = payload
      if (state.data?.[name]) state.data[name] = value
    },
    openModal(state: FormState, action) {
      const {modalId, data, edit, type} = action.payload

      if (modalId) {
        const modalData = state.modal[modalId] || {}
        state.modal[modalId] = {...modalData, open: true}
        state.datas[modalId] = data
        state.data = data
        state.edit = edit
        state.type = type
      }
    },
    closeModal(state: FormState, action) {
      const {modalId} = action.payload
      const modalData = state.modal[modalId] || {}
      state.modal[modalId] = {...modalData, open: false}

      state.data = null
      state.datas[modalId] = null
      state.edit = false
    },
  }
})

export const {openModal, closeModal} = formSlice.actions

export default formSlice.reducer
