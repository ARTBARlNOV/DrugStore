import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { renderToString } from 'react-dom/server';

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}
// render(<ReactCalendar />, document.querySelector('#root'));

export default App;
