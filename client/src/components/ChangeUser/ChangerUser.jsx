import { Typography,Box, styled, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { BASE_URL } from '../../constants';
const URL=BASE_URL;



const handleOpen=()=>{
    setopen(true)
}




const Wrapper=styled(Box)`
padding:10px;
width:50vh;
height:28vh;
`

const RoleWrapper=styled(Box)`
display:flex;
align=right;
`
const ChangeRole=styled(Button)`
display: block;
  margin: auto;
width:118px;
padding:5px;
margin-top:15px;
font-size:11px;
font-weight:600;
`

const HeaderWrapper=styled(Box)`
display:flex;
justify-content:space-between;
align-items:center;
`

const ChangeUser=({
    firstname,
    lastname,
    email,
    role,
    userID,
    onClose,
    callFunc,
    open,
    setopen,
})=>{
    // const[open,setopen]=useState(opendialog)
    const[userRole,setuserRole]=useState(role)

    const handleOnChangeSelect=(event)=>{

        setuserRole(event.target.value)
    }
    const handleOnupdateClose=()=>{
        setopen(false)
    }

    const updateUserRole=async()=>{
        const fetchResponse=await axios.post(`${URL}/update-user`,
        {userID,
            role:userRole})
        console.log(fetchResponse)
        callFunc()
    }

    console.log(userRole)
    return(
        <Dialog  open={open}>
            <Wrapper>
                <HeaderWrapper>
                <Typography variant='h6' style={{fontWeight:'600',paddingTop:'1px',margin:'1px'}}>Change User Role</Typography>
                <Button onClick={()=>onClose()} style={{marginLeft:'auto'}}>
                <CloseIcon style={{width:'15px'}}/>
                </Button>
                
                </HeaderWrapper>
                <Box style={{display:'flex'}}>
                <Typography style={{padding:'5px',fontWeight:'550'}}>Firstname: {firstname}</Typography>
                <Typography style={{marginLeft:'20px',padding:'5px',fontWeight:'550'}}>Lastname: {lastname}</Typography>
                </Box>
                <Typography style={{padding:'5px',fontWeight:'550'}}>Email: {email}</Typography>
                <RoleWrapper>
                    <Typography style={{fontWeight:'550',padding:'5px'}}>Role:</Typography>
                        <FormControl fullWidth>
                        <InputLabel></InputLabel>
                        <Select style={{width:'125px',height:'40px',marginLeft:'auto'}}onChange={handleOnChangeSelect}
                        value={userRole}>
                            <MenuItem value='GENERAL'>GENERAL</MenuItem>
                            <MenuItem value='ADMIN'>ADMIN</MenuItem>
                        </Select>
                        </FormControl>
                </RoleWrapper>
                <ChangeRole variant='outlined' onClick={()=>{
                    updateUserRole(),handleOnupdateClose()}}>Change Role</ChangeRole>
            </Wrapper>
        </Dialog>
    )
}

export default ChangeUser