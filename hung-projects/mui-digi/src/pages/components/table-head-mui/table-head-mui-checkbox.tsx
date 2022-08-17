import React from 'react';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import {setTableState} from "../../table.reducer";
import {useDispatch, useSelector} from 'react-redux'

export function TableHeadMuiCheckbox(props: any) {
  const {tableId, isHideSelect, isSelectOnce} = props

  const dispatch = useDispatch()

  const {rows, table} = useSelector((state: any) => state.table)
  const {selected} = table[tableId]

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && !isSelectOnce) {
      const newSelected = rows.map((n: any) => n.name);
      dispatch(setTableState({tableId, selected: newSelected, fieldId: 'selected'}))

      return;
    }

    dispatch(setTableState({tableId, selected: [], fieldId: 'selected'}))
  };

  const rowCount = rows.length
  const numSelected = selected.length

  if (isHideSelect) return null

  return <TableCell padding="checkbox">
    <Checkbox
      color="primary"
      indeterminate={numSelected > 0 && numSelected < rowCount}
      checked={rowCount > 0 && numSelected === rowCount}
      onChange={onSelectAllClick}
      inputProps={{'aria-label': 'select all desserts'}}
    />
  </TableCell>
}
