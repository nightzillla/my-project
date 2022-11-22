import React from 'react'
import spaceWallpaper from '../../img/space-wallpaper.jpg'
import {Link} from 'react-router-dom'
import CohortNavBar from './CohortNavBar'
import './Cohort.css'
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
import Caleb from '../../img/NFT/Caleb.png'
import Test from '../../img/NFT/Test.png'
import Gonzo from '../../img/NFT/Gonzo.png'

function Cohort() {
  return (
    <>
      <CohortNavBar className="cohortNavBar"/>
      <div className="weywot">
        <h2 className="text-white text-9xl">WeyWot</h2>
        <img className='space-wallpaper'src={spaceWallpaper}/>
      </div> {/* end of weywot */}
      <div className="NFTJavier Container grid grid-flow-row">
        <NFTcard className="NFTcards"img={Javier} name={"Javier"} href={"https://github.com/jruedas1"}/>
      </div>
      <div className="NFTcardHolders flex flex-wrap justify-between ">
        <NFTcard className="NFTcards"img={Danny} name={"nightzillla"} href={"https://github.com/nightzillla"}/>
        <NFTcard className="NFTcards mt-6"img={Stepbro} name={"x"} href={"https://github.com/Exabiier"}/>
        <NFTcard className="NFTcards"img={broMason} name={"Mason"} href={"https://github.com/WoodyMas"}/>
        <NFTcard className="NFTcards"img={David} name={"David"} href={"https://github.com/Lara5595"}/>
        <NFTcard className="NFTcards"img={Jason} name={"Jason"} href={"https://github.com/merrellj-codeup"}/>
        <NFTcard className="NFTcards"img={Fernando} name={"Fernando"} href={"https://github.com/fernandolopez32"}/>
        <NFTcard className="NFTcards"img={Arron} name={"AAron"} href={"https://github.com/aarmorris"}/>
        <NFTcard className="NFTcards"img={Deshawn} name={"Deshawn"} href={"https://github.com/MarquisTheCoder"}/>
        <NFTcard className="NFTcards"img={Frances} name={"Frances"} href={"https://github.com/francesperez"}/>
        <NFTcard className="NFTcards"img={John} name={"John"} href={"https://github.com/jdpedrotti"}/>
        <NFTcard className="NFTcards"img={naz} name={"naz"} href={"https://github.com/NazarethBriseno"}/>
        <NFTcard className="NFTcards"img={Stephen} name={"Stephen"} href={"https://github.com/Pfirewire"}/>
        <NFTcard className="NFTcards"img={val} name={"val"} href={"https://github.com/vcanizales"}/>
        <NFTcard className="NFTcards"img={Jack} name={"jack"} href={"https://github.com/jackbgraham"}/>
        <NFTcard className="NFTcards"img={rodrigo} name={"Rodrigo"} href={"https://github.com/RodrigoM09"}/>
        <NFTcard className="NFTcards"img={Ceaser} name={"Ceaser"} href={"https://github.com/Clopez-25"}/>
        <NFTcard className="NFTcards"img={Daniel} name={"Daniel"} href={"https://github.com/danielname"}/>
        <NFTcard className="NFTcards"img={jasmine} name={"Jazmine"} href={"https://github.com/JazHud"}/>
        <NFTcard className="NFTcards"img={Rich} name={"Rich"} href={"https://github.com/richy088"}/>
        <NFTcard className="NFTcards"img={Adien} name={"Adien"} href={"https://github.com/AidenLuce"}/>
        <NFTcard className="NFTcards"img={Caleb} name={"Caleb"} href={"https://github.com/theCEO1999"}/>
        <NFTcard className="NFTcards"img={Test} name={"Test"} href={"https://github.com/ttekie"}/>
        <NFTcard className="NFTcards"img={Gonzo} name={"Gonzo"} href={"https://github.com/gonzaloovalle"}/>
      </div>
      <div>
      </div>
    </>
  )
}

export default Cohort