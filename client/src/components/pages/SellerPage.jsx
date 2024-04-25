import React from 'react';
import { FaRegListAlt, FaPlusSquare } from 'react-icons/fa';
import './styles/SellerPage.css';

const SellerPage = () => {
  return (
    <div>
      <div className="title">
        <h1>Welcome to the Seller Dashboard</h1>
      </div>

      <div> 
        <h3>Total Income = Rs. 0</h3>
      </div>
      {/* Hard coded this line, will change later */}
      
      <div className="button-container">
        <button className="button">
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