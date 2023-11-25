import React from 'react';

const SubmissionComponent = () => {
  return (
    <>
      <style>
        {`
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              background-color: #f4f4f4;
              color: #333;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
          }
  
          .success-message {
              background-color: #add8e6;
              padding: 80px;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
              margin-top: -120px;
          }
  
          .track-button {
              padding: 10px 20px;
              font-size: 16px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
              margin-top: 20px;
          }
  
          .track-button:hover {
              background-color: #0056b3;
          }
  
          /* Application status section */
          .application-status {
              display: none;
              margin-top: 20px;
          }
  
          .status {
              font-size: 20px;
              margin-top: 10px;
          }
  
          /* Navbar Styles */
          #navbar {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              background-color: #2260b7;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px;
              z-index: 1000;
          }
  
          .black {
              color: black;
          }
  
          #navbar a {
              text-decoration: none;
              margin: 10px 10px;
          }
  
          #logo {
              font-size: 24px;
              font-weight: bold;
          }
  
          #right .btn {
              background-color: #1531ae;
              color: #dedddd;
              padding: 8px 12px;
              border: none;
              border-radius: 3px;
              cursor: pointer;
              margin: 0 5px;
              text-decoration: none;
              font-size: 14px;
          }
  
          #right .btn:hover {
              background-color: #048b34;
              color: black;
          }
  
          /* Adjust the body padding to ensure content doesn't start underneath the fixed navbar */
          body {
              padding-top: 50px;
          }
          h2 {
              margin-top: -10px;
          }
        `}
      </style>

      <div id="navbar">
        <div id="left">
          <div id="logo"><img src="logo.jpeg" alt="logo" /></div>
        </div>
        <div id="center">
          <a className="black" href="/home">HOME</a>
          <a className="black" href="/job-listings">BROWSE JOB</a>
          <a className="black" href="/contact-us">CONTACT</a>
        </div>
      </div>

      <div className="success-message" id="success-message">
        <h2>Application Submitted Successfully!</h2>
      </div>
    </>
  );
};

export default SubmissionComponent;
