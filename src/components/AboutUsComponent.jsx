import React from 'react';

const AboutUsComponent = () => (
  <div style={{
    fontFamily: 'Lato, sans-serif',
    background: 'linear-gradient(to bottom, #70e1f5, #f5ede4)',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <div id="navbar" style={{
            backgroundcolor: '#2260b7',
            padding: 10,
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zindex: 1,
            display: 'flex-right',
            justifyContent: 'space-between',
            alignItems: 'center',
    }}>
      <div id="logo">
        <img src="logo.jpeg" alt="Your Logo" />
      </div>
      <a href="/" style={{ color: 'white', textDecoration: 'none', margin: '0 650px' }}>Home</a>
      <a href="/job-listings" style={{ color: 'white', textDecoration: 'none', margin: '0 -100px' }}>Browse Jobs</a>
      <a href="/contact-us" style={{ color: 'white', textDecoration: 'none', margin: '0 48px' }}>Contact Us</a>
    </div>

    <div className="container" style={{
      padding: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      width: '70%',
      textAlign: 'center',
      marginTop: 70,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h1>About Us</h1>
      <p>Welcome to our job board! We are dedicated to connecting talented individuals with exciting job opportunities.</p>
      <p>Our mission is to make the job search process seamless and efficient for both job seekers and employers.</p>

      <h2>Our Team</h2>

      <div className="team-member" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
        <div className="team-member-details">
          <h3>ROHAN RAI</h3>
          <p>21BCE0440</p>
        </div>
      </div>

      <div className="team-member" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
        <div className="team-member-details">
          <h3>SHIVANI DASH</h3>
          <p>21BCE0484</p>
        </div>
      </div>

      <div className="team-member" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
        <div className="team-member-details">
          <h3>KASHISH JAIN</h3>
          <p>21BCE3204</p>
        </div>
      </div>

      <div className="team-member" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
        <div className="team-member-details">
          <h3>ASHWANI YADAV</h3>
          <p>21BCE0231</p>
        </div>
      </div>

      <div className="team-member" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
        <div className="team-member-details">
          <h3>AAYATI SALUJA</h3>
          <p>21BCI0051</p>
        </div>
      </div>

      <div className="back-to-home" style={{ marginTop: 20, textAlign: 'center', color: '#2260b7' }}>
        <p>Explore our job listings <a href="/login" style={{ color: '#2260b7', textDecoration: 'none', fontWeight: 'bold' }}>here</a>.</p>
      </div>
    </div>
  </div>
);

export default AboutUsComponent;