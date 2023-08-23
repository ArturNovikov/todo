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
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === id ? { ...task, completed: newCompletedStatus, status: newCompletedStatus ? 'completed' : 'active' } : task
            ),
        }));
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
                    />
                    <Footer />
                </section>
            </section>
            </div>
        );
    };
};

