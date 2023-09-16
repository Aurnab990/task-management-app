import React, { useState } from 'react';
import './../../Style/LoginStyle/Login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const handleLogin = (e)=>{
        e.preventDefault();
        const userlog = JSON.parse(localStorage.getItem("user"));
        console.log(userlog);
        if(input.email === userlog.email && input.password === userlog.password){
            navigate("/home");

        }else{
            alert("Wrong password or email");
            

        }
    }
    return (
        <div>
            <div class="login-page">
                <div class="form">
                    <form onSubmit={handleLogin} class="login-form">
                        <input
                        name = "email"
                        value={input.email}
                        onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})} type="text" placeholder="email" required/>
                        <input
                        name = "password"
                        value={input.password}
                        onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                        type="password" placeholder="password" required/>
                        <button>login</button>
                        <p class="message">Not registered? <Link to={'signup'}>Create an account</Link></p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;