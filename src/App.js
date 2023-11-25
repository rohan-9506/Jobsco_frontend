// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HTMLFileComponent from './components/HTMLFileComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ApplyComponent from './components/ApplyComponent';
import ContactUsComponent from './components/ContactUsComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import JobListingsComponent from './components/JobListingsComponent';
import LoginComponent from './components/LoginComponent';

import SignupComponent from './components/SignupComponent'; // Import the new component
import SubmissionComponent from './components/SubmissionComponent'; // Import the new component
import LogoutComponent from './components/LogoutComponent';
import JobPortalPage from './components/JobPortalPage'; // import your JobPortalPage component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HTMLFileComponent />
        </Route>
        <Route path="/about-us">
          <AboutUsComponent />
        </Route>
        <Route path="/apply">
          <ApplyComponent />
        </Route>
        <Route path="/contact-us">
          <ContactUsComponent />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordComponent />
        </Route>
        <Route path="/job-listings">
          <JobListingsComponent />
        </Route>
        <Route path="/login">
          <LoginComponent />
        </Route>
        <Route path="/signup"> {/* Add a new route */}
          <SignupComponent />
        </Route>
        <Route path="/submission"> {/* Add a new route */}
          <SubmissionComponent />
        </Route>
        <Route path="/home">
          <LogoutComponent />
        </Route>
        <Route path="/job-portal" component={JobPortalPage} />
      </Switch>
    </Router>
  );
}

export default App;