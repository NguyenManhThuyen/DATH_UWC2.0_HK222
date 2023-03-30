import React, { useState } from 'react';
import TableFooter from '../Table/TableFooter';
import TableHeader from '../Table/TableHeader';
import TableItem from '../Table/TableItem';

const DutyTable = () => {
    return (
        <div>
            <TableHeader
            tit1 = "Duty ID"
            tit2 = "Status"
            tit3 = "Vehicle ID"
            tit4 = "Driver"
            tit5 = "Route ID"></TableHeader>

            <TableItem
            bg = "bg-[#B2FFDA]"
            cont1 = "#1001"
            cont2 = "In Progress"
            cont3 = "51-A1-45678"
            cont4 = "Thomas Tuchel"
            cont5 = "#LT1003"></TableItem>
            <TableItem
            bg = "bg-white"
            cont1 = "#1001"
            cont2 = "In Progress"
            cont3 = "51-A1-45678"
            cont4 = "Thomas Tuchel"
            cont5 = "#LT1003"></TableItem>
            <TableItem
            bg = "bg-[#B2FFDA]"
            cont1 = "#1001"
            cont2 = "In Progress"
            cont3 = "51-A1-45678"
            cont4 = "Thomas Tuchel"
            cont5 = "#LT1003"></TableItem>
            <TableItem
            bg = "bg-white"
            cont1 = "#1001"
            cont2 = "In Progress"
            cont3 = "51-A1-45678"
            cont4 = "Thomas Tuchel"
            cont5 = "#LT1003"></TableItem>
            <TableItem
            bg = "bg-[#B2FFDA]"
            cont1 = "#1001"
            cont2 = "In Progress"
            cont3 = "51-A1-45678"
            cont4 = "Thomas Tuchel"
            cont5 = "#LT1003"></TableItem>
            

            <TableFooter></TableFooter>
        </div>
    );
};

export default DutyTable;