import React, { useRef, useState } from 'react';
import './../../Style/LoginStyle/Signup.css'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        bio: "",
        imageUrl: ""
});


    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/");
    };
    return (
        <div>
            <div class="login-page">
                <div class="form">
                    <form onSubmit={handleSignup} class="login-form">
                        <input 
                        name = "username"
                        value={input.name}
                        onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                         type="text" placeholder="username" required />
                        <input
                        name = "email"
                        value={input.name}
                        onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                        type="text" placeholder="email" required />
                        <input
                        name = "password"
                        value={input.name}
                        onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                        type="password" placeholder="password" required />
                        <input
                        name = "bio"
                        value={input.name}
                        onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                        type="text" placeholder="Bio under 20 words" required />
                        <input
                            name="imageUrl"
                            value={input.imageUrl}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            type="text"
                            placeholder="Image URL"
                        />
                        
                        <button onClick={() => handleSignup}>Sign up</button>
                        <p class="message">Already registered? <Link to={'/'}>Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;