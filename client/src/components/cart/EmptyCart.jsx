import React from 'react'
import { Typography, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function EmptyCart() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="55vh" textAlign="center">
      <Typography variant="h4" mt={2} style={{ fontFamily: 'monospace' }}>
        There is nothing to show here yet
      </Typography>
      <Typography variant="h5" style={{ fontFamily: 'monospace' }}>
        Add items to it now
      </Typography>
      <ShoppingCartIcon style={{ fontSize: 50 }} />
    </Box>
  )
}