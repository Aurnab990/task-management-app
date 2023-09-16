import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import '.././../Style/Pages/Alltasks.css';

const Alltasks = () => {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    useEffect(() => {
        const allTasksList = JSON.parse(localStorage.getItem("taskList")) || [];
        const doneTasksList = JSON.parse(localStorage.getItem("doneTaskList")) || [];

        setTasks(allTasksList);
        setDoneTasks(doneTasksList);
    }, []);

    const handleTaskStatusChange = (index) => {
        const updatedTasks = [...tasks];
        const taskToMove = updatedTasks.splice(index, 1)[0]; // Remove the task at the specified index

        // Update the task to mark it as "done"
        taskToMove.done = true;

        // Update the "not done" tasks and "done" tasks arrays
        localStorage.setItem("taskList", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);

        const updatedDoneTasks = [...doneTasks, taskToMove];
        localStorage.setItem("doneTaskList", JSON.stringify(updatedDoneTasks));
        setDoneTasks(updatedDoneTasks);
    };

    return (
        <div>
            <div className='home-section'>
                <Navbar></Navbar>
                <div>
                    <h3>Processing Tasks</h3>
                    {tasks.map((task, index) => (
                        <div className='task-title' key={index}>
                            <h4>Task: {task.title}</h4>
                            <button onClick={() => handleTaskStatusChange(index)}>PROCESSING</button>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Done Tasks</h3>
                    {doneTasks.map((task, index) => (
                        <div className='done-task' key={index}>
                            <span style={{ color: 'green' }}>✓</span>
                            <h3>Task {index+1}: {task.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alltasks;
