import React from 'react';
import './TaskListInfoCalendarView.css';
import { FaCalendarAlt, FaClock, FaCheck  } from 'react-icons/fa';

function HeaderTaskListInfoCalendarView() {
  return (
    <div className="HeaderTaskListInfoCalendarView">
      <h2>Danh sách nhiệm vụ</h2>
      <button>
        <span>+</span>Tạo nhiệm vụ mới
      </button>
    </div>
  );
}
function InfoTitleAttendanceView() {
    return (
        <div className="InfoTitleAttendanceView">
            <div className="col1">
                <h3>
                <a href='#'>{'\u2190'}</a>Thông tin ca #4001
                </h3>
                <div className='col1-info'>
                <div className="col1-info-left">
                    <p>
                    <FaCalendarAlt />
                    <span>Ngày:</span> 12/05/2023
                    </p>
                    <button>Đang diễn ra</button>
                </div>
                <div className="col1-info-right">
                    <p>
                    <FaClock />
                    <span>Giờ bắt đầu:</span> 6:00
                    </p>
                    <p>
                    <FaClock />
                    <span>Giờ bắt đầu:</span> 6:00
                    </p>
                </div>
                </div>
            </div>
            <div className="col2">
                <h3>Thông báo tiến độ</h3>
                <div className='col2-info'>
                    <p><i>1 phút trước #1001</i></p>
                    <h4>Cập nhật đã thu gom</h4>
                    <p><i>Xác nhận</i><FaCheck className='tick-icon'/></p>
                </div>
            </div>
        </div>
    );
}
function TableTaskListInfoCalendarView() {
    return(
        <div className='TableTaskListInfoCalendarView'>
            <table>
                <thead>
                    <tr>
                        <th>Mã nhiệm vụ</th>
                        <th>Status</th>
                        <th>Mã Phương tiện</th>
                        <th>Tài xế</th>
                        <th>Mã lộ trình</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#1001</td>
                        <td>Đang diễn ra</td>
                        <td>51-A1-45678</td>
                        <td>Nguyễn Văn A</td>
                        <td>Mã lộ trình</td>
                        <td><button>Show</button></td>
                        <td>...</td>
                    </tr>
                    <tr className='even'>
                        <td>#1001</td>
                        <td>Đang diễn ra</td>
                        <td>51-A1-45678</td>
                        <td>Nguyễn Văn A</td>
                        <td>Mã lộ trình</td>
                        <td><button>Show</button></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>#1001</td>
                        <td>Đang diễn ra</td>
                        <td>51-A1-45678</td>
                        <td>Nguyễn Văn A</td>
                        <td>Mã lộ trình</td>
                        <td><button>Show</button></td>
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
function TaskListInfoCalendarView() {
    return (
        <div className="TaskListInfoCalendarView">
        <HeaderTaskListInfoCalendarView />
        <InfoTitleAttendanceView />
        <TableTaskListInfoCalendarView />
        <PaginationAttendanceView />
        </div>
    );
}
export default TaskListInfoCalendarView;
