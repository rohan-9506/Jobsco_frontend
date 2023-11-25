import React from 'react';


const JobListingComponent = () => {
    return (
        <>
            <style>
                {`
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        margin: 0;
                        padding: 0;
                        background: linear-gradient(to bottom, #70e1f5, #f5ede4); 
                    }

                    header {
                        background: #2260b7;
                        color: white;
                        padding: 1em;
                        text-align: center;
                        font-size: 1.5em;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    }

                    nav {
                        background: #6a8bc6;
                        padding: 1em;
                        text-align: center;
                        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    nav a {
                        color: white;
                        text-decoration: none;
                        margin: 0 1em;
                        transition: color 0.3s ease;
                    }

                    nav a:hover {
                        color: #ffcd02;
                    }

                    section {
                        padding: 2em;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }

                    .job-listings {
                        width: 70%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 0 auto;
                    }

                    .job-card {
                        width: 70%;
                        padding: 1em;
                        margin: 0.5em 0;
                        position: relative;
                        box-sizing: border-box;
                        background: #fff;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                        border-radius: 8px;
                        transition: transform 0.3s ease;
                    }

                    .job-card:hover {
                        transform: scale(1.02);
                    }

                    .job-card button {
                        position: absolute;
                        bottom: 1em;
                        right: 1em;
                        background-color: #333;
                        color: white;
                        border: none;
                        cursor: pointer;
                        padding: 0.5em 1em;
                        border-radius: 4px;
                    }

                    .job-type {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .job-type {
                        text-align: center;
                    }

                    .search-bar {
                        width: 100%;
                        margin-bottom: 1em;
                        padding: 1em;
                        box-sizing: border-box;
                        font-size: 1.2em;
                        margin-left: 14%;
                    }

                    .search-bar input {
                        font-size: 25px;
                    }

                    .search-bar::placeholder {
                        color: #777;
                    }

                    .filter-section {
                        width: 20%;
                        position: relative;
                    }

                    .filters {
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: #fff;
                        padding: 1em;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .filter-select {
                        width: 100%;
                        padding: 0.5em;
                        margin-bottom: 1em;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    }

                    .apply-button {
                        display: block;
                        margin: 1em 0;
                        padding: 1em;
                        background-color: #333;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 4px;
                        transition: background-color 0.3s ease;
                    }

                    .apply-button:hover {
                        background-color: #555;
                    }

                    .pagination {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 1em;
                        margin-left: 30%;
                    }

                    .page-link {
                        padding: 0.5em;
                        margin: 0 0.2em;
                        border: 1px solid #ddd;
                        text-decoration: none;
                        color: #333;
                        cursor: pointer;
                        border-radius: 4px;
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }

                    .page-link.active {
                        background-color: #333;
                        color: white;
                    }

                    .job-type {
                        font-weight: bold;
                    }

                    .job-card-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        margin-top: -1em;
                    }

                    .job-type {
                        font-weight: bold;
                        margin-top: 0.5em;
                        text-align: center;
                    }

                    .apply-button {
                        margin-top: 1em;
                        background-color: #4285f4;
                        color: white;
                        border: none;
                        cursor: pointer;
                        padding: 0.5em 1em;
                        border-radius: 4px;
                        transition: background-color 0.3s ease;
                    }

                    .apply-button:hover {
                        background-color: #2a5298;
                    }

                    .job-card-content-inline {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    #right {
                        text-align: right;
                    }
                `}
            </style>

            <header>
                <h1>Jobsco</h1>
            </header>

            <nav>
                <a href="/home">Home</a>
                <a href="/job-listings">Browse Jobs</a>
                <a href="/contact-us">Contact</a>
                <a href="/job-portal">Post a Job</a>

                <div id="right">
                    <a href="/" className="btn">LOG OUT</a>
                </div>
            </nav>

            <section id="browse-jobs">
                <div className="search-bar">
                    <input type="text" placeholder="Search for jobs..." />
                </div>

                <div className="job-listings">
                    <div className="job-card">
                        <h3>Software Developer</h3>
                        <div className="job-card-content-inline">
                            <p>ABC Tech Solutions</p>
                            <p className="job-type">Full Time</p>
                            <a href="/apply">
                                <button className="apply-button">Apply</button>
                            </a>
                        </div>
                        <p>Location: Mumbai, India</p>
                    </div>

                    <div className="job-card">
                        <h3>Software Developer</h3>
                        <div className="job-card-content-inline">
                            <p>XYZ Analytics Inc.</p>
                            <p className="job-type">Part Time</p>
                            <a href="/apply">
                                <button className="apply-button">Apply</button>
                            </a>
                        </div>
                        <p>Location: Delhi, India</p>
                    </div>

                    <div className="job-card">
                        <h3>UX Designer</h3>
                        <div className="job-card-content-inline">
                            <p>Innovate Designs Co.</p>
                            <p className="job-type">Hybrid</p>
                            <a href="/apply">
                                <button className="apply-button">Apply</button>
                            </a>
                        </div>
                        <p>Location: City, Country</p>
                    </div>

                    <div className="job-card">
                        <h3>Marketing Intern</h3>
                        <div className="job-card-content-inline">
                            <p>Global Marketing Agency</p>
                            <p className="job-type">Internship</p>
                            <a href="/apply">
                                <button className="apply-button">Apply</button>
                            </a>
                        </div>
                        <p>Location: City, Country</p>
                    </div>

                    <div className="job-card">
                        <h3>Project Manager</h3>
                        <div className="job-card-content-inline">
                            <p>Leadership Solutions Ltd.</p>
                            <p className="job-type">Full Time</p>
                            <a href="/apply">
                                <button className="apply-button">Apply</button>
                            </a>
                        </div>
                        <p>Location: City, Country</p>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filters">
                        <h2>Filters</h2>

                        <label className="filter-label" htmlFor="location-filter">Location:</label>
                        <select className="filter-select" id="location-filter">
                            <option value="all">All</option>
                            <option value="city1">City 1</option>
                            <option value="city2">City 2</option>
                        </select>

                        <label htmlFor="job-type-filter">Job Type:</label>
                        <select className="filter-select" id="job-type-filter">
                            <option value="all">All</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="internship">Internship</option>
                        </select>

                        <label className="filter-label" htmlFor="experience-filter">Experience:</label>
                        <select className="filter-select" id="experience-filter">
                            <option value="all">All</option>
                            <option value="entry-level">Entry Level</option>
                            <option value="mid-level">Mid Level</option>
                            <option value="senior">Senior</option>
                        </select>

                        <label className="filter-label" htmlFor="salary-filter">Salary Range:</label>
                        <select className="filter-select" id="salary-filter">
                            <option value="all">All</option>
                            <option value="0-50000">$0 - $50,000</option>
                            <option value="50001-100000">$50,001 - $100,000</option>
                            <option value="100001-150000">$100,001 - $150,000</option>
                        </select>

                        <label htmlFor="education-filter">Education Level:</label>
                        <select className="filter-select" id="education-filter">
                            <option value="all">All</option>
                            <option value="high-school">High School</option>
                            <option value="associate">Associate's Degree</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="doctorate">Doctorate</option>
                        </select>

                        <label htmlFor="category-job-filter">Job Category:</label>
                        <select className="filter-select" id="category-job-filter">
                            <option value="all">All</option>
                            <option value="tech">Technology</option>
                            <option value="finance">Finance</option>
                            <option value="marketing">Marketing</option>
                        </select>
                    </div>
                </div>

                <div className="pagination">
                    <a href="#" className="page-link">Previous Page</a>
                    <a href="#" className="page-link active">1</a>
                    <a href="#" className="page-link">2</a>
                    <a href="#" className="page-link">3</a>
                    <a href="#" className="page-link">Next Page</a>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Your Job Platform. All rights reserved.</p>
            </footer>
        </>
    );
};

export default JobListingComponent;
