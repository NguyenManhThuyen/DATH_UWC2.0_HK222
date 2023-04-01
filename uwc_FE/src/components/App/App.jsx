import './App.css';
import Sidebar from './sidebar';
import AttendanceView from './AttendanceView';
import ListTypeCalendarView from './ListTypeCalendarView';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/* <AttendanceView /> */}
        <ListTypeCalendarView />
      </div>
    </Router>
  );
}

export default App;
