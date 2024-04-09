import { Typography,Box,Menu,MenuItem,styled } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const ModifiedMenu=styled(Menu)`
margin-top:5px;
`
const Logout=styled(Typography)`
    font-size:14px;
    margin-right:10px;
    cursor:pointer;
`

// const Displayname=styled(Typography)`
// margin-left:20px
// `

const Profile =({account,setAccount}) =>{

    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    const logoutuser=()=>{
        setAccount('');
    }

    const [open,setOpen] =useState(false)
    return (
    <>
       <Box onClick={handleClick}><Typography style={{marginTop:3}}>{account}</Typography></Box>
       <ModifiedMenu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
            
            <MenuItem onClick={()=>{handleClose();logoutuser();}}>
                <Logout>Logout</Logout>
                <PowerSettingsNewIcon color="primary" fontSize="small" />
                </MenuItem>
      </ModifiedMenu>
    </>
    )
}


export default Profile;