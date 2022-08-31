import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

export default function Privetstvie({ authState }) {
  console.log(`authState -->${authState}`);
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <>
      <div className="privetBlock">
        <h1>Вы находитесь на главной странице:</h1>
        <p>
          Добрый день,
          {' '}
          {authState ? `${authState.name}` : 'покупатель'}
        </p>
      </div>
      <div className="test">
        <Calendar onChange={onChange} value={date} />
      </div>
    </>

  );
}
