import React, { useRef } from 'react';
import TableHeader from './Table/TableHeader';
import TableItem from './Table/TableItem';
import TableFooter from './Table/TableFooter';

const ShiftTable = () => {
    return (
        <div>
            <TableHeader
            tit1 = "Date"
            tit2 = "Start"
            tit3 = "End"
            tit4 = "Status"
            tit5 = "Duty"></TableHeader>

            <TableItem
            bg = "bg-white"
            cont1 = "12/05/2023"
            cont2 = "6:00"
            cont3 = "9:00"
            cont4 = "In Progress"
            cont5 = "2/3"></TableItem>            
            <TableItem
            bg = "bg-[#B2FFDA]"
            cont1 = "12/05/2023"
            cont2 = "6:00"
            cont3 = "9:00"
            cont4 = "In Progress"
            cont5 = "2/3"></TableItem>            
            <TableItem
            bg = "bg-white"
            cont1 = "12/05/2023"
            cont2 = "6:00"
            cont3 = "9:00"
            cont4 = "In Progress"
            cont5 = "2/3"></TableItem>            
            <TableItem
            bg = "bg-[#B2FFDA]"
            cont1 = "12/05/2023"
            cont2 = "6:00"
            cont3 = "9:00"
            cont4 = "In Progress"
            cont5 = "2/3"></TableItem>            
            <TableItem
            bg = "bg-white"
            cont1 = "12/05/2023"
            cont2 = "6:00"
            cont3 = "9:00"
            cont4 = "In Progress"
            cont5 = "2/3"></TableItem>            
            <TableItem
            bg = "bg-[#B2FFDA]"
            cont1 = "12/05/2023"
            cont2 = "6:00"
            cont3 = "9:00"
            cont4 = "In Progress"
            cont5 = "2/3"></TableItem>            

            <TableFooter></TableFooter>
        </div>
    );
};

export default ShiftTable;