// import Table from 'cdbreact/dist/components/Table';
// import Button from 'cdbreact/dist/components/Button';
// import Pagination from 'cdbreact/dist/components/Pagination';
import React from 'react';
import './AttendanceView.css'
function TitleAttendanceView() {
  return (
    <div className='TitleAttendanceView'>
      <h1>Danh sách nhân viên check-in</h1>
    </div>
  );
}
function TableAttendanceView() {
  return (
    <div className='TableAttendanceView'>
      <table>
        <thead className='tbTableAttendanceView'>
          <tr>
            <th>Tên nhân viên</th>
            <th>Thời gian làm việc</th>
            <th>Ca làm việc</th>
            <th>Thời gian check-in</th>
          </tr>
        </thead>
        <tbody className='tbTableAttendanceView'>
          <tr>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr>
          <tr className='even'>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr>
          <tr>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr>
          <tr className='even'>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr>
          <tr>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr>
          {/* <tr className='even'>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr>
          <tr>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr> */}
          {/* <tr className='even'>
            <td>Nguyen Van A</td>
            <td>6:00-9:00</td>
            <td>12-05-2023</td>
            <td>5:59</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
function PaginationAttendanceView() {
    return (
        <div className='PaginationAttendanceView'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
        </div>
    );
}
function AttendanceView() {
    return (
        <div className='AttendanceView'>
        <TitleAttendanceView />
        <TableAttendanceView />
        <PaginationAttendanceView />
        </div>
    );
}
export default AttendanceView;
