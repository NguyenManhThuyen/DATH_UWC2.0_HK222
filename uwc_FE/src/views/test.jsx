import React, {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../../lib/firebase';
import { ListInlineItem } from 'reactstrap';

export default function Test() {
    const[movies,setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])


    useEffect(() => {
        console.log(movies)
    }, [movies])

    function getMovies() {
        const movieCollectionRef = collection(db,'staffData')
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
        <div>
            <h4>
                thuyen
            </h4>
            <ul>
                {movies.map(movie => (
                    <li key = {movie.id}> {movie.data.historyWorking[4]}</li>
                ))}
            </ul>
        </div>
    )
}
