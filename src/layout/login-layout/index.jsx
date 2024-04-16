import React, { useState } from 'react';
import "./style.scss"

function index({setIsLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let token = {
            username: username,
            password: password
        }
        setIsLogin(token);
        localStorage.setItem('token', JSON.stringify(token));

        
        
    };
    
    return <>
        <div className="wrapper">
            <div class="signup-container">
                <form onSubmit={handleSubmit} class="signup-form">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Full Name" required value={username} onChange={handleUsernameChange} />
                    <input type="password" placeholder="Password" required  value={password} onChange={handlePasswordChange} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>

    </>
}

export default index;