import React from 'react'
import './Banner.css'

const Banner = () => {

   const  truncate = (string: string, n: number) =>  {
    return string?.length > n ? string.substr(0,n-1) + '...' : string
    }


  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                Movie Name
            </h1>
            <div className="banner__buttons__contianer">
                    <button className='banner__button'>play</button>
                    <button className='banner__button'>My list</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`this is a description test this is a description testthis is a description testthis is a description testthis is a description testthis is a description testthis is a description testthis is a description test
                                this is a description testthis is a description test
                                this is a description testthis is a description test
                                this is a description testthis is a description test
                                this is a description testthis is a description test
                                this is a description test
                                this is a description test
                                this is a description test`, 150 )}

                </h1>
        </div>
        <div className="banner--fadeBootom"></div>
    </header>
  )
}

export default Banner