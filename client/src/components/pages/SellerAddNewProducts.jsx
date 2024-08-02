import React, { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import axios from 'axios';
import './styles/SellerAddNewProducts.css';
import { BASE_URL } from '../../constants';
const URL = BASE_URL

function SellerAddNewProducts() {
  const { sellerDetail } = useContext(DataContext);
  const initialState = { name: '', description: '', price: '', quantity: '' };
  const [product, setProduct] = useState(initialState);
  const sellerJSON=window.localStorage.getItem('loggedSeller');
  const seller=JSON.parse(sellerJSON)
  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/add-new-product`, {...product, sellerMail: seller.email, id: Math.floor(Math.random() * 10000) });
      alert('Product added successfully');
      setProduct(initialState); // Reset the form
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Tell us more about this Product</h2>
      <p style={{fontFamily: 'monospace'}}>Associated Email id: {seller ? seller.email : 'Loading...'}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} value={product.name} required />
        <input type="number" name="price" placeholder="Product Price" onChange={handleChange} value={product.price} required />
        <input type="number" name="quantity" placeholder="Available quantity" onChange={handleChange} value={product.quantity} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default SellerAddNewProducts;