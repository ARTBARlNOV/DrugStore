import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default function Shop({ drug }) {
  const [drugState, setdrugState] = useState(drug);
  const [check, setCheck] = useState(false);
  return (
    <div className="shop-container">
      <Checkbox check={check} setCheck={setCheck} />

      <div className="products">
        { drug?.filter((elem) => {
          if (check) return elem.avail;
          return true;
        }).map((el) => (
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
              {' '}
              руб.
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
