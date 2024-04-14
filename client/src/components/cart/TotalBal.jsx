import { Typography, Box, Paper } from '@mui/material'
import { useState, useEffect } from 'react'

export default function TotalBal( { cartItems }) {

    const [price, setPrice] = useState(0);
    const [delCharge, setDelCharge] = useState(40);

    useEffect(() => {
        totalAmt();
    }, [cartItems])

    // let delCharge = 40;

    const totalAmt = () => {
        let total = 0;
        cartItems.map(item => {
            total = total + item.price.cost;
        })
        setPrice(total);
        
        //Free Delivery for items above 500
        if(price > 500) setDelCharge(0);
    }
  return (
    <Box component={Paper} p={2} elevation={2}>
      <Box mb={2}>
        <Typography variant="h6">
          Price Details
        </Typography>
      </Box>
      <Box mb={2}>
  <Typography variant="subtitle1" mb={2} sx={{ fontFamily: 'sans-serif' }}>
    Price ({cartItems?.length} items)
    <Box component="span" ml={2}>₹{price}</Box>
  </Typography>
  <Typography variant="subtitle1" mb={2} sx={{ fontFamily: 'sans-serif' }}>
    Delivery Charges ({cartItems?.length} items)
    <Box component="span" ml={2}>₹{delCharge}</Box>
  </Typography>
  <Typography variant="h5" color="primary" mb={2} sx={{ fontFamily: 'sans-serif' }}>
    Total Amount ({cartItems?.length} items)
    <Box component="span" ml={2}>₹{price + delCharge}</Box>
  </Typography>
  <Typography sx={{ color: 'green', fontWeight: 'lighter', mt: 2, fontFamily: 'sans-serif' }}>
    Free Delivery on orders above ₹ 500
  </Typography>
</Box>
    </Box>
  )
}