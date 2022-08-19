import React, { useState } from 'react';

function Checkbox({ check, setCheck }) {
  console.log(check);
  return (

    <div className="form-check">
      <input value={check} onChange={(e) => { setCheck(e.target.checked); }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        В наличии
      </label>
    </div>

  );
}
export default Checkbox;
