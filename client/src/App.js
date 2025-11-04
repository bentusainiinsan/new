import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyUpload from './pages/PropertyUpload';
import PropertyDetails from './pages/PropertyDetails';
import Cart from './pages/Cart';
import AuthContext from './context/AuthContext';
import ThemeContext from './context/ThemeContext';
import './App.css';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

const THEME_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DFE6E9', '#74B9FF', '#A29BFE', '#FD79A8', '#FDCB6E'
];

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [themeColor, setThemeColor] = useState(THEME_COLORS[0]);

  // Theme color change every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)];
      setThemeColor(randomColor);
    }, 60000); // 60000ms = 1 minute

    return () => clearInterval(interval);
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter(item => item.id !== propertyId));
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={{ user, login, logout }}>
        <ThemeContext.Provider value={{ themeColor }}>
          <Router>
            <div className="App" style={{ '--theme-color': themeColor }}>
              <Header cartCount={cart.length} />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/upload" element={<PropertyUpload />} />
                  <Route path="/property/:id" element={<PropertyDetails addToCart={addToCart} />} />
                  <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
