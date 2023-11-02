import React from 'react'
import './HomeScreen.css'
import Nav from '../nav/Nav'
import Banner from '../banner/Banner'
import request from '../axios/Request'
import Row from '../row/Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav></Nav>
      <Banner></Banner>
      <Row 
      title='NETFLIX ORIGINAL'
      fetchUrl={request.fetchNetfelixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      
    </div>
  )
}

export default HomeScreen