import { Typography, Box, Paper } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function TotalBal( { items }) {

    const [price, setPrice] = useState(0);
    const [delCharge, setDelCharge] = useState(40);

    useEffect(() => {
        totalAmt();
    }, [items])

    //incase we were to receive all the product ids one by one, we'll use this
    // useEffect(() => {
    //   setId(productId);
   
    //    const fetchProducts = async () => {
    //      const response = await axios.get(URL + `product/${productId}`);
    //      console.log(response);
    //      const dat = await response.data;
    //      setData(dat);
    //      console.log("this",dat);
       //   setCartItems(data);
    //      setIsLoading(false);
    //    }
   
    //    fetchProducts();
    //  }, []);

    // let delCharge = 40;

    const totalAmt = () => {
        let total = 0;
        items.map(item => {
            total = total + item.price;
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
    Price ({items?.length} items)
    <Box component="span" ml={2}>₹{price}</Box>
  </Typography>
  <Typography variant="subtitle1" mb={2} sx={{ fontFamily: 'sans-serif' }}>
    Delivery Charges ({items?.length} items)
    <Box component="span" ml={2}>₹{price > 5000 ? 0 : 40}</Box>
  </Typography>
  <Typography variant="h5" color="primary" mb={2} sx={{ fontFamily: 'sans-serif' }}>
    Total Amount ({items?.length} items)
    <Box component="span" ml={2}>₹{price + delCharge}</Box>
  </Typography>
  <Typography sx={{ color: 'green', fontWeight: 'lighter', mt: 2, fontFamily: 'sans-serif' }}>
    Free Delivery on orders above ₹ 5000
  </Typography>
</Box>
    </Box>
  )
}