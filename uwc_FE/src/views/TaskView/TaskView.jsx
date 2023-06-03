import Sidebar from '@components/Sidebar/Sidebar';
import TaskInfo from './TaskInfo';
import TasksTable from './TasksTable';
import { Container, Row } from 'reactstrap';
import './TaskView.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../lib/firebase";

const TaskView = () => {
  const TaskView = {
    width: '100%',
    backgroundColor: '#f2f2f2',
    height: '100vh',
    overflow: 'scroll',
  };
  const [stateData, setStateData] = useState([]);
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
        // console.log(response.docs)
        setStateData(movies)
      })
      .catch(error => console.error(error.message))
    }
    if(stateData[0]) {
      console.log(stateData[0]?.data?.data[0]?.StaffData)
    }
  return (
    <>
      <Sidebar />
      <div id="workspace">
        <Container>
          <Row>
            <TaskInfo />
          </Row>
          <Row>
            <TasksTable />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TaskView;
