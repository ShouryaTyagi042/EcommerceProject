import {Button, Typography, Box, styled } from '@mui/material'
import { addEllipsis } from '../../utils/common-utils'
import ButtonGroup from './ButtonGroup.jsx'
import { removeFromCart } from '../../redux/actions/cartActions.js'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios';

const URL = "http://localhost:5000/"

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background-color : #fff;
`
const LeftComponent = styled(Box)`
    margin: 20px;
    display:flex;
    flex-direction: column;
`

const SmallText = styled(Typography)`
    color:#878787;
    font-size: 14px;
    margin-top: 10px;
    color: #000;
`

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    background-color: #edd5d3;
`

export default function CartItem({ productId }) {

    console.log("testing", productId);
    const [id, setId] = useState();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
       setId(productId);
    
        const fetchProducts = async () => {
          const response = await axios.get(URL + `product/${productId}`);
          console.log(response);
          const dat = await response.data;
          setData(dat);
          console.log("this",dat);
        //   setCartItems(data);
          setIsLoading(false);
        }
    
        fetchProducts();
      }, []); 

    // console.log("From cartitemjsx " + item);
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
        console.log("remove item from cart", id)
    }

  return (
    isLoading ? <h1>Loading...</h1> :
    <Component>
        <LeftComponent>
            <img  
            style={{height: 140}}
            src={data.url}
            alt="product image">
            </img>
            <ButtonGroup />
        </LeftComponent>
        <Box style= {{ margin: 20}}>
            <Typography>
                {addEllipsis (data.title.longTitle)}
            </Typography>

            <SmallText>
                Sold by <b>{data.seller}</b>
            </SmallText>
            <Box style={{ padding: '10px', color: '#333' }}>
            <span style={{ fontSize: 18, color: '#007BFF'  }}><b>Price </b></span>
            <span style={{ fontSize: 20, color: '#878787' }}><b>₹{data.price.cost} </b></span>
            <span style={{ fontSize: 18, color: '#878787' }}><b><strike>{data.price.mrp} </strike></b></span>
            <span style={{ color: '#388E3C', fontWeight: 'bold' }}>{data.price.discount} Off</span>
            </Box>
            <Remove onClick={() =>{
                removeItemFromCart(data.id)
            }
            }>Remove</Remove>
        </Box>
        
    </Component>
  )
}
