import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Home.css';

// Sample properties data (in real app, this would come from backend)
const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: '2BHK Apartment in Sector 14',
    rent: 15000,
    location: 'Sector 14',
    images: ['https://via.placeholder.com/300x200?text=Property+1'],
    phone: '+91-9876543210',
    owner: 'Rajesh Kumar',
    description: 'Beautiful 2BHK apartment with modern amenities'
  },
  {
    id: 2,
    title: '3BHK House in Model Town',
    rent: 25000,
    location: 'Model Town',
    images: ['https://via.placeholder.com/300x200?text=Property+2'],
    phone: '+91-9876543211',
    owner: 'Priya Sharma',
    description: 'Spacious 3BHK house with parking'
  },
  {
    id: 3,
    title: '1BHK Flat in Sector 23',
    rent: 10000,
    location: 'Sector 23',
    images: ['https://via.placeholder.com/300x200?text=Property+3'],
    phone: '+91-9876543212',
    owner: 'Amit Singh',
    description: 'Affordable 1BHK flat for students'
  }
];

function Home() {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Load properties (in real app, fetch from API)
    setProperties(SAMPLE_PROPERTIES);
  }, []);

  const filteredProperties = properties.filter(property =>
    filter === '' || property.location.toLowerCase().includes(filter.toLowerCase())
  );

  const maskInfo = (info) => {
    if (user) return info;
    return '•'.repeat(10) + ' (Login to view)';
  };

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Sonipat Home Service</h1>
        <p>Find your perfect rental property in Sonipat</p>
      </div>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by location (e.g., Sector 14, Model Town)..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="properties-grid">
        {filteredProperties.length === 0 ? (
          <div className="no-properties">
            <p>No properties found. Try adjusting your filters.</p>
          </div>
        ) : (
          filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <img src={property.images[0]} alt={property.title} />
              <div className="property-info">
                <h3>{property.title}</h3>
                <p className="location">📍 {property.location}</p>
                <p className="rent">₹{property.rent}/month</p>
                <p className="description">{property.description}</p>
                
                <div className="masked-info">
                  <p><strong>Owner:</strong> {maskInfo(property.owner)}</p>
                  <p><strong>Phone:</strong> {maskInfo(property.phone)}</p>
                </div>

                {!user && (
                  <p className="login-prompt">Login to view full details</p>
                )}

                <Link to={`/property/${property.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {!user && (
        <div className="cta-section">
          <h2>Want to see full property details?</h2>
          <p>Login with Google to access complete information and book properties!</p>
        </div>
      )}
    </div>
  );
}

export default Home;
