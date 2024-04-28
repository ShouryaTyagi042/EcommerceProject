import React, { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import axios from 'axios';
import './styles/SellerAddNewProducts.css';
const URL = 'http://localhost:5000/'

function SellerAddNewProducts() {
  const { sellerDetail } = useContext(DataContext);
  const initialState = { name: '', description: '', price: '', quantity: '' };
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add-new-product', {...product, sellerMail: sellerDetail.email, id: Math.floor(Math.random() * 10000) });
      alert('Product added successfully');
      setProduct(initialState); // Reset the form
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Tell us more about this Product</h2>
      <p style={{fontFamily: 'monospace'}}>Associated Email id: {sellerDetail ? sellerDetail.email : 'Loading...'}</p>
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