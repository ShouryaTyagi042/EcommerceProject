import { Typography,Box,Menu,MenuItem,styled } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link,useNavigate} from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import axios from 'axios'
import { SevenK } from "@mui/icons-material";
const URL="http://localhost:5000";


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
  const navigate=useNavigate()
  const[user,setUser]=useState('')
  const[info,setinfo]=useState({})
  useEffect(() => {
    
    const logged = window.localStorage.getItem('logger')
    const logger=JSON.parse(logged)
    console.log(logger)
    if(logger=='user')
    { const loggedUserJSON = window.localStorage.getItem('loggedUser')
      if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      console.log(user)
      setUser(logger)
      setAccount(user.firstname)
      setinfo(user)
    }
    }
      else
      {
        const sellerJSON=window.localStorage.getItem('loggedSeller')
        console.log(sellerJSON)
        if(sellerJSON)
        {
          const seller=JSON.parse(sellerJSON)
          console.log(seller.firstname)
          setUser(logger)
          setAccount(seller.firstname)
          setinfo(seller)
        }
      }
    }, [])
  console.log(name)
    const{userdetail, log}=useContext(DataContext)
    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    const logoutuser=()=>{
        setAccount('');
        window.localStorage.clear()
        navigate('/')
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
            {user === "user" && info.role=="ADMIN"?
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