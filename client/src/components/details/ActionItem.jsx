import { useState } from 'react'
import { Box, Button, styled } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 0 0 40px',
  },
}));
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1)

  const { id } = product;

  const addItemsToCart = () => {
      navigate('/cart');
  }

  return (
    <LeftContainer>
    <Box style={{padding: '30px 20px 15px', border: '1px solid #f0f0f0'}}>
        <Image src={product.url} alt={product.img} />
        <StyledButton variant='contained' style={{marginRight: 10}} 
        onClick={() =>{
          dispatch(addToCart(id, quantity))
          navigate('/cart');
        }}>
          Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{background: '#fb541b'}}>Buy Now</StyledButton>
    </Box>
    </LeftContainer>
  )
}

export default ActionItem;