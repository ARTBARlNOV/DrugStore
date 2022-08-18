import React from 'react';

export default function Privetstvie({ authState }) {
  return (
    <div>
      <h1>Main Page</h1>
      <p>
        Привет,
        {' '}
        {authState ? `${authState.name}` : 'гость'}
      </p>
    </div>
  );
}
