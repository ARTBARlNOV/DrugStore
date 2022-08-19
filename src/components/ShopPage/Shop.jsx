import React, { useEffect, useState } from 'react';

export default function Shop({ drug, setCardList }) {
  const [drugState, setdrugState] = useState(drug);
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
      <div className="products">
        { drugState?.map((el) => (
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
