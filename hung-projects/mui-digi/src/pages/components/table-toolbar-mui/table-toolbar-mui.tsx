import * as React from 'react';
import {alpha} from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useDispatch, useSelector} from 'react-redux'
import {setTableState} from "../../table.reducer";
import TableToolbarMuiEditDeleteButton from "./table-toolbar-mui-edit-delete-button";

interface EnhancedTableToolbarProps {
  tableId: string
}

export const TableToolbarMUI = (props: EnhancedTableToolbarProps) => {
  const {tableId} = props;

  const dispatch = useDispatch()

  const {table} = useSelector((state: any) => state.table)
  const {selected, dense} = table[tableId]


  function onDeleteSelected() {
    dispatch(setTableState({tableId, selected: [], fieldId: 'selected'}))
  }

  const numSelected = selected.length

  return (
    <Toolbar
      sx={{
        pl: {sm: 2},
        pr: {xs: 1, sm: 1},
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? <TableToolbarMuiEditDeleteButton onDelete={onDeleteSelected}/> : (
        <>
          <Tooltip title="Add">
            <IconButton><AddBoxIcon/></IconButton>
          </Tooltip>
        </>
      )}

      {numSelected > 0 ? (
        <Typography sx={{flex: '1 1 100%'}} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography id="tableTitle" sx={{flex: '1 1 100%'}} variant="h6" component="div">
          Table Actions
        </Typography>
      )}

      <Paper
        component="form" sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
      >
        <InputBase
          sx={{ml: 1, flex: 1}}
          placeholder="Search"
          inputProps={{'aria-label': 'search'}}
        />
        <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
          <SearchIcon/>
        </IconButton>
      </Paper>
    </Toolbar>
  );
};
