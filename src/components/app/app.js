import React, { Component } from 'react';
import NewTaskForm from '../NewTaskForm';
import AppHeader from '../appHeader';
import TaskList from '../TaskList';
import Footer from '../Footer'
import './app.css'

export default class App extends Component {

    state = {
        tasks: [
            { description: 'Completed task', completed: true, status: 'completed', id: 1 },
            { description: 'Editing task', completed: false, status: 'editing', id: 2 },
            { description: 'Active task', completed: false, status: 'active', id: 3},
        ]
    };

    onTaskStatusChange = (id, newCompletedStatus) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.map( task =>
                task.id !== id ? task : { ...task,
                completed: newCompletedStatus,
                status: newCompletedStatus ? 'completed' : 'active'}),
        }));
    };

    deleteItem = (id) => {
        this.setState(({ tasks }) => {
    
          const idx = tasks.findIndex((el) => el.id === id);
    
          const newArray = [
            ...tasks.slice(0, idx), 
            ...tasks.slice(idx + 1)
          ];
    
          return {
            tasks: newArray
          };
        });
      };

    render() {
        return (
            <div>
            <section className='todoapp'>
                <header className='header'>
                    <AppHeader />
                    <NewTaskForm />
                </header>
                <section className='main'>
                    <TaskList 
                        tasks={ this.state.tasks }
                        onTaskStatusChange = { this.onTaskStatusChange }
                        onDeleted = { this.deleteItem }
                    />
                    <Footer />
                </section>
            </section>
            </div>
        );
    };
};

