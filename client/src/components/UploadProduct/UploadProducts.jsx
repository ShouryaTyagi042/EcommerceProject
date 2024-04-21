import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const Wrapper=styled(Box)`
width:60vh;
height:70vh;
`

const HeaderWrapper=styled(Box)`
display:flex;
justify-content:space-between;
align-item:center;
`
const Input=styled(Box)`
display:flex;
margin:auto;
justify-content:space-between;
align-content:center;
`


const UploadProducts=({
    open,
    setopen,
})=>{
    const[data,setdata]=useState({
        tagline:"",
        quantity:"",
        price:{},
        title:{},
        url:"",
        warrenty:"",
    })
    return(
        <Dialog  onClose={()=>setopen(false)} open={open}>
            <Wrapper>
            <HeaderWrapper>
                <Typography variant="h5">
                   Upload products
                </Typography>
                <Box onClick={()=>setopen(false)}>
                <CloseIcon  style={{marginLeft:'auto',padding:'3px'}}/>
                </Box>           
            </HeaderWrapper>
            <Box>
                <Input>
                <Typography>Enter the Tagline:</Typography>
                <TextField id="filled-basic" label="Enter The Tagline" variant="standard"/>
                </Input>
                
            </Box>
            </Wrapper>
        </Dialog>
    )
}


export default UploadProducts