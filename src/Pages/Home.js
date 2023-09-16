import React from 'react';
import '.././Style/HomeStyle/Home.css'
import Navbar from '../Components/Navbar/Navbar';

const Home = () => {
    const newusername = JSON.parse(localStorage.getItem("user"));
    console.log(newusername);
    return (
        <div className='home-section'>
            <Navbar></Navbar>
            <div class="card">
                <div class="image"></div>
                <div class="content">               
                        <span class="title">
                            User Name: {newusername.username}
                        </span>                   

                    <p class="desc">
                        {newusername.bio}
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Home;