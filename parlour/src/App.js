import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import { FaInstagram } from 'react-icons/fa';
import GiftPopup from './GiftPopup';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Gallery from "./Components/Gallery/Gallery";
import Team from "./Components/Team/Team";
import Photo from "./Components/Photo/Photo";
import About from "./Components/About/About";
import Branch from "./Components/Branch/Branch";
import Footer from "./Components/Footer/Footer";
import HomeVideo from "./Components/HomeVideo/HomeVideo";
import TeamMember from "./Components/TeamMember/TeamMember";
import Header from "./Components/Header/Header";

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/send-otp', { name, email });
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred while sending OTP.');
    }
  };
  
  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/verify-otp', { email, otp: otp.trim() });
      setMessage(response.data.message);
      setShowPopup(true);
    } catch (error) {
      setError(error.response?.data?.error || 'Incorrect OTP.');
    }
  };

  
  const closePopup = () => {
    setShowPopup(false);
  };

  // const Card = ({ color, imgSrc, title, description }) => (
  //   <div className="card" style={{ '--clr': color }}>
  //     <div className="img-box">
  //       <img src={imgSrc} alt={title} />
  //     </div>
  //     <div className="content">
  //       <h2>{title}</h2>
  //       <p>{description}</p>
  //       <a href="#">Read More</a>
  //     </div>
  //   </div>
  // );
  
  return (

    <>
       {/*       
    <!-- =============================================================================================================================
                                                 Navbar
============================================================================================================================== --> */}
      <Navbar />
      <Header />
      {/*     
    <!-- =============================================================================================================================
                                                 Home
============================================================================================================================== --> */}
      {/* <Header /> */}

      <Home />
      {/* <!-- =============================================================================================================================
                                                 services
============================================================================================================================== --> */}

      {/* <!-- =============================================================================================================================
                                                 pricing
============================================================================================================================== --> */}
      <Pricing />
      {/* <!-- =============================================================================================================================
                                                 gallary
============================================================================================================================== --> */}
     
     <div className="form-container">
         <label htmlFor="name">Your Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

         <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

         <button className="send-otp" onClick={sendOtp}>Send OTP</button>

    <label htmlFor="otp">Enter OTP:</label>
         <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />

        <button className="verify-otp" onClick={verifyOtp}>Verify OTP</button>

         {message && <div className="success-message">
           <p>{message}</p>
        </div>}

        {error && <div className="error-message">
           <p>{error}</p> 
         </div>}
    </div>
    {showPopup && <GiftPopup message="You've unlocked a special gift! 🎉" onClose={closePopup} />}
    
     
      <Gallery />
      {/* <!-- =============================================================================================================================
                                                 team
============================================================================================================================== --> */}
      <HomeVideo />
      <Team />
      {/* <!-- =============================================================================================================================
                                                 Photo
============================================================================================================================== --> */}

      <Photo />
      {/* <!-- =============================================================================================================================
                                                 about
============================================================================================================================== --> */}
      <About />
      <Services />
      {/* 
    <!-- =============================================================================================================================
                                                 Branch
============================================================================================================================== --> */}
      {/* <Branch /> */}

      {/* <!-- =============================================================================================================================
                                                 footer

============================================================================================================================== --> */}
      <Footer />
    </>
     
    // website
    // <div className="container">
    //   {/* Transparent Header */}
    //   {/* <header className="transparent-header">
    //     <div>Your Parlor Name</div>
    //   </header> */}

    //   <div className="instagram-section">
    //     <div className="instagram-link">
    //       <FaInstagram className="instagram-icon" style={{ color: 'red' }} />

    //       <p>
    //         📸 Firstly follow us on Instagram: <br /> Click here :- <br />
    //         <a href="https://www.instagram.com/jyotis_makeover_studio?igsh=ZGZnb3lwcWFzejdw" target="_blank" rel="noopener noreferrer">
    //           Jyoti's Makeover Studio
    //         </a>{' '}
    //         📸
    //       </p>
    //     </div>
    //   </div>

    //   <div className="form-container">
    //     <label htmlFor="name">Your Name:</label>
    //     <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

    //     <label htmlFor="email">Your Email:</label>
    //     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

    //     <button className="send-otp" onClick={sendOtp}>Send OTP</button>

    //     <label htmlFor="otp">Enter OTP:</label>
    //     <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />

    //     <button className="verify-otp" onClick={verifyOtp}>Verify OTP</button>

    //     {message && <div className="success-message">
    //       <p>{message}</p>
    //     </div>}

    //     {error && <div className="error-message">
    //       <p>{error}</p> 
    //     </div>}
    //   </div>
    //   {showPopup && <GiftPopup message="You've unlocked a special gift! 🎉" onClose={closePopup} />}
    
    //   <div className="containercard">
    //   <Card
    //     color="#009688"
    //     imgSrc="https://www.trio.dev/hubfs/Imported_Blog_Media/263a75529a1752b75d64f9f21fd07c92-3-2.jpg"
    //     title="Development"
    //     description="As a front-end developer, I have extensive experience in everything from simple landing pages to extensive large-scale projects for hotels and resorts. There is no project too big or too small."
    //   />

    //   <Card
    //     color="#FF3E7F"
    //     imgSrc="https://www.freecodecamp.org/news/content/images/2021/09/emily-bernal-v9vII5gV8Lw-unsplash.jpg"
    //     title="Design"
    //     description="As a graphic designer I have worked in many industries on everything from apparel to branding for companies large and small. I can help with full re-branding, or building awareness for a brand that already exists."
    //   />

    //   <Card
    //     color="#03A9F4"
    //     imgSrc="https://www.graphicdesigndegreehub.com/wp-content/uploads/2020/09/If-I-Do-Not-Like-Coding-is-a-Graphic-Design-Degree-Right-for-Me.jpg"
    //     title="Playground"
    //     description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
    //   />
    // </div>

    // </div>

    
  );
};
export default App;
