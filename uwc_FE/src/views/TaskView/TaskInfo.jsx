import { useParams } from 'react-router-dom';
import TaskViewInfoLeft from './TaskViewInfoLeft';
import TaskViewInfoRight from './TaskViewInfoRight';
import { useEffect, useRef, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const TaskInfo = () => {
  const TaskView_Info = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    fontSize: '20px',
  };
  const {slug, slug2} = useParams();
  const detailsTask = useRef(null);
  const time = useRef(null);
  const [stateData, setStateData] = useState([]);
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
        // console.log(response.docs)
        setStateData(movies)
      })
      .catch(error => console.error(error.message))
    }
    if(stateData[0]?.data?.data[0]?.StaffData) {
      console.log(stateData[0]?.data?.data[0]?.StaffData);
    }
    const length = stateData[0]?.data?.data[0]?.StaffData.length;
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < stateData[0].data.data[0].StaffData[i].ShiftData.length; j++) {
        if(stateData[0].data.data[0].StaffData[i].ShiftData[j].id === slug) {
          staffArr.push(stateData[0].data.data[0].StaffData[i].ShiftData[j]);
          time.current = stateData[0].data.data[0].StaffData[i].ShiftData[j];
        }
      }
    }
    for(let i = 0; i < staffArr.length; i++) {
      if(staffArr[i].task.taskID === slug2) {
        detailsTask.current = staffArr[i].task;
      }
    }
  if(detailsTask.current) {
    return (
      <div style={TaskView_Info}>
        <TaskViewInfoLeft
          idTask={detailsTask.current.taskID}
          driver={detailsTask.current.driver}
          idRoute={new Date(time.current.startTime?.seconds * 1000).toLocaleTimeString()}
          idShift={new Date(time.current.endTime?.seconds * 1000).toLocaleTimeString()}
          idCar={detailsTask.current.codeVehicle}
          idEndShift={new Date(time.current.startTime?.seconds * 1000).toLocaleDateString("vi-VI")}
        />
        <TaskViewInfoRight />
      </div>
    );
  }
};

export default TaskInfo;
