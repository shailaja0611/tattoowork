import React from 'react';
import { FaPaintBrush, FaRing, FaSkull } from 'react-icons/fa'; // Using icons from react-icons


const Services = () => {
  return (
    <div className="services">
      <h1>About Our Services</h1>
      <p>
        We offer a range of professional services to meet your tattoo and piercing needs.<br></br>
        Whether you're looking to get a new tattoo, get a piercing, or remove an old tattoo,<br></br>
        we've got you covered.
      </p>
      
      <div className="cards">
        {/* Tattoo Service Card */}
        <div className="service-card">
          <div className="service-icon">
            <FaPaintBrush size={50} />
          </div>
          <h2>Tattoo</h2>
          <p>Explore our variety of tattoos, <br></br>from small designs to full sleeves.</p>
          <p>Starting at </p>

            <p><strong>$40 USD</strong></p>
        </div>

        {/* Piercing Service Card */}
        <div className="service-card">
          <div className="service-icon">
            <FaRing size={50} />
          </div>
          <h2>Piercing</h2>
          <p>Professional piercing services with<br></br> a wide range of jewelry options.</p>
          <p>Starting at</p>
          <p><strong>$25 USD</strong></p>
        </div>

        {/* Tattoo Removal Service Card */}
        <div className="service-card">
          <div className="service-icon">
            <FaSkull size={50} />
          </div>
          <h2>Tattoo Removal</h2>
          <p>Safe and effective tattoo removal<br></br> to help you start fresh.</p>
          <p>Starting at</p>
            <p><strong>$80 USD</strong></p>
        </div>
      </div>
    </div>
    
  );
};

export default Services;
