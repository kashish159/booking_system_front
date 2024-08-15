import './AboutUs.css';
import React from 'react';
// import Navbar from './about_nav';
import logo from '../../assets/images/logo.png'

const AboutUs = () => {
  return (
    <div className="">
      {/* <div className="" style={{ paddingBottom: '0px' }}>
        <Navbar />
      </div> */}
      
      {/* <h1 className="text-6xl py-20 font-bold text-white text-center fixed w-full z-30" style={{ top: 0 }}>About Us</h1> */}

    

    <div className="about-container">
      <h1>GoGlobe - Exploring the World with Passion</h1>

      <div className="about-section">
        <h2>Introduction</h2>
        <p>Welcome to GoGlobe, where our journey began with a shared passion for exploration and a vision to transform travel into a breathtaking experience.</p>
      </div>

      <div className="about-section">
        <h2>Our History</h2>
        <p>Established in 2022, GoGlobe originated from the adventures of two fervent travelers. What started as a series of globetrotting escapades turned into a fervent desire to share the wonders of the world with everyone. Fuelled by our collective experiences and a commitment to personalized, enriching travel, GoGlobe took its first steps.</p>
      </div>

      <div className="about-section">
        <h2>Our Motivation</h2>
        <p>Our relentless drive springs from the belief that traveling is beyond mere sightseeing—it’s about embracing cultures, creating connections, and fostering unforgettable memories. We are motivated by the desire to redefine the travel experience, making it more immersive, personal, and transformative.</p>
      </div>

      <div className="about-section">
        <h2>Our Objectives</h2>
        <p>At GoGlobe, our objectives are clear:</p>
        <ol>
          <li>Personalized Experiences</li>
          <li>Cultural Fusion</li>
          <li>Sustainable Travel</li>
          <li>Unparalleled Service</li>
          <li>Continuous Innovation</li>
        </ol>
      </div>

      <div className="about-section">
        <h2>Our Promise</h2>
        <p>At GoGlobe, we promise an escape from the ordinary—a voyage that enriches, enlightens, and remains etched in your memories forever. We invite you to join us in exploring this remarkable globe, one unique destination at a time. Thank you for considering GoGlobe for your next adventure.</p>
      </div>

        <div className="about-section">
            <h2>Our Logo</h2>
            <img src={logo} alt="GoGlobe Logo" style={{ maxWidth: '200px' }} />
        </div>


    </div>
    </div>
  );
};

export default AboutUs;