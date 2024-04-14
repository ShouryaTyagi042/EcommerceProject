import { Typography, Grid, Box,Button, styled } from '@mui/material';
import React from 'react'

import { useSelector } from 'react-redux';

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

    const { cartItems } = useSelector(state => state.cart);

  return (
    <>
     {cartItems.length > 0 ? 
        <Container container mr={2}>
            <Grid item lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography>
                        My Cart ({cartItems.length})
                    </Typography>
                </Header>
                {
                    cartItems.map(item => (
                        <CartItem item={item} />
                    ))
                }
                <Box>
                    <ButtonWrapper>
                        Place Order
                    </ButtonWrapper>
                </Box>
            </Grid>
            
            <Grid item pl={2} lg={3} md={3} sm={12} xs={12}>
                <TotalBal cartItems={cartItems}/>
            </Grid>
        
        </Container>
        // : <div>There is Nothing to show here, yet</div>
        : <EmptyCart /> 
     }
    </>
  )
}
