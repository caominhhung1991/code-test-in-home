import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TableRow, {TableRowProps} from '@mui/material/TableRow';
import TableCellMUI from "./table-cell-mui";
import {cellConfigs} from "../cell-configs";

interface TableRowMUIProps extends TableRowProps {
  row?: any
  labelId?: string
  isItemSelected?: boolean
  isHideSelect?: boolean
}

function TableRowMUI(props: TableRowMUIProps) {
  const {
    row,
    labelId,
    children,
    isItemSelected,
    isHideSelect,
    ...rest
  } = props

  function makeTableCellChildren(cellConfig: any, row: any) {
    return row?.[cellConfig?.id] || (cellConfig?.defaultProp || '')
  }

  function makeTableCell(cellConfig: any, row: any) {
    const {id, align, component, scope, padding} = cellConfig

    const cellProps = {
      key: id,
      ...align ? {align} : {},
      ...component ? {component} : {},
      ...scope ? {scope} : {},
      ...padding ? {padding} : {},
    }

    return <TableCellMUI {...cellProps}>
      {makeTableCellChildren(cellConfig, row)}
    </TableCellMUI>
  }

  return (
    <TableRow {...rest}>
      {
        row && <>
          {!isHideSelect && <TableCellMUI padding="checkbox">
            <Checkbox color="primary" checked={isItemSelected} inputProps={{'aria-labelledby': labelId}}/>
          </TableCellMUI>}
          {
            cellConfigs.map((cellConfig) => {
              return makeTableCell(cellConfig, row)
            })
          }
        </>
      }
      {children}
    </TableRow>
  );
}

export default TableRowMUI;
