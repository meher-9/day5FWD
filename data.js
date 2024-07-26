// Data.js

import React, { useContext, useEffect, useState } from 'react';
import StarRating from './starrating';
import Navigation from './navigation';
import { globalContext } from './app';

function Data() {
  const [data, setData] = useState([]);
  const { cart, setcart } = useContext(globalContext);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (res.ok) {
          const resData = await res.json();
          setData(resData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMyData();
  }, []);

  const handleAddToCart = (dataItem) => {
    // Add the selected item to the cart
    setcart((prevCart) => [...prevCart, dataItem]);
  };

  return (
    <div>
      <Navigation />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.map((dataItem, index) => (
          <div key={index} className="card" style={{ width: '20rem', margin: '12px', display: 'flex', flexDirection: 'column' }}>
            <div className="card-body" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="card-title" style={{ textAlign: 'center' }}>
                <img src={dataItem.image} alt="product" width={100} style={{ border: '10px', borderRadius: '50px', display: 'block', margin: '0 auto', height: '20vh' }} />
                <br />
                <h6>{dataItem.title}</h6>
                <div>{dataItem.category}</div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <StarRating rating={dataItem.rating.rate} /> ({dataItem.rating.count})
                </div>
                <div>${dataItem.price}</div>
                <button type="button" className="btn btn-secondary" onClick={() => handleAddToCart(dataItem)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;