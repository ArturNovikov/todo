import React, { Component } from 'react';
import NewTaskForm from '../NewTaskForm';
import AppHeader from '../appHeader';
import TaskList from '../TaskList';
import Footer from '../Footer'
import './app.css'

export default class App extends Component {

    maxId = 100;

    state = {
        tasks: [
            { description: 'Completed task', completed: true, status: 'completed', id: 1 },
            { description: 'Editing task', completed: false, status: 'editing', id: 2 },
            { description: 'Active task', completed: false, status: 'active', id: 3},
        ]
    };

    handleInputValueChange = (id, newInputValue) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.map ( task => 
                task.id !== id ? task : { ...task, 
                description: newInputValue
            })
        }));
    };

    onSubmitChange = (id, newStatus) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.map( task => 
                task.id !== id ? task : { ...task,
                    status: 'active'
            })
        }));
    };

    onTaskStatusChange = (id, newCompletedStatus) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.map( task =>
                task.id !== id ? task : { ...task,
                completed: newCompletedStatus,
                status: newCompletedStatus ? 'completed' : 'active'}),
        }));
    };

    onEdit = (id) => {
        this.setState(({tasks}) => ({
            tasks: tasks.map( task => 
                task.id !== id ? task : { ...task,
                status: 'editing'
            }),
        }));
    }

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
    
    addItem = (text) => {
    
        const newItem = {
            description: text,
            completed: false,
            status: 'active',
            id: this.maxId++
        };

        this.setState(({ tasks }) => {
            
            const newArr = [
                ...tasks,
                newItem
            ];

            return {
                tasks: newArr
            };

        });
    };
    
    render() {
        return (
            <div>
            <section className='todoapp'>
                <header className='header'>
                    <AppHeader />
                    <NewTaskForm onItemAdded = { this.addItem }/>
                </header>
                <section className='main'>
                    <TaskList 
                        tasks={ this.state.tasks }
                        onTaskStatusChange = { this.onTaskStatusChange }
                        onDeleted = { this.deleteItem }
                        onEdit={ this.onEdit }
/*                         onTaskEdited={ this.onTaskEdited }
                        onDescriptionChangeFunc={ this.onDescriptionChangeFunc }
                        changeStatusToActive={ this.changeStatusToActive }  */
                        onInputChange = { this.handleInputValueChange }
                        onInputSubmit = { this.onSubmitChange }
                    />
                    <Footer />
                </section>
            </section>
            </div>
        );
    };
};

