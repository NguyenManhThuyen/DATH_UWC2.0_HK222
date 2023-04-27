import Sidebar from '@components/App/sidebar';
import React from 'react';
import Header from './Header';
import Filter from './Filter';
import ShiftTable from './ShiftTable';

const TaskManagement = () => {
    return (
        <div className="flex w-full">
            <Sidebar/>
            <div className="w-[calc(100%-300px)] ml-auto p-3">
                <Header></Header>
                <Filter></Filter>
                <ShiftTable></ShiftTable>
        </div>
        </div>
    );
};

export default TaskManagement;