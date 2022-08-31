import React, { useState } from 'react';

function Checkbox({
  check, check2, setCheck, setCheck1,
}) {
  return (
    <>
      <div className="form-check">
        <input value={check} onChange={(e) => { setCheck(e.target.checked); }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          В наличии
        </label>
      </div>
      <div className="form-check">
        <input value={check2} onChange={(e) => { setCheck1(e.target.checked); }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Сначала дешевые
        </label>
      </div>
    </>
  );
}
export default Checkbox;
