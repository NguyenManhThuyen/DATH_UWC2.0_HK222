import { BrowserRouter as Router } from 'react-router-dom';
// ShiftPage Page
import Filter from '../ShiftPage/Filter';
import Header from '../ShiftPage/Header';
import ShiftTable from '../ShiftPage/ShiftTable';
// JobDetail
import JobDetail from '../DutyPage/JobDetail';
import DutyTable from '../DutyPage/DutyTable';
// Member Page
import MemberDetail from '../MemberPage/MemberDetail';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="flex">
      <Router>
          <Sidebar/>
      </Router>
      <div className="w-[calc(100%-90px)] 2xl:w-[calc(100%-300px)] ml-auto p-3">
        {/* Shift Page */}
          <Header></Header>
          <Filter></Filter>
          <ShiftTable></ShiftTable>

        {/* Duty Page */}
          {/* <JobDetail></JobDetail>
          <DutyTable></DutyTable> */}

        {/* Member Page */}
          {/* <MemberDetail></MemberDetail> */}
      </div>
    </div>
  )
}

export default App
