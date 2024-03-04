import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../axios/axios'




function Row(props:
    { title: string, fetchUrl: string, isLargeRow?: boolean}) {
        const [movies, setMovie] = useState([]);
        const base_url ="https://image.tmdb.org/t/p/original/";

        useEffect(()=>{
            const fetchData =async () => {
                const getRequest = await axios.get(props.fetchUrl);
                setMovie(getRequest.data.results)
                return getRequest;
            }
            fetchData()
        }, [props.fetchUrl])
        console.log(movies)
        
  return (
    <div className='row'>
        <h1 className='row__title'>{props.title}</h1>

        <div className="row__posters_wrapper">
            {movies.map(movie => (
                ((props.isLargeRow && (movie as any).poster_path) || 
                (!props.isLargeRow && (movie as any).backdrop_path)) && ( 
                <img
                className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                key={(movie as any).id}
                src={`${base_url}${props.isLargeRow ? (movie as any).poster_path : (movie as any).backdrop_path}`}
                alt=""/>
                )
            )
            )}
        </div>
    </div>
  )
}

export default Row