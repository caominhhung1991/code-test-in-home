import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {TableHeadMUI} from "./components/table-head-mui/table-head-mui";
import {TablePaginationMUI} from "./components/table-pagination-mui";
import TableBodyMUI from "./components/table-body-mui/table-body-mui";
import {TableToolbarMUI} from "./components/table-toolbar-mui/table-toolbar-mui";
import {useSelector, useDispatch} from 'react-redux'
import {setTableState} from "./table.reducer";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface TableMUIProps {
  tableId: string
  isSelectOnce?: boolean
  isHideSelect?: boolean
}

export default function TableMUI(props: TableMUIProps) {
  const {isHideSelect, tableId, isSelectOnce} = props

  const dispatch = useDispatch()

  const {table} = useSelector((state: any) => state.table)
  const {dense} = table[tableId]

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTableState({tableId, dense: event.target.checked, fieldId: 'dense'}))
  };

  return (
    <Box sx={{width: '100%'}}>
      <Paper sx={{width: '100%', mb: 2}}>
        <TableToolbarMUI tableId={tableId}/>

        <TableContainer>
          <Table sx={{minWidth: 750}} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <TableHeadMUI
              tableId={tableId}
              isSelectOnce={isSelectOnce}
              isHideSelect={isHideSelect}
            />

            <TableBodyMUI
              tableId={tableId}
              isSelectOnce={isSelectOnce}
              isHideSelect={isHideSelect}
            />
          </Table>
        </TableContainer>

        <TablePaginationMUI tableId={tableId}/>
      </Paper>

      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense}/>}
        label="Small"
      />
    </Box>
  );
}
