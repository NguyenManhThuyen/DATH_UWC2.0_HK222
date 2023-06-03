import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../lib/firebase";
import { useEffect, useRef, useState } from 'react';
import { Table } from 'reactstrap';


const TasksTable = () => {
  const [stateData, setStateData] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])
  const data = useRef(null);
  function fetchData() {
    const movieCollectionRef = collection(db,'data')
    getDocs(movieCollectionRef)
    .then(response => {
        const movies = response.docs.map(doc => ({
            data:doc.data(),
            id:doc.id,
        }))
        // console.log(response.docs)
        setStateData(movies)
      })
      .catch(error => console.error(error.message))
    }
    if(stateData[0]) {
      console.log("oke", stateData[0]?.data?.data[0]?.StaffData)
    }
  data.current = stateData[0]?.data?.data[0]?.StaffData;
  console.log("data", data.current);
  if(data.current) {
    return (
      <Table hover borderless striped>
        <thead className="table-head-row">
          <tr>
            <th>STT</th>
            <th>Địa điểm</th>
            <th>Nhóm trưởng</th>
            <th>Thành viên</th>
          </tr>
        </thead>
        <tbody>
          {
            data.current.map((item, index) => (
              <tr className={(index + 1) % 2 == 0 ? 'even-row' : 'odd-row'} key={'task-row-' + index}>
                <td>{index + 1}</td>
                <td>{item.address}</td>
                <td>{item.name}</td>
                <td>
                  {item?.ShiftData.map((janitor) => (
                    <>
                      {janitor?.task?.details?.member[0]}
                      <br />
                    </>
                  ))}
                </td>
              </tr>
            ))
          }
            
        </tbody>
      </Table>
    );
  }
};

export default TasksTable;
