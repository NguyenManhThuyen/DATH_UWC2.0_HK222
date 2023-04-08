import React from 'react';
import './ListTypeCalendarView.css';
import { Link } from 'react-router-dom';
import './TaskListInfoCalendarView'


function HeaderListTypeCalendarView() {
  return (
    <div className="HeaderListTypeCalendarView">
      <h1>Danh sách ca</h1>
      <button>Tạo ca mới</button>
    </div>
  );
}
function TableListTypeCalendarView() {
  return (
    <div className="TableListTypeCalendarView">
      <table>
        <thead className="tbTableListTypeCalendarView">
          <tr>
            <th>Ngày</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
            <th>Trạng thái</th>
            <th>Số nhiệm vụ</th>
            <th>Hoàn thành</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tbTableListTypeCalendarView">
          <tr className='even'>
            <td>12-5-2023</td>
            <td>6:00</td>
            <td>9:00</td>
            <td>Đang diễn ra</td>
            <td>3</td>
            <td>2</td>
            <td>
            <Link to="/TaskListInfoCalendarView">
                <button>Show</button>
              </Link>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>12-5-2023</td>
            <td>6:00</td>
            <td>9:00</td>
            <td>Đang diễn ra</td>
            <td>3</td>
            <td>2</td>
            <td>
              <button>Show</button>
            </td>
            <td>...</td>
          </tr>
          <tr className='even'>
            <td>12-5-2023</td>
            <td>6:00</td>
            <td>9:00</td>
            <td>Đang diễn ra</td>
            <td>3</td>
            <td>2</td>
            <td>
            <button>Show</button>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>12-5-2023</td>
            <td>6:00</td>
            <td>9:00</td>
            <td>Đang diễn ra</td>
            <td>3</td>
            <td>2</td>
            <td>
              <button>Show</button>
            </td>
            <td>...</td>
          </tr>
          <tr className='even'>
            <td>12-5-2023</td>
            <td>6:00</td>
            <td>9:00</td>
            <td>Đang diễn ra</td>
            <td>3</td>
            <td>2</td>
            <td>
              <button>Show</button>
            </td>
            <td>...</td>
          </tr>
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
function ListTypeCalendarView() {
  return (
    <div className='ListTypeCalendarView'>
      <HeaderListTypeCalendarView />
      <TableListTypeCalendarView />
      <PaginationAttendanceView />
    </div>
  );
}
export default ListTypeCalendarView;
