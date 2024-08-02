import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import './styles/SellerProducts.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../constants';
const URL=BASE_URL;

const SellerProducts = () => {
  const { sellerDetail } = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const sellerJSON=window.localStorage.getItem('loggedSeller');
  const seller=JSON.parse(sellerJSON)
  const mail=seller.email
  console.log(mail)
  const id=seller._id
//   const products = sellerDetail.products;

  console.log(mail)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URL + `/products/${mail}`);
        console.log(response.data)
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="title">Here are all your products</h1>
  <div className="container">
    {!products || products.length === 0 ? (
      <p className='emptylist'>There is nothing to show here, start adding some products</p>
    ) : (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Listed Price</TableCell>
              <TableCell align="right">Remaining Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {product.title.shortTitle}
                </TableCell>
                <TableCell align="right">Rs. {product.price.mrp}</TableCell>
                <TableCell align="right">{product.remainingQuantity}</TableCell>
                <TableCell align="left">{product.quantity}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </div>
    </div>
  );
};

export default SellerProducts;