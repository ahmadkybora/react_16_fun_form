import React, { useState } from 'react'

const Login = () => {
    
    const [payload, setPayload] = useState({username: '', password: ''});

    const onLogin = e => {
         e.preventDefault();
         console.log(payload);
    }

    return (
        <div className="container offset-md-4 col-md-4">
            <h1>Login Form</h1> 
            <form onSubmit={onLogin}>
                <div className="form-group col-md-12">
                    <input 
                        className="form-control" 
                        type="text" 
                        name="username" 
                        id="username" 
                        onChange={(e) => setPayload({...payload, username: e.target.value })}
                        value={payload.username}
                        placeholder="UserName ..."
                    />
                </div>
                <div className="form-group col-md-12">
                    <input 
                        className="form-control" 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) => setPayload({...payload, password: e.target.value })}
                        value={payload.password}
                        placeholder="Password ..."
                    />
                </div>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login;