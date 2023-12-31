// src/components/HTMLFileComponent.jsx

import React from 'react';
import "./index.css"

const HTMLFileComponent = () => {
  return (
    <>
    <div id="navbar">
    <div id="left">
        <div id="logo"><img src="logo.jpeg" alt="logo"/></div>
    </div>
    <div id="center">
        <a class="black" href="/">HOME</a>
        <a class="black" href="/login">BROWSE JOB</a>
        <a class="black" href="/contact-us">CONTACT</a>
    </div>
    <div id="right">
        <a href="/job-portal" class="btn">POST A JOB</a>
        <a href="/" class="btn">LOG OUT</a>
    </div>
</div>

<div id="center-content">
    <div>
        <h2>Easiest way to find a perfect job</h2>
        <p id="main">Find Your Next Dream Job</p>
        <a href="/login" class="btn" id="jobButton">Looking For a Job?</a>
        <a href="/job-portal" class="btn" id="talentButton">Find Talent</a>
    </div>
</div>

<div id="statistics">
    <h3>Explore Our Impact</h3>
    <div class="stat-box">
        <div class="stat-item">
            <h2>130K +</h2>
            <p>Tech Jobs</p>
        </div>
        <div class="stat-item">
            <h2>6,000,000</h2>
            <p>Matches Made</p>
        </div>
        <div class="stat-item">
            <h2>8M +</h2>
            <p>Startup-ready candidates</p>
        </div>
        <div class="stat-item">
            <h2>27k</h2>
            <p>Companies</p>
        </div>
        <div class="stat-item">
            <h2>95k</h2>
            <p>Hires</p>
        </div>
    </div>
</div>

<div id="impact">
    <h3>Why Job Seekers Love Us</h3>
    <div id="impact-text">
        <div class="impact-item">
            <h2>Unique Opportunities</h2>
            <p>Unique jobs at startups and tech companies you can't find anywhere else.</p>
        </div>
        <div class="impact-item">
            <h2>One-Click Apply</h2>
            <p>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>
        </div>
        <div class="impact-item">
            <h2>Transparent Job Search</h2>
            <p>Everything you need to know to job search - including seeing salary and stock options upfront when looking.</p>
        </div>
        <div class="impact-item">
            <h2>Direct Connection</h2>
            <p>Connect directly with founders at top startups - no third party recruiters allowed.</p>
        </div>
    </div>
</div>

<div id="recruiters">
    <h3>Why Recruiters Love Us</h3>
    <div id="recruiters-text">
        <div class="recruiters-item">
            <h2>Millions of Candidates</h2>
            <p>8 million responsive and startup-ready candidates, with all the information you need to vet them.</p>
        </div>
        <div class="recruiters-item">
            <h2>Quick Setup</h2>
            <p>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free.</p>
        </div>
        <div class="recruiters-item">
            <h2>Free ATS</h2>
            <p>A free applicant tracking system, or free integration with any ATS you may already use.</p>
        </div>
        <div class="recruiters-item">
            <h2>Curated Vetting</h2>
            <p>Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.</p>
        </div>
    </div>
</div>

<footer>
    <div id="footer-copyright">
        <p>&copy; 2023 Jobsco. All rights reserved.</p>
    </div>
    <div id="footer-browse">
        <p>Browse by: Jobs, Remote Jobs, Locations, Startups, Industries, Tech Hubs</p>
    </div>
    
</footer></>);
};

export default HTMLFileComponent;
