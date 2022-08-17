import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './navBar/Login';
import NavBar from './navBar/NavBar';
import Registration from './navBar/Registration';

function App({ userSession }) {
  const [authState, setAuthState] = useState(userSession || null);
  console.log(authState, userSession);

  return (
    <>
      <NavBar authState={authState} setAuthState={setAuthState} />
      <div className="containet">
        <Routes>
          {/* <Route path="/" element={<Main authState={authState} />} /> */}
          <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
