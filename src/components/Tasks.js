import React from 'react';
import { useState } from 'react';


const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting with coding classmates',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Grocery shopping',
            day: 'Feb 5th at 12:30pm',
            reminder: false,
        }
    ])
    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}>(task.text</h3>))}
        </div>
    )
}

export default Tasks;
