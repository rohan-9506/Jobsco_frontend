import React from 'react';

const ForgotPasswordComponent = () => {
    return (
        <>
            <style>
                {`
                    body {
                        font-family: 'Lato', sans-serif;
                        background: linear-gradient(to bottom, #70e1f5, #f5ede4);
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        height: 100vh;
                    }

                    #navbar {
                        background-color: #2260b7;
                        padding: 10px;
                        width: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    #navbar a {
                        color: #fff;
                        text-decoration: none;
                        margin: 0 15px;
                    }

                    #navbar #logo {
                        font-size: 24px;
                        font-weight: bold;
                        color: white;
                        margin-right: auto;
                    }

                    .container {
                        padding: 50px;
                        background-color: #5a91f1;
                        border-radius: 8px;
                        width: 300px;
                        text-align: center;
                        margin-top: 130px;
                    }

                    input[type="email"] {
                        width: 100%;
                        padding: 10px;
                        margin: 8px 0;
                        display: inline-block;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        box-sizing: border-box;
                    }

                    input[type="email"]:focus {
                        border-color: turquoise;
                        outline: none;
                    }

                    .submit-btn {
                        background-color: turquoise;
                        color: black;
                        padding: 14px 0;
                        margin-top: 10px;
                        cursor: pointer;
                        width: 100%;
                        border: none;
                        border-radius: 4px;
                        opacity: 0.9;
                    }

                    .submit-btn:hover {
                        opacity: 1;
                    }

                    .back-to-login {
                        margin-top: 20px;
                        text-align: center;
                        color: #000000;
                    }

                    .back-to-login a {
                        color: #000000;
                        text-decoration: none;
                        font-weight: bold;
                    }
                `}
            </style>

            <div id="navbar">
                <div id="logo">
                    <img src="logo.jpeg" alt="Your Logo" />
                </div>
                <a href="/">Home</a>
                <a href="/about-us">About</a>
                <a href="/contact-us">Contact</a>
            </div>

            <div className="container">
                <form>
                    <h1>Forgot Password</h1>
                    <p>Please enter your email address to reset your password.</p>
                    <hr />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />

                    <button className="submit-btn" type="submit">Reset Password</button>
                </form>

                <div className="back-to-login">
                    <p>Remembered your password? <a href="/login">Login</a></p>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordComponent;
