// src/components/ApplyComponent.jsx

import React, { useState } from 'react';
import {useHistory} from "react-router-dom"
import "./apply.css"

const ApplyComponent = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const [cv, setCV] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const submit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("portfolio", portfolio);
    formData.append("resume", cv);
    formData.append("coverLetter", coverLetter);
    console.log(formData);
    const data = await fetch("http://localhost:3000/api/apply-job/6557aeb49f27fe81951ca4a8", {
      method: "post",
      enctype:"multipart/form-data",
      body: formData
    }).then(res => res.json());
    if (data.status === 200 ){
      history.push("/submission")
    }
  }

  return <>
  
  <header>
        <h1>Job Application - Software Engineer</h1>
    </header>

    <nav>
        <a href="/">Home</a>
        <a href="/job-listings">Browse Jobs</a>
        <a href="/contact-us">Contact</a>
        <a href="/job-portal">Post a Job</a>
    </nav>

    <section class="job-description">
        <h2>Job Description</h2><br></br><br></br>
        <p>
            We are seeking someone to join our dynamic Mumbai team as a Software Developer. With 4+ years' experience, you'll design, code, 
            and modify software htmlFor client needs. Proficient in Java, C++, Python, and adept with MySQL/Oracle, 
            you'll craft scalable solutions. Collaborate across teams, analyze user needs, and innovate. 
            Proven record delivering high-quality projects within tight deadlines? Passionate, self-motivated, 
            problem-solver? Join us, contribute to cutting-edge software.
        </p>

        <h3>Skills</h3>
        <p>
            Software Development, Java, C++, Python, Database Management Systems, MySQL, Oracle, Problem-solving, Team Collaboration, Time Management,
        </p>

        <h3>Responsibility</h3>
        
        <ul>
            <li>Designing, coding, and modifying software applications based on clients' requirements.</li>
            <li>Collaborating with cross-functional teams to analyze user requirements and propose innovative software solutions.</li>
            <li>Developing efficient and scalable software solutions using programming languages such as Java, C++, and Python.</li>
            <li>Ensuring the quality and performance of software projects by conducting thorough testing and debugging.</li>
            <li>Integrating software components and third-party libraries to enhance functionality and improve user experience.</li>
            <li>Maintaining and updating existing software applications to meet evolving client needs and industry standards.</li>
        </ul>
              
       <h3>Requirements:</h3>
       <p>
        <ol>
            <li>At least 4 years of experience in software development.</li>
            <li>Strong understanding of programming languages such as Java, C++, and Python.</li>
            <li>Expertise in database management systems like MySQL and Oracle.</li>
          </ol>          
       </p>

        <h3>Qualifications</h3>
        <p>Bachelor of Technology (BTech)</p>

        <h3>Company Name:</h3>
        <p>ABC Tech Solutions</p>
    </section>
    <section class="application-form">
        <form onSubmit={e => {
          e.preventDefault();
          submit();
        }}>
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)}/>
    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)}/>
    
            <label htmlFor="portfolio">Website/Portfolio link:</label>
            <input type="url" id="portfolio" name="portfolio" value={portfolio} onChange={e => setPortfolio(e.target.value)}/>
    
            <label htmlFor="cv">Upload CV:</label>
            <input type="file" id="cv" name="resume" accept=".pdf, .doc, .docx" required onChange={e => setCV(e.target.files[0])}/>
    
            <label htmlFor="cover-letter">Cover Letter:</label>
            <textarea id="cover-letter" name="coverLetter" rows="4" requiredvalue={coverLetter} onChange={e => setCoverLetter(e.target.value)}></textarea>
    
            <a href="/job-listings" class="back-btn">Back</a>
            <button type="submit">Apply Now</button>
        </form>
        </section>
  </>
}

export default ApplyComponent;