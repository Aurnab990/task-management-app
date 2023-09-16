import React, { Component }  from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import Home from './Pages/Home';
import AddTask from './Pages/Tasks/AddTask';
import Navbar from './Components/Navbar/Navbar';
import Alltasks from './Pages/Tasks/Alltasks';


const route = createBrowserRouter([
  {
    path: '/',
    element:<Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/home/addtask',
    element: <AddTask></AddTask>
  },
{
  path:'/home/alltask',
  element: <Alltasks></Alltasks>
}
]);

function App() {
  return (
    <div className="">
      
      
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
