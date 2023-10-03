import React, { useState } from 'react';

import NewTaskForm from '../NewTaskForm';
import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './app.css';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [maxId, setMaxId] = useState(100);

  const clearCompleted = () => {
    const stateCompleted = tasks.filter((task) => !task.completed);
    setTasks(stateCompleted);
  };

  const changeFilter = (newFilter) => {
    setActiveFilter(newFilter);
  };

  const handleInputValueChange = (id, newInputValue) => {
    setTasks((tasks) => tasks.map((task) => (task.id !== id ? task : { ...task, description: newInputValue })));
  };

  const onSubmitChange = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        const { completed } = task;
        const newStatus = completed ? 'completed' : 'active';
        return { ...task, status: newStatus };
      })
    );
  };

  const onTaskStatusChange = (id, newCompletedStatus) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id !== id
          ? task
          : { ...task, completed: newCompletedStatus, status: newCompletedStatus ? 'completed' : 'active' }
      )
    );
  };

  const onEdit = (id) => {
    setTasks((tasks) => tasks.map((task) => (task.id !== id ? task : { ...task, status: 'editing' })));
  };

  const deleteItem = (id) => {
    const idx = tasks.findIndex((el) => el.id === id);
    const newArray = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
    setTasks(newArray);
  };

  const addItem = (text, min, sec) => {
    let timerValue = 0;
    if (min && !sec) {
      timerValue = Number(min) * 60;
    } else if (!min && sec) {
      timerValue = Number(sec);
    } else if (min && sec) {
      timerValue = Number(min) * 60 + Number(sec);
    }
    const newItem = {
      description: text,
      completed: false,
      status: 'active',
      id: maxId,
      created: new Date().toISOString(),
      timer: timerValue,
      isRunning: false,
      initialTimer: timerValue,
      countingUp: timerValue === 0,
    };
    setTasks([...tasks, newItem]);
    setMaxId(maxId + 1);
  };

  const onStartTimer = (id) => {
    setTasks((tasks) => tasks.map((task) => (task.id !== id ? task : { ...task, isRunning: true })));
  };

  const onStopTimer = (id) => {
    setTasks((tasks) => tasks.map((task) => (task.id !== id ? task : { ...task, isRunning: false })));
  };

  const onTick = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id !== id || !task.isRunning) {
          return task;
        }

        if (task.countingUp) {
          return { ...task, timer: task.timer + 1 };
        }

        if (task.timer > 0) {
          return { ...task, timer: task.timer - 1 };
        }

        if (task.timer === 0 && task.initialTimer > 0) {
          return { ...task, isRunning: false };
        }

        return task;
      })
    );
  };

  const incompleteItemsCount = tasks.filter((task) => !task.completed).length;
  const filterFunction = FILTER_MAP[activeFilter] || FILTER_MAP.All;
  const filteredTasks = tasks.filter(filterFunction);

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <AppHeader />
          <NewTaskForm onItemAdded={(text, min, sec) => addItem(text, min, sec)} />
        </header>
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onTaskStatusChange={onTaskStatusChange}
            onDeleted={deleteItem}
            onEdit={onEdit}
            onInputChange={handleInputValueChange}
            onInputSubmit={onSubmitChange}
            onStartTimer={onStartTimer}
            onStopTimer={onStopTimer}
            onTick={onTick}
          />
          <Footer changeFilter={changeFilter} clearCompleted={clearCompleted} incompleteItems={incompleteItemsCount} />
        </section>
      </section>
    </div>
  );
}

export default App;
