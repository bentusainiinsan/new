import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import AuthContext from '../context/AuthContext';
import ThemeContext from '../context/ThemeContext';
import './Header.css';

function Header({ cartCount }) {
  const { user, login, logout } = useContext(AuthContext);
  const { themeColor } = useContext(ThemeContext);

  const handleSuccess = (response) => {
    // In a real app, you would verify the token on the backend
    const userData = {
      name: response.profileObj?.name || 'User',
      email: response.profileObj?.email || 'user@example.com',
      picture: response.profileObj?.picture || ''
    };
    login(userData);
  };

  const handleFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <header className="header" style={{ backgroundColor: themeColor }}>
      <div className="header-container">
        <Link to="/" className="logo">
          <FaHome size={24} />
          <span>Sonipat Home Service</span>
        </Link>
        
        <nav className="nav">
          <Link to="/">Home</Link>
          {user && <Link to="/upload">Upload Property</Link>}
        </nav>

        <div className="auth-cart">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          
          {user ? (
            <div className="user-info">
              <span>Welcome, {user.name}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleFailure}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
