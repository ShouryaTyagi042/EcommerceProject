import React from 'react'
import { Box, Button, styled } from '@mui/material'

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
  `
  const Image = styled('img')
  ({
      width: '90%',
      padding: '13px',
  })
  
  const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
  `


 const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
    <Box style={{padding: '30px 20px 15px', border: '1px solid #f0f0f0'}}>
        <Image src={product.url} alt={product.img} />
        <StyledButton variant='contained' style={{marginRight: 10}}>Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{background: '#fb541b'}}>Buy Now</StyledButton>
    </Box>
    </LeftContainer>
  )
}

export default ActionItem;