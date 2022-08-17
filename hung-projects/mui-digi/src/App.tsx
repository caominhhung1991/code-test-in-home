import './App.css'
import TableMui from "./pages/table-mui";
import Grid from '@mui/material/Grid'

function App() {
  return (
    <div className="">
      <Grid container spacing={2}>
        <Grid item md={7}>
          <TableMui
            tableId={'DIGITable'}
            isSelectOnce={true}
            // isHideSelect={true}
          />
        </Grid>

        <Grid item md={5}>
          <TableMui
            tableId={'DIGITable'}
            isSelectOnce={true}
            // isHideSelect={true}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
