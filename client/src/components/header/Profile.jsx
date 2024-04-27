import { Typography,Box,Menu,MenuItem,styled } from "@mui/material"
import { useContext, useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const ModifiedMenu=styled(Menu)`
margin-top:5px;
cursor:pointer;
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
    const{userdetail, log}=useContext(DataContext)
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
            {log === "user" && userdetail.userdetail.role=="ADMIN"?
            <MenuItem>
            
           <Link style={{textDecoration:'none' ,color:'inherit'}} to="admin-panel">
            Admin Panel
            </Link>
            </MenuItem>
            :
            <MenuItem style={{width:'0px',height:'0px'}}/>
            }
      </ModifiedMenu>
    </>
    )
}


export default Profile;