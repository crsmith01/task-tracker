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
  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
