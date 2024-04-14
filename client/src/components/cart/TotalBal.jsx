import { Typography, Box } from '@mui/material'
import React from 'react'

export default function TotalBal( { cartItems }) {
  return (
    <Box>
      <Box>
        <Box>
        <Typography>
            Price Details
        </Typography>
        </Box>
        <Box>
            <Typography>Price ({cartItems?.length} item)
                <Box component = "span">100</Box>
                </Typography>

                <Typography>Delivery Charges ({cartItems?.length} item)
                <Box component = "span">100</Box>
                </Typography>

                <Typography>Total Amount ({cartItems?.length} item)
                <Box component = "span">100</Box>
                </Typography>

                {/* <Typography></Typography> */}
        </Box>
        </Box> 
    </Box>
  )
}
