import axios from "axios"
import { useEffect, useState } from "react"
import { Box, Button, styled } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper} from "@mui/material";
import moment from 'moment'
import EditIcon from '@mui/icons-material/Edit';
import ChangeUser from "../ChangeUser/ChangerUser";
const URL="http://localhost:5000";



  const ModifiedRow=styled(TableHead)`
  `
const ModifiedTable=styled(Table)`
width:150vh;

`
const AllUserpage=()=>{
    const[users,setuser] =useState([])
    const[openupdateuser,setopenupdateuser]=useState(false)
    const[open,setopen]=useState(false)
    const[updateUserDetail,setUpdateUseDetail]=useState({
        firstname:"",
        lastname:"",
        email:"",
        role:"",
        _id:""
    })
    const fetchUsers=async()=>{
        const fetchData=await axios.get(`${URL}/all-users`)
        if(fetchData.data.success)
        {
            setuser(fetchData.data.data)
        }
        console.log(users)
    }
    useEffect(()=>
        {fetchUsers()
        },[])

    return (
        <Box>
            <TableContainer component={Paper}>
      <ModifiedTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{fontWeight:'550'}}>Sr.</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>First Name</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>Last Name</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>Email</TableCell>
            <TableCell align="right"style={{fontWeight:'550'}}>Created At</TableCell>
            <TableCell align="right"style={{fontWeight:'550'}}>Role</TableCell>
            <TableCell align="right"style={{fontWeight:'550'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,index) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                {index+1}
              </TableCell>
              <TableCell align="right">{user.firstname}</TableCell>
              <TableCell align="right">{user.lastname}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{moment(user.createdAt).format('LL')}</TableCell>
              <TableCell align="right">{user.role}</TableCell>
              <TableCell align="right">
                <Button 
                onClick={()=>{
                    setUpdateUseDetail(user)
                    setopenupdateuser(true)
                    setopen(true);
                }}
                >
                    <EditIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </ModifiedTable>
        </TableContainer>
        {
            openupdateuser &&(
                <ChangeUser onClose={()=>setopenupdateuser(false)}
                firstname={updateUserDetail.firstname}
                lastname={updateUserDetail.lastname}
                email={updateUserDetail.email}
                role={updateUserDetail.role} 
                userID={updateUserDetail._id}
                callFunc={fetchUsers}
                open={open}
                setopen={setopen}
                />
            )
        }
        
        </Box>
    )
}

export default AllUserpage