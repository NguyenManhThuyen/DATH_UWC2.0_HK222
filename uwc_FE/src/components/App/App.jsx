import './App.css';
import Sidebar from './sidebar';
import AttendanceView from './AttendanceView';
import ListTypeCalendarView from './ListTypeCalendarView';
import { BrowserRouter as Router } from 'react-router-dom';
import TaskListInfoCalendarView from './TaskListInfoCalendarView'
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/* <AttendanceView /> */}
        <ListTypeCalendarView />
        {/* <TaskListInfoCalendarView /> */}
      </div>
    </Router>
  );
}

export default App;
