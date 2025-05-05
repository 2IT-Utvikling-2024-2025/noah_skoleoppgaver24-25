import React from 'react';
import { Link } from 'react-router-dom';
import Case1 from './pictures/Case1.png';
import './cases.css';

export default function Cases() {
  return (
    <div className="CasesContainer">
      <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/">
          <img src={Case1} alt="" />
        </Link>
      </div>
    </div>
  );
}