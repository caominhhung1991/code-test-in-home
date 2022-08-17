import {message} from 'antd'
import {createSlice} from '@reduxjs/toolkit'
import {exportDataArraysToExcel, getDataExcel} from '@caominhhung1991/components'

type TableState = {
  selectedRowKeys: {[key: string]: string[]}
  selectedRows: {[key: string]: any[]}
}

const initialState: TableState = {
  selectedRowKeys: {},
  selectedRows: {}
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    onChangeSelectedRowKeys(state: TableState, action) {
      const {tableId, selectedRowKeys, selectedRows} = action.payload
      state.selectedRowKeys[tableId] = selectedRowKeys
      state.selectedRows[tableId] = selectedRows
    },
    downloadExcel(state: TableState, action) {
      if (!window.confirm('Xác nhận tải excel?')) return

      const {selectedRows} = state
      const {tableId, constants, fileSheet = 'fileSheet', fileName = 'fileName'} = action.payload
      let dataSource = selectedRows[tableId] || []

      if (!dataSource.length) {
        message.warning('Chưa chọn dữ liệu!')
        return
      }

      const excelFields = constants.getExcelFields?.() || []
      const headers = excelFields.map((field: any) => (field?.name || field?.id))

      dataSource = dataSource.reduce((acc, data) => {
        const excelData = getDataExcel(excelFields, data)

        return [...acc, excelData]
      }, [headers])

      exportDataArraysToExcel([[fileSheet, dataSource]], fileName)
    },
    initTableState(state: TableState) {
      state.selectedRowKeys = {}
      state.selectedRows = {}
    }
  }
})

export const {onChangeSelectedRowKeys, downloadExcel, initTableState} = tableSlice.actions

export default tableSlice.reducer

