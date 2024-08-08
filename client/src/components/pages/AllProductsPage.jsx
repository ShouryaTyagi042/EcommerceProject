import { Box, Typography, styled,Button} from "@mui/material"
import { useEffect, useState } from "react"
import UploadProducts from "../UploadProduct/UploadProducts"
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper} from "@mui/material";
import moment from 'moment'
import { BASE_URL } from "../../constants";
const URL=BASE_URL;


const ProductHeader=styled(Box)`
width:150vh;
background:white;
padding:2px 4px;
display:flex;
align-item:center;
justify-content:space-between;
height:45px;
`

const Upload=styled(Button)`
font-size:10px;
height:30px;
width:138px;
margin-top:7.5px;
border-radius:7px;
`
const ModifiedTable=styled(Table)`
width:150vh;

`


const AllProductsPage=()=>{
    const[products,setproducts] =useState([])
    const[open,setopen]=useState(false)

    const fetchProducts=async()=>{
        const fetchData=await axios.get(`${URL}/all-products`)
        if(fetchData.data.success)
        {
            setproducts(fetchData.data.data)
        }
        console.log(products)
    }
    useEffect(()=>
        {fetchProducts()
        },[])
    return(
        <>
        <ProductHeader>
            <Typography variant="h6">All Products</Typography>
            {/* <Upload onClick={()=>setopen(true)} variant="contained">Upload products</Upload> */}
        </ProductHeader>
        <UploadProducts 
        open={open}
        setopen={setopen}/>
        <Box>
            <TableContainer component={Paper}>
      <ModifiedTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{fontWeight:'550'}}>Sr.</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>Tagline</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>caterogy</TableCell>
            <TableCell align="right" style={{fontWeight:'550'}}>seller</TableCell>
            <TableCell align="right"style={{fontWeight:'550'}}>Actual Price</TableCell>
            {/* <TableCell align="right"style={{fontWeight:'550'}}>Discount</TableCell> */}
            <TableCell align="right"style={{fontWeight:'550'}}>Selling price</TableCell>
            <TableCell align="right"style={{fontWeight:'550'}}>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product,index) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                {index+1}
              </TableCell>
              <TableCell align="right">{product.title.longTitle}</TableCell>
              <TableCell align="right">{product.title.shortTitle}</TableCell>
              <TableCell align="right">{product.seller}</TableCell>
              <TableCell align="right">{product.price.cost}0</TableCell>
              {/* <TableCell align="right">{product.price.discount}</TableCell> */}

              <TableCell align="right">{product.price.mrp}</TableCell>
              <TableCell align="right">{moment(product.createdAt).format('LL')}</TableCell>

            </TableRow>
          ))}
        </TableBody>
        </ModifiedTable>
        </TableContainer>
        
        </Box>
        </>
    )
}

export default AllProductsPage