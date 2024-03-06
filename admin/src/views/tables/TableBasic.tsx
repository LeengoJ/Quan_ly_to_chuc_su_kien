// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { callGetAllUsers, getRoleById } from 'src/types/apis.axios'
import { useEffect, useState } from 'react'
import { Role } from 'src/role/role.schema'

// const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
//   return { name, calories, fat, carbs, protein }
// }

// const createData = class {
//   id!: string
//   name!: string
//   email!: string
//   PhoneNumber!: string
//   role!: string
//   deletedBy!: string
//   createBy!: string

//   public constructor(
//     id: string,
//     name: string,
//     email: string,
//     PhoneNumber: string,
//     role: string,
//     deletedBy: string,
//     createBy: string
//   ) {
//     this.id = id
//     this.name = name
//     this.email = email
//     this.PhoneNumber = PhoneNumber
//     this.role = role
//     this.deletedBy = deletedBy
//     this.createBy = createBy
//   }
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9)
// ]
// let rows = [createData('')]

const TableBasic = (props: any) => {
  const [rows1, setData] = useState([])
  const onload = async () => {
    let res = await callGetAllUsers()
    let data = res.data.data
    console.log(data)
  }
  useEffect(() => {
    callGetAllUsers().then(res => {
      if (res.data) {
        console.log(res.data.data.Role)
        res.data.data.role = getRoleById(res.data.data.role)
        setData(res.data.data)
      }
    })
  }, [])
  return (
    <TableContainer component={Paper}>
      <button onClick={onload}>Load</button>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>PhoneNumber (g)</TableCell>
            <TableCell align='right'>role (g)</TableCell>
            <TableCell align='right'>deletedBy (g)</TableCell>
            <TableCell align='right'>createBy (g)</TableCell>
            <TableCell align='right'>createAt (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map(row => (
            <TableRow>
              <TableCell component='th' scope='row'>
                {row._id}
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.email}</TableCell>
              <TableCell align='right'>{row.phoneNumber}</TableCell>
              <TableCell align='right'>{row.role}</TableCell>
              {/*<TableCell align='right'>{row.deletedBy}</TableCell>
              <TableCell align='right'>{row.createBy}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
