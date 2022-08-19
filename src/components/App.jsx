import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './navBar/Login';
import NavBar from './navBar/NavBar';
import Registration from './navBar/Registration';
import Privetstvie from './navBar/Privetstvie';
import Korzina from './navBar/Korzina';
import Shop from './ShopPage/Shop';

function App({ drug, userSession }) {
  const [authState, setAuthState] = useState(userSession || null);
  return (
    <>
      <NavBar authState={authState} setAuthState={setAuthState} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Privetstvie authState={authState} />} />
          {/* <Route path="/" element={<Shop setAuthState={setAuthState} />} /> */}
          <Route path="/shop" element={<Shop drug={drug} setAuthState={setAuthState} />} />
          <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
          <Route path="/korzina" element={<Korzina setAuthState={setAuthState} />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
