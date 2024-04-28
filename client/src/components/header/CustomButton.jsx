import { Badge, Box,Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import { Dialog, DialogTitle, DialogContent, DialogContentText, Link as Linker} from '@mui/material';

//component
import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";
import CartItem from "../cart/CartItem";


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > button': {
        marginLeft: '5px',
        marginRight: '40px !important' ,
        fontSize: '16px',
    },
    '& > p, & > div': {
        marginRight: '40px !important',
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

    const {account,setAccount,log,setLogger}=useContext(DataContext)

    const { cartItems } = useSelector(state => state.cart);

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
    setMenuOpen(true);
    };

    const handleClose = () => {
    setMenuOpen(false);
    };

    const openDialogForUser=()=>{
        setOpen(true);
        setLogger('user');
        console.log(log);
    }
    const openDialogForSeller=()=>{
        setLogger('seller');
        setOpen(true);
        
        console.log(log)
    }

    return (
        <Wrapper>
            {
                account ?<Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialogForUser()}>Login</LoginButton>
            }

            <Typography style={{marginTop:3,width:135,cursor: 'pointer'}} onClick={()=>openDialogForSeller() }>Become a Seller</Typography>

            {/* <Typography style={{marginTop:3, cursor: 'pointer'}} onClick={()=>handleMenu()} >More</Typography> */}

            <Typography style={{marginTop:3, cursor: 'pointer'}} onClick={handleMenu} >More</Typography>
        <Dialog open={menuOpen} onClose={handleClose}>
        <DialogTitle>Visit the Developers</DialogTitle>
        <DialogContent>
        <DialogContentText>
            <Linker href="https://github.com/Alankrit15"
             target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>
                Alankrit
                </Linker>
            </DialogContentText>
            <DialogContentText>
            <Linker href="https://github.com/Darth-InVader15"
             target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>
                Piyush
                </Linker>
            </DialogContentText>
        </DialogContent>
        </Dialog>

            <CartHandle>
                <Badge badgeContent = {cartItems.length} color="primary">
                <ShoppingCartIcon/>
                </Badge>
                <Typography>
                <Link to="/cart" style={{ textDecoration: 'none', color: "inherit" }}>Cart</Link>
                    </Typography>
            </CartHandle>
            <LoginDialog open={open} setOpen={setOpen}/>
            {/* passing open and setOpen which is the state varibale to the LoginDialog so that it opens only when the button is clicked */}

            
        </Wrapper>
    )
}

export default CustomButton;