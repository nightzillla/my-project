import React from 'react'
import './Portfolio.css'
import './PortfolioNavBar'
import World from '../../img/Portfolio/world.jpg'
import Sedona from '../../img/Portfolio/sedona.jpg'
import NewMexico from '../../img/Portfolio/new-mexico.jpg'
import Inception from '../../img/Portfolio/inception.jpg'
import HTown from '../../img/Portfolio/h-town.jpg'
import Pearl from '../../img/Portfolio/pearl.jpg'
import SmokeBomb from '../../img/Portfolio/smoke-bomb.jpg'
import Stairs from '../../img/Portfolio/stairs.jpg'
import Hurricane from '../../img/Portfolio/hurricane.jpg'
import PortfolioNavBar from './PortfolioNavBar'

function Portfolio() {
  return (
    <>
    <PortfolioNavBar/>
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

export default Portfolio