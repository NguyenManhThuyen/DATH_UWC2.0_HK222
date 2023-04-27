import Sidebar from '@components/App/sidebar';
import React from 'react';
import JobDetail from './JobDetail';
import DutyTable from './DutyTable';

const TaskList = () => {
    return (
        <div className="flex" style={{width: "100%"}}>
            <Sidebar/>
            <div className="w-[calc(100%-300px)] ml-auto p-3">
                <JobDetail></JobDetail>
                <DutyTable></DutyTable>
            </div>
        </div>
    );
};

export default TaskList;