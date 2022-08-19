import React, { useState } from 'react';
import Checkbox from './Checkbox';
import React, { useEffect, useState } from 'react';

export default function Shop({ drug, setCardList }) {
  const [drugState, setdrugState] = useState(drug);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  console.log(check1);
  // shopHandler = () => {

  // };

  useEffect(() => {
    fetch('/api/shop', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setdrugState(data));
  }, []);

  return (
    <div className="shop-container">
      <Checkbox check={check} setCheck={setCheck} check1={check1} setCheck1={setCheck1} />
 
      <div className="products">
        { drug?.filter((elem) => {
          if (check) return elem.avail;
          return true;
        }).sort((a, b) => {
          if (check1) return a.price > b.price ? 1 : -1;
          return 0;
        }).map((el) => (
        // { drugState?.map((el) => (
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
              <button onClick={setCardList} className="product-add-btn">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
