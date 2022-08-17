import React from 'react';
import { Link } from 'react-router-dom';

export default function Korzina() {
  return (
    <div>
      <Link to="/korzina">
        <img className="logo" src="./korzina.png" alt="корзина" />
      </Link>
    </div>
  );
}
