import React from 'react'
import Javier from '../img/NFT/Javier.png'
import spaceWallpaper from '../img/space-wallpaper.jpg'
import {Link} from 'react-router-dom'

function Bootcamp() {
  return (

    // <div>
    //   <h1>Bootcamp</h1>
    //   <img src={Javier}/>
    // </div>
    // <div className="main-card container my-60 ml-100 px-4 grid xl:grid-cols-1 ">
    // <div className="flex flex-wrap 2xl:w-1 lg:w-1/4 md:w-1/6 sm:w-1/6">
    <>
     <div className="weywot">
          <h2 class="text-white text-9xl">WeyWot</h2>
        </div>
    <div className="main-card container my-60 ml-100 px-4 grid xl:grid-cols-1 ">
      <div className="flex flex-wrap">
            {/* SIZE OF THE CARDS */}
        <img className='space-wallpaper'src={spaceWallpaper}/>
        {/* <div className="weywot">
          <h2 class="text-white text-9xl">WeyWot</h2>
        </div> */}
          <div className='card-javier'>
            <article className="main-header overflow-hidden rounded-lg shadow-lg">
                <img className="NFT-img"src={Javier}/>
              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white border">
                  <h5 class="no-underline text-black strong">Javier</h5>
                  <a href="https://google.com">Github</a>
              </header>
            </article>
          </div>
      </div>
    </div>
    </>
  )
}

export default Bootcamp