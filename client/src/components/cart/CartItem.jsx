import {Button, Typography, Box, styled } from '@mui/material'
import { addEllipsis } from '../../utils/common-utils'
import ButtonGroup from './ButtonGroup.jsx'

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

export default function CartItem({item}) {
  return (
    <Component>
        <LeftComponent>
            <img  
            style={{height: 140}}
            src={item.url}
            alt="product image">
            </img>
            <ButtonGroup />
        </LeftComponent>
        <Box style= {{ margin: 20}}>
            <Typography>
                {addEllipsis (item.title.longTitle)}
            </Typography>

            <SmallText>
                Sold by <b>{item.seller}</b>
            </SmallText>
            <Box style={{ padding: '10px', color: '#333' }}>
            <span style={{ fontSize: 18, color: '#007BFF'  }}><b>Price </b></span>
            <span style={{ fontSize: 20, color: '#878787' }}><b>₹{item.price.cost} </b></span>
            <span style={{ fontSize: 18, color: '#878787' }}><b><strike>{item.price.mrp} </strike></b></span>
            <span style={{ color: '#388E3C', fontWeight: 'bold' }}>{item.price.discount} Off</span>
            </Box>
            <Remove >Remove</Remove>
        </Box>
        
    </Component>
  )
}
