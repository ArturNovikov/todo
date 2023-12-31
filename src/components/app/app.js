import React, { Component } from 'react';

import NewTaskForm from '../NewTaskForm';
import AppHeader from '../appHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './app.css';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

export default class App extends Component {
  maxId = 100;

  state = {
    tasks: [],
    activeFilter: 'All',
  };

  clearCompleted = () => {
    this.setState(({ tasks }) => {
      const stateCompleted = tasks.filter((task) => !task.completed);
      return {
        tasks: stateCompleted,
      };
    });
  };

  changeFilter = (newFilter) => {
    this.setState({
      activeFilter: newFilter,
    });
  };

  handleInputValueChange = (id, newInputValue) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) => (task.id !== id ? task : { ...task, description: newInputValue })),
    }));
  };

  onSubmitChange = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        const { completed } = task;
        const newStatus = completed ? 'completed' : 'active';

        return { ...task, status: newStatus };
      }),
    }));
  };

  onTaskStatusChange = (id, newCompletedStatus) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id !== id
          ? task
          : { ...task, completed: newCompletedStatus, status: newCompletedStatus ? 'completed' : 'active' }
      ),
    }));
  };

  onEdit = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) => (task.id !== id ? task : { ...task, status: 'editing' })),
    }));
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);

      const newArray = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];

      return {
        tasks: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      description: text,
      completed: false,
      status: 'active',
      id: this.maxId++,
      created: new Date().toISOString(),
    };

    this.setState(({ tasks }) => {
      const newArr = [...tasks, newItem];

      return {
        tasks: newArr,
      };
    });
  };

  render() {
    const { tasks, activeFilter } = this.state;
    const incompleteItemsCount = tasks.filter((task) => !task.completed).length;
    const filterFunction = FILTER_MAP[activeFilter] || FILTER_MAP.All;
    const filteredTasks = tasks.filter(filterFunction);

    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <AppHeader />
            <NewTaskForm onItemAdded={this.addItem} />
          </header>
          <section className="main">
            <TaskList
              tasks={filteredTasks}
              onTaskStatusChange={this.onTaskStatusChange}
              onDeleted={this.deleteItem}
              onEdit={this.onEdit}
              onInputChange={this.handleInputValueChange}
              onInputSubmit={this.onSubmitChange}
            />
            <Footer
              changeFilter={this.changeFilter}
              clearCompleted={this.clearCompleted}
              incompleteItems={incompleteItemsCount}
            />
          </section>
        </section>
      </div>
    );
  }
}
