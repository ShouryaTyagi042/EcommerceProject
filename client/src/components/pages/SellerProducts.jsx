import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import './styles/SellerProducts.css';
const URL="http://localhost:5000";

const SellerProducts = () => {
  const { sellerDetail } = useContext(DataContext);
//   const products = sellerDetail.products;
  const [products, setProducts] = useState([]);
  const id = sellerDetail._id;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URL + `/products/seller/${id}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <h1 className="title">Here are all your products</h1>
      <div className="container">
        {!products || products.length === 0 ? (
          <p className='emptylist'>There is nothing to show here, start adding some products</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SellerProducts;