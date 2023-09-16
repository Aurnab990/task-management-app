import React from 'react';
import '../../Style/HomeStyle/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("Loggedin");
        navigate("/");
    }
    return (
        <div>
            <nav className='items'>
                <Link to={'/home'}><a>Profile</a></Link>
                <Link to={'/home/addtask'}><a>ADD TASK</a></Link>
                <Link to={'/home/alltask'}><a>ALL TASK</a></Link>
                <a href='#'>ADD MEMBER</a>

                <button onClick={handleLogout}>LOGOUT</button>
            </nav>
        </div>
    );
};

export default Navbar;