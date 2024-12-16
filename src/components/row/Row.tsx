import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../axios/axios'
import YouTube from 'react-youtube'
const movieTrailer = require( 'movie-trailer' )

interface Movies {
    
}




function Row(props:
    { title: string, fetchUrl: string, isLargeRow?: boolean}) {
        const [movies, setMovie] = useState([]);
        const [modal, setModal] = useState(false)
        const [trailerURL, setTrailerURL] = useState<string | null>();

        const base_url ="https://image.tmdb.org/t/p/original/";

        useEffect(()=>{
            const fetchData =async () => {
                const getRequest = await axios.get(props.fetchUrl);
                setMovie(getRequest.data.results)
                return getRequest;
            }
            fetchData()
        }, [props.fetchUrl])
        

        const handleClick = (movie: any) => {
            console.log(movie?.name || movie?.title)
            if (trailerURL) {
                setTrailerURL("")
            } else {
                movieTrailer(movie?.name || movie?.title || "" )
                .then((url: any) => {
                    const urlParams = new URLSearchParams(
                        new URL(url).search
                    )
                    setTrailerURL(urlParams.get("v"))
                })
                .catch((error: any) => console.log(error))
            }
            

        }

        const opts = {
            height: '400',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
        }
        
  return (
    <div className='row'>
        <h1 className='row__title'>{props.title}</h1>

        <div className="row__posters_wrapper">
            {movies.map(movie => (
                ((props.isLargeRow && (movie as any).poster_path) || 
                (!props.isLargeRow && (movie as any).backdrop_path)) && ( 
                <img onClick={() => handleClick(movie as any)}
                className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                key={(movie as any).id}
                src={`${base_url}${props.isLargeRow ? (movie as any).poster_path : (movie as any).backdrop_path}`}
                alt=""/>
                )
            )
            )}
        </div>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
    </div>
  )
}

export default Row