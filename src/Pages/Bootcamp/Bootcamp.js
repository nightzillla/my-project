import React from 'react'
import spaceWallpaper from '../../img/space-wallpaper.jpg'
import {Link} from 'react-router-dom'
import BootcampNavBar from './BootcampNavBar'
import './Bootcamp.css'
import NFTcard from './NFTcard'
import Stepbro from '../../img/NFT/Stepbro.png'
import Arron from '../../img/NFT/Arron.png'
import Ceaser from '../../img/NFT/Cesar.png'
import Daniel from '../../img/NFT/Daniel.png'
import Danny from '../../img/NFT/Danny.jpg'
import David from '../../img/NFT/David.png'
import Deshawn from '../../img/NFT/Deshawn.png'
import Fernando from '../../img/NFT/Fernando.png'
import Frances from '../../img/NFT/Frances.png'
import Jack from '../../img/NFT/Jack.png'
import jasmine from '../../img/NFT/jasmine .png'
import Jason from '../../img/NFT/Jason.png'
import Javier from '../../img/NFT/Javier.png'
import John from '../../img/NFT/John.png'
import naz from '../../img/NFT/naz.png'
import Rich from '../../img/NFT/Rich.png'
import rodrigo from '../../img/NFT/rodrigo.png'
import broMason from '../../img/NFT/step-bro-mason.png'
import Stephen from '../../img/NFT/Stephen.png'
import val from '../../img/NFT/val.png'
import Adien from '../../img/NFT/Adien.png'
import Cleb from '../../img/NFT/Cleb.png'
import Test from '../../img/NFT/Test.png'


function Bootcamp() {
  return (

    // <div>
    //   <h1>Bootcamp</h1>
    //   <img src={Javier}/>
    // </div>
    // <div className="main-card container my-60 ml-100 px-4 grid xl:grid-cols-1 ">
    // <div className="flex flex-wrap 2xl:w-1 lg:w-1/4 md:w-1/6 sm:w-1/6">
    <>
            <BootcampNavBar className="bootcampNavBar"/>

      <div className="weywot">
        <h2 className="text-white text-9xl">WeyWot</h2>
        <img className='space-wallpaper'src={spaceWallpaper}/>
      </div> {/* end of weywot */}
      <div className="NFTJavier Container grid gird-flow-row">
        <NFTcard className="NFTcards"img={Javier} name={"Javier"} href={"www.google.com"}/>
      </div>
      <div className="NFTcardHolders flex flex-wrap justify-evenly">
        <NFTcard className="NFTcards mt-6"img={Stepbro} name={"x"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Danny} name={"nightzillla"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={broMason} name={"Mason"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={David} name={"David"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Jason} name={"Jason"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Fernando} name={"Fernando"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Arron} name={"AAron"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Deshawn} name={"Deshawn"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Frances} name={"Frances"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={John} name={"John"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={naz} name={"naz"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Stephen} name={"Stephen"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={val} name={"val"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Jack} name={"jack"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={rodrigo} name={"Rodrigo"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Ceaser} name={"Ceaser"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Daniel} name={"Daniel"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={jasmine} name={"jasmine"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Rich} name={"Rich"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Adien} name={"Adien"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Cleb} name={"Cleb"} href={"www.google.com"}/>
        <NFTcard className="NFTcards"img={Test} name={"Test"} href={"www.google.com"}/>
      </div>
      <div>
      </div>
    </>
  )
}

export default Bootcamp