import { FaEllipsisV } from 'react-icons/fa';
import { Table, Button } from 'react-bootstrap';

import './TaskListViewTable.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../lib/firebase";

const tasks = [
  {
    id: '1001',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
  {
    id: '1002',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
  {
    id: '1003',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
  {
    id: '1004',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
];

const TaskListViewTable = () => {
  const {slug} = useParams();
  const [stateData, setStateData] = useState([]);
  // console.log(details.current === null);
  let staffArr = [];
  useEffect(() => {
    fetchData()
  }, [])
  function fetchData() {
    const movieCollectionRef = collection(db,'data')
    getDocs(movieCollectionRef)
    .then(response => {
        const movies = response.docs.map(doc => ({
            data:doc.data(),
            id:doc.id,
        }))
        setStateData(movies)
      })
    .catch(error => console.error(error.message))
    }
    if(stateData[0]) {
      console.log(stateData[0]?.data?.data[0]?.StaffData);
    }
    const length = stateData[0]?.data?.data[0]?.StaffData.length;
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < stateData[0].data.data[0].StaffData[i].ShiftData.length; j++) {
        if(stateData[0].data.data[0].StaffData[i].ShiftData[j].id === slug) {
          staffArr.push(stateData[0].data.data[0].StaffData[i].ShiftData[j]);
        }
      }
    }
    console.log(staffArr);
    return (
      <Table hover borderless striped>
        <thead className="table-head-row">
          <tr>
            <th>Mã nhiệm vụ</th>
            <th>Trạng thái</th>
            <th>Mã phương tiện</th>
            <th>Tài xế</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {staffArr.map((item, index) => (
            <tr className={(index + 1) % 2 == 0 ? 'even-row' : 'odd-row'}>
              <td>{item.task.taskID}</td>
              <td>{item.task.status}</td>
              <td>{item.task.codeVehicle}</td>
              <td>{item.task.driver}</td>
              <td>
                <div className="btn-container">
                  <NavLink to={item.task.taskID}>
                    <Button className="task-show-btn" color="success">
                      Chi tiết
                    </Button>
                  </NavLink>
                </div>
              </td>
              <td>
                <FaEllipsisV />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
};

export default TaskListViewTable;
