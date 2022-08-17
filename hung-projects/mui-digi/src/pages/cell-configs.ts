import {Data} from "./interface/data.interface";
import {TableCellProps} from '@mui/material/TableCell'

interface CellConfig extends TableCellProps {
  id: keyof Data;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

export const cellConfigs: readonly CellConfig[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
    component: 'th',
    scope: 'row',
    padding: 'none',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
    align: 'right',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
    align: 'right',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
    align: 'right',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
    align: 'right',
  },
];
