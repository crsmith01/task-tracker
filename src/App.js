import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from 'react';


function App() {
  // boolean set to false by default
  const [showAddTask, setShowAddTask] = useState(false);
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
      id: 3,
      text: 'Grocery shopping',
      day: 'Feb 5th at 12:30pm',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task);
    // give random number to id
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    // tasks that are there and adding the new task on
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id);
    // filter is a high order array method that takes in a function. 
    // Don't want to show task with id because we're deleting it
    // setting tasks to the filtered tasks = immutable state (cannot change state itself)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    // tasks is from state
    // task id in current iteration is equal to task that is passed in, then we have specific object, else it will be no change
    // spread operator 
    // set reminder to opposite of what it was (using ternary operator)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header
        // toggle between the form and the list = by setting it to the opposite of what it is
        onAdd={() => setShowAddTask(!showAddTask)} />
      {/* && here is a basically a shorter way of using a ternary function but without the else - so if it's true do this, if not do nothing  */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : 'There are currently no tasks to show.'}
    </div>
  );
}

export default App;