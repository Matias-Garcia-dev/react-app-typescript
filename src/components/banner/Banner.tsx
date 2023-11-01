import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from "../axios/axios"
import request from "../axios/Requiest"

const Banner = () => {
    interface Movies {
        backdrop_path: string;
    };
    const [movie, setMovie] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const getRequest = await axios.get(request.fetchNetfelixOriginals);
            setMovie(
                getRequest.data.results[
                    Math.floor(Math.random() * getRequest.data.results.length-1)
                ]
            );
            return getRequest;
        }
        fetchData()
    }, [])

    console.log(movie)

   const  truncate = (string: string, n: number) =>  {
    return string?.length > n ? string.substr(0,n-1) + '...' : string
    }


  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${(movie as any).backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                {(movie as any).original_name || (movie as any).title || (movie as any).name}
            </h1>
            <div className="banner__buttons__contianer">
                    <button className='banner__button'>play</button>
                    <button className='banner__button'>My list</button>
                </div>
                <h1 className="banner__description">
                    {truncate((movie as any).overview, 150 )}

                </h1>
        </div>
        <div className="banner--fadeBootom"></div>
    </header>
  )
}

export default Banner