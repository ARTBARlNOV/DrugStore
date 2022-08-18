import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Korzina from './Korzina';
import DrugList from '../DrugList';

export default function NavBar({ authState, setAuthState }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand"><img className="logo" src="./log.png" alt="лого" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!authState
              ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/registration" className="nav-link active" aria-current="page">Регистрация</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Авторизация</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Druglist" className="nav-link">
                      <DrugList />
                      Список товаров
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/korzina" className="nav-link"><Korzina /></NavLink>
                  </li>
                </>
              ) : (
                <div>
                  <li className="nav-item">
                    <NavLink onClick={logoutHandler} className="nav-link">Выход</NavLink>
                  </li>
                </div>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
