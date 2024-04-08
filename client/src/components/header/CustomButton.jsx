import { Box,Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
&>button{
    margin-left:5px;
    margin-right:40px;
    font-size:16px
}
&>p,&>div{
    margin-right:40px;
    font-size:14px
}
align-item:center
`

const CartHandle=styled(Box)`
display:flex;
`
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
    return (
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>

            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3 }}>More</Typography>
            <CartHandle>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </CartHandle>
        </Wrapper>
    )
}

export default CustomButton;