// src/components/LoginComponent.jsx

//import React from 'react';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#2260b7',
            color: 'white',
        }}>
            <div>
                <img src="logo.jpeg" alt="Logo" style={{height: '50px'}} />
            </div>
            <div>
                <a href="/" style={{marginRight: '10px', color: 'white'}}>Home</a>
                <a href="/about-us" style={{marginRight: '10px', color: 'white'}}>About</a>
                <a href="/contact-us" style={{color: 'white'}}>Contact</a>
            </div>
        </nav>
    );
}

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showerror, setshowerror] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://jobsco-goe2.onrender.com/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.status === 200) {
                history.push("/job-listings");
                localStorage.setItem("logged-in", true);
            } else {
                console.log(data.message); // Log the error message
                setshowerror(true)
                setTimeout(() => {
                    setshowerror(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <Navbar />
        <div id='login-page-form'>
        <form onSubmit={handleSubmit} id="loginForm">
        <style>
            {`
                body, html {
                    margin: 0;
                    padding: 0;
                    background-color: #3498db;
                    font-family: Arial, sans-serif;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 10;
                    margin: 0 auto;
                    background-color: #f0f8ff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                }

                /* Adjustments for form elements */
                label {
                    margin-bottom: 8px;
                    font-weight: bold;
                }

                input[type="text"],
                input[type="password"] {
                    padding: 8px;
                    width: 150px
                    margin-bottom: 10px;
                    margin-top: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
                }

                button {
                    padding: 10px 20px;
                    background-color: #3498db;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #2980b9;
                }

                .psw {
                    display: block;
                    text-align: right;
                }

                #createAccount {
                    text-align: center;
                    color: #000000;
                }
                #login-page-form {
                    min-height: 100vh;
                    display: flex;
                    justify-items: center;
                    align-items: center;
                    justify-content: center;
                    width: 100%; /* Adjust as needed */
                    height: 60%; /* Adjust as needed */

                }

                #login_form {
                    width: 350px;
                    padding: 50px;
                }
            `}
        </style>
            <div className="center-content">
            </div>
            <div className="container" id="login_form">
            <img src="logo.jpeg" alt="Logo" className="logo" />
                <h2>Login</h2><br/><br/><br/><br/>
                <label htmlFor="username"><b>Username</b></label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br/>

                <label htmlFor="password"><b>Password</b></label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br/>

                <button type="submit">Login</button>
                <br/>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label><br/>
                {showerror && <div style={{ color: 'red' }}>Failed to Login</div>}
            </div>

            <div className="container">
                <span className="psw right">Forgot <a href="/forgot-password">password?</a></span>
            </div>

            <div id="createAccount">
                Don't have an account? <a href="/signup">Create one</a>
            </div>
        </form>
        </div>
        </>
    );
}

export default Login;