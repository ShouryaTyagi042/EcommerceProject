import { Box, Button, Typography, styled } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import AllUser from "./AllUserpage";
import AllUserpage from "./AllUserpage";
import AllSellerPage from "./AllSellerPage";
import AllProductsPage from "./AllProductsPage";




const Wrapper=styled(Box)`
min-height:100vh;
display:flex
`

const SideBar=styled(Box)`
background:white;
height:full;
width:37vh;
`
const Profile=styled(AccountCircleIcon)`
height:80px;
width:80px;
`
const ProfileBox=styled(Box)`
display:flex;
flex-direction:column;
margin-left:10vh;
`

const Main=styled(Box)`

`
const Name=styled(Typography)`
font-weight:600;
margin-left:10px
`
const ModifiedButton=styled(Button)`
color:inherit;
`

const AdminPage=()=>{


    const{log,userdetail}=useContext(DataContext)
    const[alldisplay,setDisplay]=useState("")
    const navigate=useNavigate()
    const handleuser=()=>{
        setDisplay('user')
    }

    const handleproducts=()=>{
        setDisplay('product')
    }
    const handleseller=()=>{
        setDisplay('seller')
    }
    const handleHome=()=>{
        setDisplay('')
    }
    return(
        <Wrapper>
        <SideBar>
            <ProfileBox>
                <Profile/>
                <Name>{userdetail.userdetail.firstname}</Name>
                <Typography>Role:{userdetail.userdetail.role}</Typography>
            </ProfileBox>
                <ModifiedButton onClick={()=>handleHome()}style={{display:'block'}}>Home</ModifiedButton>
                <ModifiedButton onClick={()=>handleuser()}style={{display:'block'}}>ALL Users</ModifiedButton>
                <ModifiedButton  onClick={()=>handleseller()} style={{display:'block'}}>All Seller</ModifiedButton>
                <ModifiedButton  onClick={()=>handleproducts()} style={{display:'block'}}>All Products</ModifiedButton>
        </SideBar>
        <Main>
            {
                (alldisplay=='user') ?
                <Box>
                    <AllUserpage/>
                </Box>
                : alldisplay=='seller'?
                <Box>
                    <AllSellerPage/>
                </Box>
                : alldisplay=='product'?
                <Box>
                    <AllProductsPage/>
                </Box>
                :
                <Box>
                    Here we will display different things
                </Box>
            }
        </Main>
        </Wrapper>
    )
}

export default AdminPage