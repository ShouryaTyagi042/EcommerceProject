import { Box, Typography, styled } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper} from "@mui/material";
import moment from 'moment'

const URL="http://localhost:5000";

const ModifiedRow=styled(TableHead)`
`
const ModifiedTable=styled(Table)`
width:150vh;

`

const AllSellerPage=()=>{
    const[sellers,setseller] =useState([])
    const fetchSeller=async()=>{
        const fetchData=await axios.get(`${URL}/all-seller`)
        if(fetchData.data.success)
        {
            setseller(fetchData.data.data)
        }
        console.log(sellers)
    }
    useEffect(()=>
        {fetchSeller()
        },[])
    return(
        <Box>
            <TableContainer component={Paper}>
      <ModifiedTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{fontWeight:'550'}}>Sr.</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>First Name</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>Last Name</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>Email</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>Company Name</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>GST No.</TableCell>
            <TableCell align="right"style={{fontWeight:'550'}}>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers.map((seller,index) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                {index+1}
              </TableCell>
              <TableCell align="right">{seller.firstname}</TableCell>
              <TableCell align="right">{seller.lastname}</TableCell>
              <TableCell align="right">{seller.email}</TableCell>
              <TableCell align="right">{seller.Companyname}</TableCell>
              <TableCell align="right">{seller.GST_number}</TableCell>
              <TableCell align="right">{moment(seller.createdAt).format('LL')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </ModifiedTable>
        </TableContainer>
        </Box>
    )
}


export default AllSellerPage;