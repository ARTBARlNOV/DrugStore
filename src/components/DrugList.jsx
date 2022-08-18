import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Druglist({ drug }) {
  const [drugState, setdrugState] = useState(drug);

  return (
    <div className="list-group">
      {drug?.map((el) => (
        <div key={el.id}>
          <Link to={`/Druglist/${el.id}`}>
            {`${el.name} \n`}
            {`${el.price} \n`}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Druglist;
