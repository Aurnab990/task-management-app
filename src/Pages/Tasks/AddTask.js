import React, { useState, useEffect } from 'react';
import '../../Style/HomeStyle/Home.css';
import '../../Style/Pages/Addtask.css';
import Navbar from '../../Components/Navbar/Navbar';

const AddTask = () => {
    const [inputn, setInputn] = useState({
        title: "",
    });

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        // Retrieve the task list from local storage when the component mounts
        const storedTaskList = JSON.parse(localStorage.getItem("taskList"));
        if (storedTaskList) {
            setTaskList(storedTaskList);
        }
    }, []);

    const handleTaskTitle = (e) => {
        e.preventDefault();
        const newTask = { title: inputn.title };
        const updatedTaskList = [...taskList, newTask];
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
        setTaskList(updatedTaskList);
        setInputn({ title: "" }); // Clear the input field after adding a task
    }

    return (
        <div className='home-section'>
            <Navbar></Navbar>
            <div className='task-zone'>
                <form onSubmit={handleTaskTitle}>
                    <input
                        name='title'
                        type='text'
                        value={inputn.title}
                        onChange={(e) => setInputn({ title: e.target.value })}
                        placeholder='Type your task title'
                    />
                    <button>ADD TASK</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
