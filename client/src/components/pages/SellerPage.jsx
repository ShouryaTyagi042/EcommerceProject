import React from 'react';
import { FaRegListAlt, FaPlusSquare } from 'react-icons/fa';
import './styles/SellerPage.css';
import { useContext, useEffect } from "react";
import { DataContext } from '../../context/DataProvider';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerPage = () => {
  const navigate = useNavigate();

  const handleButtonAllProducts = () => {
    navigate('/allproducts');
  };


  const {log, sellerDetail} = useContext(DataContext);
  console.log("This is just a test " + sellerDetail.firstname);
  return (
    <div>
      <div className="title">
        <h1>Welcome {sellerDetail.firstname}</h1>
        
      </div>

      <div> 
        <h3>Total Income = Rs. 0</h3>
      </div>
      {/* Hard coded this line, will change later */}
      
      <div className="button-container">
        <button className="button" onClick={handleButtonAllProducts}>
          <FaRegListAlt size={88} style={{ marginBottom: '30px' }} />
          Show all my products
        </button>
        <button className="button">
          <FaPlusSquare size={88} style={{ marginBottom: '30px' }} />
          Add new products
        </button>
      </div>
    </div>
  );
};

export default SellerPage;