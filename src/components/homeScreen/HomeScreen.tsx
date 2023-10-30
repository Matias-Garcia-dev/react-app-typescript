import React from 'react'
import './HomeScreen.css'
import Nav from '../nav/Nav'
import Banner from '../banner/Banner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav></Nav>
      <Banner></Banner>
    </div>
  )
}

export default HomeScreen