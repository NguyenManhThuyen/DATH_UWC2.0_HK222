import './App.css';
import Sidebar from './sidebar';
import Taskassign from '../pages/taskAssign/Task-assign';
import Taskassign2 from '../pages/taskAssign1/Task-assign-2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Calendar from './Calendar_View';
import Login from '../pages/LoginPage';
import React, { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <Router>
      <div className="App">
      {isLoggedIn && <Sidebar />}
        {/* <Sidebar /> */}
        <Routes>
        <Route exact path="/" element={<Login onLogin={handleLogin} />} />
          {isLoggedIn && <Route exact path="/Taskassign" element={<Taskassign />} />}
          {isLoggedIn && <Route exact path="/Task" element={<Taskassign2 />} />}
        {/* <Route exact path="/" Component={Login} />
          <Route exact path="/Taskassign" Component={Taskassign} />
          <Route exact path="/Task" Component={Taskassign2} /> */}
        </Routes>
        {/* <Taskassign /> */}
        {/* <Taskassign2 /> */}
        {/* <Calendar /> */}
      </div>
    </Router>
  );
}

export default App;
