import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import './styles/SellerProducts.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
const URL="http://localhost:5000";

const SellerProducts = () => {
  const { sellerDetail } = useContext(DataContext);
//   const products = sellerDetail.products;
  const [products, setProducts] = useState([]);
  const id = sellerDetail._id;
  const mail = sellerDetail.email;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URL + `/products/${mail}`);
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