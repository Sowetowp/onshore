import React from 'react'
import NavBar from '../Components/NavBar'
import SecOne from '../Components/SecOne'
import SecTwo from '../Components/SecTwo'
import EndToEnd from '../Components/EndToEnd'
import Trusted from '../Components/Trusted'
import SixReason from '../Components/SixReason'
import GetInTouch from '../Components/GetInTouch'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <NavBar/>
      <SecOne/>
      <SecTwo/>
      <EndToEnd/>
      <Trusted/>
      <SixReason/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default Home