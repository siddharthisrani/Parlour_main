// GiftPopup.js

import React from 'react';
import './GiftPopup.css';

const GiftPopup = ({ onClose }) => {
  const giftMessages = [
    "Congratulations! You've won a Free Eybrow! 🎁 ",
    "Congratulations! You've won a Free Upperlips! 🎁 ",
    "Get ready for a delightful surprise! 🌟 ",
    // Add more random gift messages as needed
  ];

  // Randomly select a gift message
  const randomMessage = giftMessages[Math.floor(Math.random() * giftMessages.length)];

  return (
    <div className="gift-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 style={{color:"Pink"}}>🎁 Congratulations!</h2>
        <p>{randomMessage}</p> 
        <p style={{color:"black"}}>Take a Screenshot of it and show it to Our Parlour . Address :- B-new 21 PNB Road near Jai Ambe chat Jyoti's Makeover Studio</p>
      </div>
    </div>
  );
};

export default GiftPopup;
