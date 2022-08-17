import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: any = JSON.parse(localStorage.getItem('hide-columns') || '{}' as any)

const hideColumnsSlice = createSlice({
  name: 'hideColumns',
  initialState,
  reducers: {
    toggleColumn(state: any, action: PayloadAction<any>) {
      const {tableId, columnId} = action.payload

      const hideColumns = state?.[tableId] || {}
      const hideColumn = hideColumns?.[columnId]

      const newHideColumns = {...hideColumns, [columnId]: !hideColumn}
      const newState = {...state, [tableId]: newHideColumns}

      localStorage.setItem('hide-columns', JSON.stringify(newState))
      state[tableId] = newHideColumns
    },
  }
})

export const {toggleColumn} = hideColumnsSlice.actions

export default hideColumnsSlice.reducer
