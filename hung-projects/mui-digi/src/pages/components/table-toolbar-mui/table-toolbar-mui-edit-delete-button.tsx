import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';

interface TableToolbarMuiDeleteButtonProps {
  onDelete?(event: any): any

  onEdit?(event: any): any
}

function TableToolbarMuiEditDeleteButton(props: TableToolbarMuiDeleteButtonProps) {
  const {onDelete, onEdit} = props

  function onDeleteHandle(e: any) {
    onDelete?.(e)
  }

  function onEditHandle(e: any) {
    onEdit?.(e)
  }

  return (
    <>
      <Tooltip title="Edit">
        <IconButton
          onClick={onEditHandle}
        ><EditIcon/></IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton onClick={onDeleteHandle}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Download">
        <IconButton onClick={onDeleteHandle}>
          <VerticalAlignBottomOutlinedIcon/>
        </IconButton>
      </Tooltip>
    </>

  );
}

export default TableToolbarMuiEditDeleteButton;
