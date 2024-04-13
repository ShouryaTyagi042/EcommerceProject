import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productAction'
import { Box,styled,Grid, Typography } from "@mui/material"

import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`
const Container = styled(Grid)
`
  background: #ffffff;
  display: flex;
`
const RightContainer = styled(Grid)`
  margir-top: 50px;
`
export default function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } =useSelector(state => state.getProductDetails);

  useEffect(() => {
    if(product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch,id, product, loading])

  console.log(product);

  return (
    <Component>
      {!loading && product && Object.keys(product).length ? (
        <Container container style={{paddingTop: '50px'}}>
          <Grid item lg={4} md = {4} sm={8} xs={12}> 
            {/* <img src={product.imageUrl} alt={product.name} /> */}
            <ActionItem product= {product} />
          </Grid> 

          <RightContainer item lg={8} md={8} sm={8} xs={12} style={{ paddingLeft: '17px' }}> 
            
            <ProductDetail product={product} />
            
          </RightContainer>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </Component>
  )
}
