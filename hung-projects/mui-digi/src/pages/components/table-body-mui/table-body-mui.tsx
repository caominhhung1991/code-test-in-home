import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import {getComparator} from "../../utils/get-comparator";
import {stableSort} from "../../utils/stable-sort";
import TableCellMUI from "../table-cell-mui";
import TableRowMUI from "../table-row-mui";
import {setTableState} from "../../table.reducer";
import {useDispatch, useSelector} from 'react-redux'

interface TableBodyMUIProps {
  tableId: string
  isSelectOnce?: boolean,
  isHideSelect?: boolean
}

function TableBodyMUI(props: TableBodyMUIProps) {
  const {isHideSelect, tableId, isSelectOnce} = props

  const dispatch = useDispatch()

  const {table, rows} = useSelector((state: any) => state.table)
  const {page, rowsPerPage, selected, order, orderBy, dense} = table[tableId]

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (isSelectOnce) {
      dispatch(setTableState({tableId, selected: [name], fieldId: 'selected'}))
      return;
    }

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    dispatch(setTableState({tableId, selected: newSelected, fieldId: 'selected'}))
  };

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: any, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRowMUI
              hover
              onClick={(event: any) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name + Math.random()}
              selected={isItemSelected}
              labelId={labelId}
              row={row}
              isItemSelected={isItemSelected}
              isHideSelect={isHideSelect}
            />
          );
        })}

      {emptyRows > 0 && <TableRowMUI style={{height: (dense ? 33 : 53) * emptyRows}}>
        <TableCellMUI colSpan={6}/>
      </TableRowMUI>}
    </TableBody>
  );
}

export default TableBodyMUI;
