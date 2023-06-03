import { useParams } from 'react-router-dom';
import TaskListViewContentLeft from './TaskListViewContentLeft';
import TaskListViewContentRight from './TaskListViewContentRight';
import { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import {db} from '../../../lib/firebase';

const TaskListViewContent = () => {
  const taskListView_Content = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    fontSize: '20px',
  };
  const { slug } = useParams();
  const [stateData, setStateData] = useState([]);
  const details = useRef(null);
  // console.log(details.current === null);
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
          details.current = stateData[0].data.data[0].StaffData[i].ShiftData[j];
          break;
        }
      }
      if(details.current !== null) break;
    }

  if(stateData[0]) {
    return (
      <div style={taskListView_Content} className="taskListView_Content">
        <TaskListViewContentLeft
          idShift= {slug}
          dayShift={new Date(details.current.startTime.seconds * 1000).toLocaleDateString("vi-VI")}
          statusShift={details.current.status}
          startShift={new Date(details.current.startTime.seconds * 1000).toLocaleTimeString()}
          endShift={new Date(details.current.endTime.seconds * 1000).toLocaleTimeString()}
        />
        <TaskListViewContentRight timeProgress="1" idProgress={slug} />
      </div>
    );
  }
};

export default TaskListViewContent;
