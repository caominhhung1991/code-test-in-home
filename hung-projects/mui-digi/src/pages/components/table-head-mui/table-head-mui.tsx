import * as React from 'react';
import {Data} from "../../interface/data.interface";
import {cellConfigs} from "../../cell-configs";
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import {visuallyHidden} from '@mui/utils';
import {useDispatch, useSelector} from 'react-redux'
import {setTableState} from "../../table.reducer";
import {TableHeadMuiCheckbox} from "./table-head-mui-checkbox";

export interface EnhancedTableProps {
  tableId: string;
  isSelectOnce?: boolean;
  isHideSelect?: boolean
}

export function TableHeadMUI(props: EnhancedTableProps) {
  const {tableId, isSelectOnce, isHideSelect} = props;

  const dispatch = useDispatch()

  const {table} = useSelector((state: any) => state.table)
  const {order, orderBy} = table[tableId]

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(setTableState({tableId, order: isAsc ? 'desc' : 'asc', fieldId: 'order'}))
    dispatch(setTableState({tableId, orderBy: property, fieldId: 'orderBy'}))
  };

  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableHeadMuiCheckbox
          tableId={tableId}
          isHideSelect={isHideSelect}
          isSelectOnce={isSelectOnce}
        />

        {cellConfigs.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.padding === 'none' ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}

              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
