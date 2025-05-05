// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [view, setView] = useState('login'); // login, register, products
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      setToken(res.data.token);
      setView('products');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { username, email, password });
      alert('Registration successful! Now log in.');
      setView('login');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    if (view === 'products') {
      fetchProducts();
    }
  }, [view]);

  return (
    <div className="container">
      <h1>My Shop App</h1>

      {view === 'login' && (
        <div className="form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span className="link" onClick={() => setView('register')}>
              Register
            </span>
          </p>
        </div>
      )}

      {view === 'register' && (
        <div className="form">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <p>
            Already have an account?{' '}
            <span className="link" onClick={() => setView('login')}>
              Login
            </span>
          </p>
        </div>
      )}

      {view === 'products' && (
        <div className="products">
          <h2>Product List</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
