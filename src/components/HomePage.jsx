import React from 'react'
import Smoke from '../video/smoke3.mp4'
import NavBars from './NavBars'

function HomePage() {
  return (
    <>
    <div className="loading-wrapper">
      <div className="video-container">
        <video autoPlay muted loop className="smoke">
          <source src={Smoke}/>
        </video>
      </div>
      </div>
      <div>
      </div>
      <div className="section">
      <NavBars/>
        <h1>welcome to nightzillla</h1> 
      {/* <div className="loader"> 
        <span className="loader__element"></span>
        <span className="loader__element"></span>
        <span className="loader__element"></span>
      </div> */}
    </div>
    </>
  )
}

export default HomePage