import { useState, useEffect, useContext } from 'react'
import { Box, Button, styled } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DataContext } from '../../context/DataProvider';
import axios from 'axios';
import { addToCart } from '../../redux/actions/cartActions';
import { BASE_URL } from '../../constants';

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
  
  const {account, setAccount, userDetail, setuserDetail} = useContext(DataContext);

  const [quantity, setQuantity] = useState(1)
  const [mail, setMail] = useState('');
  const { id } = product;

  const addItemsToCart = () => {
      navigate('/cart');
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUserJSON)

    if (user) {
      console.log("this is getting boring :-" + user.email);
      setuserDetail(user);
      setAccount(user.firstname);
      setMail(user.email);
    }
  }, [userDetail]);  

  return (
    <LeftContainer>
    <Box style={{padding: '30px 20px 15px', border: '1px solid #f0f0f0'}}>
        <Image src={product.url} alt={product.img} />
        <StyledButton variant='contained' style={{marginRight: 10}} 
        onClick={async () =>{
          // dispatch(addToCart(id, quantity))
          try {
            console.log("Trying to add items for this user " + mail);
            const response = await axios.post(`${BASE_URL}/add-to-cart/${mail}/${id}`, {
              // email: userDetail.email,
              // productName: product.name,/
            });
        
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        
          navigate('/cart');
        }}>
          Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{background: '#fb541b'}} onClick={() => window.confirm('Paytm gateway not available')}> Buy Now</StyledButton>
    </Box>
    </LeftContainer>
  )
}

export default ActionItem;