import { Box,Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";
//component
import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > button': {
        marginLeft: '5px',
        marginRight: '40px',
        fontSize: '16px',
    },
    '& > p, & > div': {
        marginRight: '40px',
        fontSize: '14px',
    },
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const CartHandle=styled(Box)(({ theme }) =>
({
    display:'flex',
    // '&>div':{
    //     marginLeft:5,
    //     fontSize:14
    // },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const LoginButton=styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radius:5px;
width:80px;
font-weight:650;
`

const CustomButton=()=>{
    const [open,setOpen]=useState(false)

    const {account,setAccount}=useContext(DataContext)
    const openDialog=()=>{
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ?<Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }

            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3 }}>More</Typography>
            <CartHandle>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </CartHandle>
            <LoginDialog open={open} setOpen={setOpen}/>
            {/* passing open and setOpen which is the state varibale to the LoginDialog so that it opens only when the button is clicked */}
        </Wrapper>
    )
}

export default CustomButton;