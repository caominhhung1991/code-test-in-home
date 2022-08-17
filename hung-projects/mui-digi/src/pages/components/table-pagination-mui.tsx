import React from 'react';

import TablePagination from '@mui/material/TablePagination';
import {useDispatch, useSelector} from "react-redux";
import {setTableState} from "../table.reducer";

interface TablePaginationProps {

}

export function TablePaginationMUI(props: any) {
  const {tableId, ...rest} = props

  const dispatch = useDispatch()

  const {table, rows} = useSelector((state: any) => state.table)
  const {page, rowsPerPage} = table[tableId]

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setTableState({tableId, page: newPage, fieldId: 'page'}))
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10)
    dispatch(setTableState({tableId, rowsPerPage: newRowsPerPage, fieldId: 'rowsPerPage'}));
    dispatch(setTableState({tableId, page: 0, fieldId: 'page'}))
  };

  return (
    <TablePagination
      {...rest}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      variant="outlined"
    />
  );
}

export default TablePagination;
