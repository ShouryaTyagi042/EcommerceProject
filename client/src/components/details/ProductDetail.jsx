import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { LocalOffer as OfferIcon } from '@mui/icons-material'

const SmallText = styled('Box')
{
    fontSize: 12;
}

export default function ProductDetail({ product }) {
  return (
    <>
      <Typography variant='h4'>{product.title.longTitle}</Typography>
            <Typography variant="body1">
                Product Description goes here
            </Typography>

            <Typography>
              <Box>
                <span>Marked Price ₹</span>
                <span><strike>{product.price.mrp}</strike></span>
              </Box>
              
              <Box>
                <span style={{ fontSize: 28}}>Special Price </span>
                <span style={{ fontSize: 30, color: '#878787'}}><bold>₹{product.price.cost}</bold>  </span>
                <span style={{ color: '#388E3C'}}>{product.price.discount}</span>
              </Box>
            </Typography>

            <Typography>Available Offers </Typography>
                <SmallText>
                    {/* <span style={{ color: '#388E3C'}}>{product.tagline}</span> */}
                    <Typography><OfferIcon />Some offers will come here</Typography>
                    <Typography><OfferIcon />Some more offers</Typography>
                    <Typography><OfferIcon />Signup on our page to get extra 10% off on your first purchase</Typography>
                    <Typography><OfferIcon />No Cost EMI also available</Typography>
                </SmallText>
            {/* </Typography> */}
    </>
  )
}
