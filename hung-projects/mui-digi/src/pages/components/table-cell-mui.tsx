import React from 'react';
import TableCell from '@mui/material/TableCell';

function TableCellMUI(props: any) {
  const {children} = props

  return (
    <TableCell
      {...props}
    >{children}</TableCell>
  );
}

export default TableCellMUI;
