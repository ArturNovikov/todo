
import NewTaskForm from '../NewTaskForm';
import AppHeader from '../appHeader';
import TaskList from '../TaskList';
import Footer from '../Footer'
import './app.css'

const App = () => {

    const tasks = [
        { description: 'Completed task', completed: true, status: 'completed', id: 'Compl' },
        { description: 'Editing task', completed: false, status: 'editing', id: 'Ed' },
        { description: 'Active task', completed: false, status: 'active', id: 'Ac' },
    ];

    return (
        <div>
        <section className='todoapp'>
            <header className='header'>
                <AppHeader />
                <NewTaskForm />
            </header>
            <section className='main'>
                <TaskList tasks={ tasks } />
                <Footer />
            </section>
        </section>
        </div>
    );

};

export default App;
