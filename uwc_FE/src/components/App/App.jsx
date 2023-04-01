import './App.css';
import Sidebar from './sidebar';
import Taskassign from './Task-assign';
import Taskassign2 from './Task-assign-2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route exact path="/Task-assign" Component={Taskassign} />
          <Route exact path="/Task-assign-2" Component={Taskassign2} />
        </Routes>
        {/* <Taskassign /> */}
        {/* <Taskassign2 /> */}
      </div>
    </Router>
  );
}

export default App;
