import './App.css';
import { TodoView } from './component/TodoView/TodoView';

function App() {
  return (
    <div className="app">
      <div className='todo-container'>
        <TodoView />
      </div>
    </div>
  );
}

export default App;
