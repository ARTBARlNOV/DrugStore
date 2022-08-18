import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
        <Link to="/" className="navbar-brand"><img className="logo" src="./log.png" alt="лого" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!authState
              ? (
                <>
                  <li className="nav-item">
                    <Link to="/registration" className="nav-link active" aria-current="page">Регистрация</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Авторизация</Link>
                  </li>

                </>
              ) : (
                <div>
                  <li className="nav-item">
                    <NavLink to="/shop" className="nav-link active" aria-current="page">Магазин</NavLink>
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
                  <li className="nav-item">
                    <button onClick={logoutHandler} className="nav-link">Выход</button>
                  </li>
                </div>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
