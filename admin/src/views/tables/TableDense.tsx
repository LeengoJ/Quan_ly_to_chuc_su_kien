// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useEffect, useState } from 'react'
import { callGetAllEvent } from 'src/types/apis.axios'

// const createData = class {
//   createdBy!: string
//   departing!: Date
//   endDate!: Date
//   eventType!: string
//   nameEvent!: string
//   where!: string
//   arivingOn!: Date
//   flexible!: boolean

//   guestRooms!: boolean
//   maxGuest!: number
//   meetingRoomIs!: boolean
//   maxMeetingRoom!: number
//   otherOrganization!: boolean
//   status!: boolean
//   outdoorMeetingSpace!: boolean
//   isApproved!: boolean
//   public constructor(
//     createdBy: string,
//     departing: Date,
//     endDate: Date,
//     eventType: string,
//     nameEvent: string,
//     where: string,
//     arivingOn: Date,
//     flexible: boolean,

//     guestRooms: boolean,
//     maxGuest: number,
//     meetingRoomIs: boolean,
//     maxMeetingRoom: number,
//     otherOrganization: boolean,
//     status: boolean,
//     outdoorMeetingSpace: boolean,
//     isApproved: boolean
//   ) {
//     this.createdBy = createdBy
//     this.departing = departing
//     this.endDate = endDate
//     this.eventType = eventType
//     this.nameEvent = nameEvent
//     this.where = where
//     this.arivingOn = arivingOn
//     this.flexible = flexible
//     this.guestRooms = guestRooms
//     this.maxGuest = maxGuest
//     this.meetingRoomIs = meetingRoomIs
//     this.maxMeetingRoom = maxMeetingRoom
//     this.otherOrganization = otherOrganization
//     this.status = status
//     this.outdoorMeetingSpace = outdoorMeetingSpace
//     this.isApproved = isApproved
//   }
// }

const TableDense = () => {
  const [rows, setData] = useState([])
  useEffect(() => {
    callGetAllEvent().then(res => {
      if (res.data) {
        setData(res.data.data)
        console.log(rows)
      }
    })
  }, [])
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 2080 }} size='small' aria-label='a dense table'>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>id</TableCell>
    //         <TableCell>Người tạo sự kiện</TableCell>
    //         <TableCell>Tên Sự kiện</TableCell>
    //         <TableCell align='right'>Ngày bắt đầu</TableCell>
    //         <TableCell align='right'>Ngày kết thúc</TableCell>
    //         <TableCell align='right'>Kiểu sự kiện</TableCell>
    //         <TableCell align='right'>Dịa chỉ tổ chức sự kiện</TableCell>
    //         <TableCell align='right'>Sự kiện này có gấp không</TableCell>
    //         <TableCell align='right'>Có cần phong khách không</TableCell>
    //         <TableCell align='right'>Khách mời tối đa cho sự kiện này</TableCell>
    //         <TableCell align='right'>Có cần phòng họp không</TableCell>
    //         <TableCell align='right'>Bên thứ 3</TableCell>
    //         <TableCell align='right'>Có cần không gian họp ngoài trờ hay không</TableCell>
    //         <TableCell align='right'>Danh sach khach moi</TableCell>
    //         <TableCell align='right'>Tình trạng sự kiện đã phê duyệt hay chưa</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map(row => (
    //         <TableRow key={row.name} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
    //           <TableCell component='th' scope='row'>
    //             {row.createdBy}
    //           </TableCell>
    //           <TableCell align='right'>{row.departing}</TableCell>
    //           <TableCell align='right'>{row.endDate}</TableCell>
    //           <TableCell align='right'>{row.eventType}</TableCell>
    //           <TableCell align='right'>{row.nameEvent}</TableCell>
    //           <TableCell align='right'>{row.where}</TableCell>
    //           <TableCell align='right'>{row.arivingOn}</TableCell>
    //           <TableCell align='right'>{row.flexible}</TableCell>
    //           <TableCell align='right'>{row.guestRooms}</TableCell>
    //           <TableCell align='right'>{row.maxGuest}</TableCell>
    //           <TableCell align='right'>{row.meetingRoomIs}</TableCell>
    //           <TableCell align='right'>{row.maxMeetingRoom}</TableCell>
    //           <TableCell align='right'>{row.otherOrganization}</TableCell>
    //           <TableCell align='right'>{row.status}</TableCell>
    //           <TableCell align='right'>{row.outdoorMeetingSpace}</TableCell>
    //           <TableCell align='right'>{row.isApproved}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <></>
  )
}

export default TableDense
