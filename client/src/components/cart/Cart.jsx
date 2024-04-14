import { Typography, Grid, Box, styled } from '@mui/material';
import React from 'react'

import { useSelector } from 'react-redux';

//components
import CartItem from './CartItem';
import TotalBal from './TotalBal';

const Container = styled(Grid)`
    padding: 30px 120px !important;
`
const Header = styled(Box)`
    padding: 15px 24px;
    
`

export default function Cart() {

    const { cartItems } = useSelector(state => state.cart);

  return (
    <>
     {cartItems.length > 0 ? 
        <Container container>
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

            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalBal />
            </Grid>
        
        </Container>
        : <div>There is Nothing to show here, yet</div> 
     }
    </>
  )
}
