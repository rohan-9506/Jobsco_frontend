import React from 'react';

const ContactUsComponent = () => {
    return (
        <>
            <style>
                {`
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        margin: 0;
                        padding: 0;
                        background: linear-gradient(to bottom, #70e1f5, #f5ede4);
                        text-align: center;
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
                        color: white;
                        padding: 1em;
                        text-align: center;
                    }

                    nav a {
                        color: white;
                        text-decoration: none;
                        margin: 0 10px;
                    }

                    section {
                        display: flex;
                        justify-content: space-between;
                        padding: 2em;
                        align-items: flex-start;
                        flex-wrap: wrap;
                    }

                    .contact-form {
                        max-width: 600px;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        flex-grow: 1;
                        margin-left: 550px;
                    }

                    .contact-info {
                        max-width: 300px;
                        background-color: #fff;
                        padding: 40px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        margin-right: 100px;
                    }

                    .contact-info h2 {
                        font-size: 1.5em;
                        margin-bottom: 10px;
                    }

                    .contact-info p {
                        margin-bottom: 10px;
                    }

                    .contact-form label {
                        display: block;
                        margin-bottom: 0.5em;
                        font-weight: bold;
                    }

                    .contact-form input,
                    .contact-form textarea {
                        width: 100%;
                        padding: 0.5em;
                        margin-bottom: 1em;
                        box-sizing: border-box;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }

                    .contact-form button {
                        background-color: #2a5298;
                        color: white;
                        border: none;
                        padding: 1em 2em;
                        cursor: pointer;
                        border-radius: 4px;
                        font-weight: bold;
                        transition: background-color 0.3s ease;
                    }

                    .contact-form button:hover {
                        background-color: #555;
                    }
                `}
            </style>

            <header>
                <h1>Contact Us</h1>
            </header>

            <nav>
                <a href="/">Home</a>
                <a href="/contact-us">Contact</a>
                <a href="/job-portal">Post a Job</a>
            </nav>

            <section>
                <div className="contact-form">
                    <h2>Enter Message</h2><br/><br/><br/><br/>
                    <form action="#" method="post">
                        <label htmlFor="name">Your name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="subject">Enter Subject:</label>
                        <input type="text" id="subject" name="subject" required />

                        <label htmlFor="message">Enter Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">SEND</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Delhi.<br />India Gate, 123456</p>
                    <p>9876543211<br />Mon to Fri 9am to 6pm</p>
                    <p>jobsco@gmail.com</p>
                    <p>Send us your query anytime!</p>
                </div>
            </section>
        </>
    );
};

export default ContactUsComponent;
