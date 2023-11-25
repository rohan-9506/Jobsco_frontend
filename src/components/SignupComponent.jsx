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

function Signup() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [username, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://jobsco-goe2.onrender.com/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, password, email, repassword }),
            });   
            const data = await response.json();
            if (response.status === 201) {
                history.push("/home");
                localStorage.setItem("signed-in", true);
            } else {
                console.log(data.message); // Log the error message
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
        <Navbar />
        <form onSubmit={handleSubmit} id="loginForm">
            <style>
                {`
                    body, html {
                        margin: 0;
                        padding: 0;
                        background-color: #3498db;
                        font-family: Arial, sans-serif;
                    }
                    .center-content {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .logo {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }

                    .container {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 20px;
                        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
                        border-radius: 10px;
                        overflow: hidden;
                        max-width: 400px;
                        margin: 40px auto;
                        padding: 20px;
                    }

                    label {
                        margin-bottom: 8px;
                        font-weight: bold;
                    }

                    input[type="text"],
                    input[type="email"],
                    input[type="password"] {
                        padding: 8px;
                        margin-bottom: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        width: 100%;
                    }

                    button {
                        padding: 10px 20px;
                        background-color: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        width: 100%;
                        font-size: 18px;
                        margin-top: 20px;
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
                    }
                `}
            </style>
            <div className="center-content">
                <img src="./logo.jpeg" alt="Logo" className="logo" />
                <h2>Signup</h2>
            </div>
            <div className="container">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setuserName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="repassword">Confirm Password</label>
                <input
                    type="password"
                    value={repassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    required
                />

<button type="submit">Signup</button>
<label>
    <input type="checkbox" checked="checked" name="remember" /> Remember me
</label>
</div>

<div className="container" style={{backgroundColor: '#f8f9fa', marginTop: '20px', padding: '20px'}}>
    <span className="psw">Forgot <a href="/forgot-password" style={{color: '#3498db'}}>password?</a></span>
</div>

<div className="container" style={{backgroundColor: '#f8f9fa', marginTop: '20px', padding: '20px'}}>
    <span id="createAccount">Already have an account? <a href="/login" style={{color: '#3498db'}}>Login</a></span>
</div>
</form>
</>
);
}

export default Signup;