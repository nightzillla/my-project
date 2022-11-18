import React from 'react'
import Smoke from '../video/smoke3.mp4'
import NavBar from './NavBar'

function HomePage() {
  return (
    <>
    <div className="loading-wrapper">
      <div className="video-container">
        <video autoPlay muted loop className="smoke">
          <source src={Smoke} />
        </video>
      </div>
      </div>
      <div className="section">
        <h1>nightzillla website coming soon</h1>
        {/* <NavBar/> */}
      <div className="loader"> 
        <span className="loader__element"></span>
        <span className="loader__element"></span>
        <span className="loader__element"></span>
      </div>
    </div>
    </>
  )
}

export default HomePage