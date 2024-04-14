import React from 'react'
import { Typography, Box } from '@mui/material'

export default function EmptyCart() {
  return (
    <Box textAlign="center">
      {/* <img src="https://your-image-url.com/empty-cart.png" alt="Empty Cart" style={{ width: '200px', height: '200px' }} /> */}
      <Typography variant="h6" mt={2}>
        There is nothing to show here yet
      </Typography>
      <Typography variant="subtitle1">
        Add items to it now
      </Typography>
    </Box>
  )
}