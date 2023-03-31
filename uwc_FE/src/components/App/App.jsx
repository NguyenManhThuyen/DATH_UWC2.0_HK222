import './App.css';
import Sidebar from './sidebar';
import Taskassign from './Task-assign';
import Taskassign2 from './Task-assign-2';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Taskassign />
        {/* <Taskassign2 /> */}
      </div>
    </Router>
  );
}

export default App;
