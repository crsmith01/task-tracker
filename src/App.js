import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
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

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id);
    // filter is a high order array method that takes in a function. 
    // Don't want to show task with id because we're deleting it
    // setting tasks to the filtered tasks = immutable state (cannot change state itself)
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
      /> : 'There are currently no tasks to show.'}
    </div>
  );
}

export default App;
