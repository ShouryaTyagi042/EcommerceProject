import React from 'react'
import { Box, Table, TableCell, TableRow, TableBody, Typography, styled } from '@mui/material'
import { LocalOffer as OfferIcon } from '@mui/icons-material'

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>


const SmallText = styled('Box')
`
    fontSize: 12;
    & > p {
        font-size: 14px;
        margin-top: 5px;
    }
`

const StyledBadge = styled(OfferIcon)`
    color: #388E3C;
    margin-right: 5px;
`

export default function ProductDetail({ product }) {
    const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
   <Typography variant='h4' style={{ color: '#3f51b5', fontWeight: 'bold' }}>
  {product.title.longTitle}
</Typography>
<Typography variant="body1" style={{ color: '#616161', marginTop: '20px' }}>
  Product Description goes here
</Typography>

<Typography style={{ fontFamily: 'Roboto' }}>
  <Box>
    <Box style={{ padding: '10px', color: '#333' }}>
      <span>Marked Price ₹</span>
      <span><strike>{product.price.mrp}</strike></span>
    </Box>
  </Box>
</Typography>
  
  <Box style={{ padding: '10px', color: '#333' }}>
    <span style={{ fontSize: 28, color: '#007BFF' }}>Special Price </span>
    <span style={{ fontSize: 30, color: '#878787' }}><b>₹{product.price.cost} </b></span>
    <span style={{ color: '#388E3C', fontWeight: 'bold' }}>{product.price.discount} Off</span>
  </Box>

  <Typography style={{ padding: '10px', color: '#333' }}>Available Offers</Typography>
  <SmallText style={{ padding: '10px', color: '#333' }}>
    <Typography>
      <StyledBadge />Some offers will come here
    </Typography>
    <Typography>
      <StyledBadge />Some more offers
    </Typography>
    <Typography>
      <StyledBadge />Signup on our page to get extra 10% off on your first purchase
    </Typography>
    <Typography>
      <StyledBadge />No Cost EMI also available
    </Typography>
  </SmallText>

<Table>
    <TableBody>
        <TableRow>
            <TableCell style={{ color: '#8585ad', fontFamily: 'Monospace' }}>Delivery</TableCell>
            <TableCell><b>Delivery by {date.toDateString()}</b> </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ color: '#8585ad', fontFamily: 'Monospace' }}>Delivery Charges</TableCell>
            <TableCell>
                {product.price.cost < 500 
                    ? `₹ 40. Buy for ₹${500 - product.price.cost} more to get free delivery`
                    : <><strike>₹ 40 </strike> <b>Free delivery for your order</b></>}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ color: '#8585ad', fontFamily: 'Monospace' }}>Warranty</TableCell>
            <TableCell>
                {product.warranty === "Not mentioned" && product.price.cost > 1300 
                    ? <b>1 Year warranty</b>
                    : <b>{ product.warranty }</b>}
            </TableCell>
        </TableRow>
        <TableRow>
      <TableCell style={{ color: '#8585ad', fontFamily: 'Monospace' }}>Seller</TableCell>
      <TableCell><b>{product.seller}</b></TableCell>
    </TableRow>
    </TableBody>
</Table>
            {/* </Typography> */}
    </>
  )
}
