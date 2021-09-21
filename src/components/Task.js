import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // task class with condition in template literal - if the task.reminder is true then class reminder (adding green left border). else there is no class on it
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
        // need the id so call a function and then pass in onToggle
        // needs to be task.id not just id = since passing in task as a prop (line 4)
        onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
