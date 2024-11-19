import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import './row.css'


function Row({isposter,title,fetchurl}) {
    const[movies,setMovies]=useState([])

   const base_url ="https://image.tmdb.org/t/p/original/"
    const fetchdata=async()=>{
        const response=await instance.get(fetchurl)
       setMovies(response.data.results);
        

    }
    useEffect(()=>{
        fetchdata()
    },[])

    console.log(movies);
    
  return (
    <div className='Row'>
       <h1>{title}</h1> 

       <div className='movies_row'>
        {
            movies.map(movie=>(
                
                <img className='movie' src={`${base_url}${isposter?movie.poster_path:movie.backdrop_path }`} alt="" />
              
            ))
        }
       </div>
      
    </div>
  )
}

export default Row
