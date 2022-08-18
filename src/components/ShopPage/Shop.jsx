import React, { useState } from 'react';

export default function Shop({ drug }) {
  const [drugState, setdrugState] = useState(drug);

  return (
    <div className="shop-container">
      <div className="products">
        { drug?.map((el) => (
          <div className="card" key={el.id}>
            <div>
              <img
                className="product-image"
                src={el.img}
                alt={el.name}
              />
            </div>
            <h3 className="product-name">{el.name}</h3>

            <div className="product-price">
              {el.price}
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
