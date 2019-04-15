import React from "react";

const LoginUser = ({ username,password, onLogin, onCheck }) => (
    <div>
        <h2>Login</h2>
        <div>
            <label>Username: </label>
            <input value={username} 
                onChange={ e => onCheck("username", e.target.value) } />
            <br />
            <label>Password: </label>
            <input value={password} 
                onChange={ e => onCheck("password", e.target.value) } />
            <br />
            <button onClick={onLogin}>Login</button>
        </div>
    </div>
);

export default LoginUser;