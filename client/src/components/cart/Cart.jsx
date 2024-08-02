import { Typography, Grid, Box,Button, styled } from '@mui/material';
import React from 'react'
import { useState, useContext, useEffect } from "react"
import { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../constants';

const URL = BASE_URL
//components
import CartItem from './CartItem';
import TotalBal from './TotalBal';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)`
    padding: 30px 120px !important;
`
const Header = styled(Box)`
    padding: 15px 24px;
    background-color : #fff;
    font: 24px;
    
`

const ButtonWrapper = styled(Button)`
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #ff4738;
    color : #fff
`

export default function Cart() {

    const {account, setAccount, userDetail, setuserDetail} = useContext(DataContext);
    const [isLoading, setIsLoading] = useState(true);
    // const { cartItems } = useSelector(state => state.cart);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      const user = JSON.parse(loggedUserJSON)
  
      if (user) {
        console.log("this is in the cart page :-" + user.email);
        setuserDetail(user)
        setAccount(user.firstname)
      }
  
      const fetchCartItems = async () => {
        const response = await axios.get(URL + `/get-item/${user.email}`);
        const data = await response.data;
        console.log("Items in users cart are",data.products);
        setCartItems(data);
        setIsLoading(true);
      }
  
      fetchCartItems();
    }, [userDetail]);      
    // console.log(cartItems.products.length);/
  return (
    // isLoading ? <h1>Loading...</h1> :
    <>
    <div>
     {cartItems && cartItems.products && cartItems.products.length > 0 ? 
        <Container container mr={2}>
            <Grid item lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography>
                        My Cart ({cartItems.products.length})
                    </Typography>
                </Header>
            {
            cartItems.products.map(item => {
                console.log("the items", item);
                return <CartItem productId={item.productId} />;
            })
            }
                <Box>
                    <ButtonWrapper>
                        Place Order
                    </ButtonWrapper>
                </Box>
            </Grid>
            
            <Grid item pl={2} lg={3} md={3} sm={12} xs={12}>
                {/* <TotalBal productId={item.productId}/> */}
                <TotalBal items = {cartItems.products}/>

            </Grid>
        
        </Container>
        // : <div>There is Nothing to show here, yet</div>
        : <EmptyCart /> 
     }
     </div>
    </>
  )
}
