import { useState } from 'react';
import { staffData } from '@mocks/staffdata';
// import StaffInfo from './StaffInfo';

import './StaffViewContent.scss';


import React, {useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../../../lib/firebase';
import { ListInlineItem } from 'reactstrap';



const StaffViewContent = () => {
  const [chosen, setChosen] = useState(0);

  const[movies,setMovies] = useState([])

  useEffect(() => {
      getMovies()
  }, [])


  useEffect(() => {
      console.log(movies)
  }, [movies])

  function getMovies() {
      const movieCollectionRef = collection(db,'thuyen')
      getDocs(movieCollectionRef)
      .then(response => {
          const movies = response.docs.map(doc => ({
              data:doc.data(),
              id:doc.id,
          }))
          // console.log(response.docs)
          setMovies(movies)
      })
      .catch(error => console.error(error.message))
  }

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Nhân viên</h3>
          {staffData.map((item, index) => (
            <button
              key={index}
              className={index === chosen ? 'button activeButton' : 'button inactiveButton'}
              onClick={() => setChosen(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="grid-item">
          <h3>{staffData[chosen].name}
          </h3>

            {
              movies.map(movie => (
                <li key = {movie.id}>
                     <li>{movie.data.check}</li>
                     {/* <li>{movie.data.email}</li>
                     <li>{movie.data.id}</li>
                     <li>{movie.data.name}</li>
                     <li>{movie.data.role}</li> */}
                     {/* <StaffInfo data = {movie.data}/> */}
                </li>
            ))
            }
      
          {/* {
            <StaffInfo data={staffData[chosen]} />
          } */}
        </div>
      </div>
    </>
  );
};

export default StaffViewContent;