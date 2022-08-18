import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import data from '../../../testData/testData';

export default function Shop() {
  const navigate = useNavigate();
  const { productItems } = data;

  return (

    <div className="shop-container">
      <div className="products">
        { productItems.map((productItem) => (
          <div className="card">
            <div>
              <img
                className="product-image"
                src={productItem.img}
                alt={productItem.name}
              />
            </div>
            <h3 className="product-name">{productItem.name}</h3>

            <div className="product-price">
              {productItem.price}
            </div>
            <div>
              <button className="product-add-btn">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
