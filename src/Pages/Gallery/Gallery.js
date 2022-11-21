import React from 'react'
import './Gallery.css'
import './GalleryNavBar'
import World from '../../img/Gallery/world.jpg'
import Sedona from '../../img/Gallery/sedona.jpg'
import NewMexico from '../../img/Gallery/new-mexico.jpg'
import Inception from '../../img/Gallery/inception.jpg'
import HTown from '../../img/Gallery/h-town.jpg'
import Pearl from '../../img/Gallery/pearl.jpg'
import SmokeBomb from '../../img/Gallery/smoke-bomb.jpg'
import Stairs from '../../img/Gallery/stairs.jpg'
import Hurricane from '../../img/Gallery/hurricane.jpg'
import GalleryNavBar from './GalleryNavBar'

function Gallery() {
  return (
    <>
    <GalleryNavBar/>
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <div className="box postcard">
          <img src={World}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={Sedona}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={NewMexico}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={Pearl}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={SmokeBomb}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={Inception}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={HTown}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={Stairs}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box zoom-in">
          <img src={Hurricane}/>
          </div>
        </div>
      </div>
    </div>
    {/* <h1 className="portfolioHOne">nightzillla</h1>
    <img src={World}/> */}
    </>
  )
}

export default Gallery