import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  // boolean set to false by default
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // for right when page loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      // add setTasks to the state and pass in tasksFromServer - aka fetched tasks
      setTasks(tasksFromServer);
    }

    getTasks();
    // This is where we'd pass in a value if we wanted that value to change when we did something - like user
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()

    console.log(data);
    // set data as the state

    return data;
  };

  // Fetch one task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()

    console.log(data);
    // set data as the state

    return data;
  };


  // Add Task
  const addTask = async (task) => {
    console.log(task);

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })

    // this data returned is just the new task that was added
    const data = res.json();
    // so we take the existing array of tasks and add the new one on
    setTasks([...tasks, data]);


    // // give random number to id
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // // tasks that are there and adding the new task on
    // setTasks([...tasks, newTask])
  };

  // Delete Task
  const deleteTask = async (id) => {
    console.log('delete', id);

    // delete from backend
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    // filter is a high order array method that takes in a function. 
    // Don't want to show task with id because we're deleting it
    // setting tasks to the filtered tasks = immutable state (cannot change state itself)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();

    console.log(id);
    // tasks is from state
    // task id in current iteration is equal to task that is passed in, then we have specific object, else it will be no change
    // spread operator 
    // set reminder to opposite of what it was (using ternary operator)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task))
  };

  return (
    <Router>
      <div className="container">
        <Header
          // toggle between the form and the list = by setting it to the opposite of what it is
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>

              {/* && here is a basically a shorter way of using a ternary function but without the else - so if it's true do this, if not do nothing  */}
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : ('There are currently no tasks to show.'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;