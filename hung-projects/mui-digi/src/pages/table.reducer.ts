import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {rows} from "./utils/create-data";

type IIndex = string | number

export interface ITableId {
  page?: number
  rowsPerPage?: number
  order?: string
  orderBy?: string
  dense?: boolean
  selected?: string[]
}

export interface TableState {
  rows: {
    [rowId: IIndex]: any
  }
  table: {
    [tableId: IIndex]: ITableId
  }
}

const initTableState: ITableId = {
  page: 0,
  rowsPerPage: 5,
  order: 'asc',
  orderBy: 'calories',
  dense: true,
  selected: []
}
const initialState: TableState = {
  rows: rows,
  table: {
    DIGITable: initTableState
  }
}

export enum fieldInputEnum {
  page = 'page',
  rowsPerPage = 'rowsPerPage',
  order = 'order',
  orderBy = 'orderBy',
  dense = 'dense',
  selected = 'selected',
}

interface IABC extends ITableId {
  tableId: IIndex
  fieldId: 'page' | 'rowsPerPage' | 'order' | 'orderBy' | 'dense' | 'selected'
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableState: (state, action: PayloadAction<IABC>) => {
      const {tableId, fieldId, page, rowsPerPage, order, orderBy, dense, selected} = action.payload
      switch (fieldId) {
        case fieldInputEnum.page: {
          state.table[tableId].page = page
          break
        }
        case fieldInputEnum.rowsPerPage: {
          state.table[tableId].rowsPerPage = rowsPerPage
          break
        }
        case fieldInputEnum.order: {
          state.table[tableId].order = order
          break
        }
        case fieldInputEnum.orderBy: {
          state.table[tableId].orderBy = orderBy
          break
        }
        case fieldInputEnum.dense: {
          state.table[tableId].dense = dense
          break
        }
        case fieldInputEnum.selected: {
          state.table[tableId].selected = selected
          break
        }
        default:
      }

    },
  },
})

export const {setTableState} = tableSlice.actions

export default tableSlice.reducer
