import React from 'react';
import Header from '../pages/ShiftPage/Header';
import Filter from '../pages/ShiftPage/Filter';
import ShiftTable from '../pages/ShiftPage/ShiftTable';
const Total = () => {
    return (
        <div className="w-[calc(100%-90px)] 2xl:w-[calc(100%-300px)] ml-auto p-3">

            <Header></Header>
            <Filter></Filter>
            <ShiftTable></ShiftTable>

        </div>
    );
};

export default Total;