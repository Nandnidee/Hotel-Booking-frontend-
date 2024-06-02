import React from 'react';
import './TariffPackages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from './navbar';

const TariffPackages = () => {
  return (
    <div >
   
      <div className="header-image">
      <Navbar/>
        <div className="text-overlay ">
          <h2>TARIFF & PACKAGES</h2>
        </div>
      </div>
      <div className="section">
        <h2>Luxury in Every Detail</h2>
        <p>Unwind in our exquisitely designed rooms, crafted for your utmost comfort.</p>
      </div>
      <div className="contact-info">
        <p>CONTACT US FOR LATEST TARIFF & PACKAGES</p>
        <a href="/"><FontAwesomeIcon icon={faPhone} /> +91 9927963686</a>
        <a href="https://wa.me/9811383188"> <FontAwesomeIcon icon={faWhatsapp} className="fa-icon" /> +91 9811383188</a>
      </div>
      <div className="room-section">
        <h2>DELUXE ROOM</h2>
        <img src="./dulex.jpg" alt="Deluxe Room 1" />
        <img src="./dulex2.jpg" alt="Deluxe Room 2" />
        <img src="./dulex3.jpg" alt="Deluxe Room 3" />
      </div>
       <div className="room-section">
        <h2>SUPER DELUXE ROOM</h2>
        <img src="./dulex.jpg" alt="Deluxe Room 1" />
        <img src="./dulex2.jpg" alt="Deluxe Room 2" />
        <img src="./dulex3.jpg" alt="Deluxe Room 3" />
      </div>
       <div className="room-section">
        <h2>LUXURY ROOM</h2>
        <img src="./dulex.jpg" alt="Deluxe Room 1" />
        <img src="./dulex2.jpg" alt="Deluxe Room 2" />
        <img src="./dulex3.jpg" alt="Deluxe Room 3" />
      </div>
       <div className="room-section">
        <h2>FAMILY LUXURY ROOM</h2>
        <img src="./dulex.jpg" alt="Deluxe Room 1" />
        <img src="./dulex2.jpg" alt="Deluxe Room 2" />
        <img src="./dulex3.jpg" alt="Deluxe Room 3" />
      </div>
    </div>
  );
};

export default TariffPackages;
