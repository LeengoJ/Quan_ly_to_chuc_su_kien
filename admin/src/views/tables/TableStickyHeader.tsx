// ** React Imports
import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Button } from '@mui/material'
import { callGetAllEvent } from 'src/types/apis.axios'

interface Column {
  id: 'name' | 'address' | 'quantity' | 'rating' | 'density' | 'id'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Tên', minWidth: 170 },
  { id: 'address', label: 'Địa chỉ', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Số sự kiện đã tổ chức',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'rating',
    label: 'Rating',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  }
]

interface Data {
  id: string
  name: string
  address: string
  rating: number
  density: number
  quantity: number
}

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [rows, setData] = useState([])
  useEffect(() => {
    callGetAllEvent().then(res => {
      if (res.data) {
        setData(res.data.data)
        console.log(rows)
      }
    })
  }, [])
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //   <TableContainer sx={{ maxHeight: 440 }}>
    //     <Table stickyHeader aria-label='sticky table'>
    //       <TableHead>
    //         <TableRow>
    //           {columns.map(column => (
    //             <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
    //               {column.label}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
    //           return (
    //             <TableRow hover role='checkbox' tabIndex={-1} key={row.address}>
    //               {columns.map(column => {
    //                 const value = row[column.id]

    //                 return (
    //                   <TableCell key={column.id} align={column.align}>
    //                     {column.format && typeof value === 'number' ? column.format(value) : value}
    //                   </TableCell>
    //                 )
    //               })}
    //               <Button>View</Button>
    //             </TableRow>
    //           )
    //         })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   <TablePagination
    //     rowsPerPageOptions={[10, 25, 100]}
    //     component='div'
    //     count={rows.length}
    //     rowsPerPage={rowsPerPage}
    //     page={page}
    //     onPageChange={handleChangePage}
    //     onRowsPerPageChange={handleChangeRowsPerPage}
    //   />
    // </Paper>
    <></>
  )
}

export default TableStickyHeader