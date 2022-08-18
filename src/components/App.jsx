import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './navBar/Login';
import NavBar from './navBar/NavBar';
import Registration from './navBar/Registration';
import DrugList from './DrugList';

function App({ drug, userSession }) {
  console.log(drug);
  const [authState, setAuthState] = useState(userSession || null);

  return (
    <>
      <NavBar authState={authState} setAuthState={setAuthState} />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Main authState={authState} />} /> */}
          <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
          <Route path="/DrugList" element={<DrugList drug={drug} setAuthState={setAuthState} />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
