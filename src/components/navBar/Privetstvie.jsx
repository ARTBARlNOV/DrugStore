import React from 'react';

export default function Privetstvie({ authState }) {
  return (
    <div>
      <h1>Main Page</h1>
      <p>
        Добрый день,
        {' '}
        {authState ? `${authState.name}` : 'покупатель'}
      </p>
    </div>
  );
}
