import React from 'react'
import {useState} from 'react'
import pngwing from '../../img/Icons/pngwing.png'
import {Link} from 'react-router-dom'

function BootcampNavBar() {

const [click, setClick] = useState(false);

const handlerChange = (e) => {
    
    setClick((preState)=> !preState)

}

  return (
    <div className="section2">
    <div data-dropdown="parent" class="dropdown-parent">
    <div data-dropdown="toggle" class="dropdown-toggle">
        <div>
            <img className="hamburger"onClick={handlerChange} src={pngwing} />
        </div>
    </div>
    <div>
      {click &&(<Link className='text-link'to="/"><h3 className="HomeText">Home</h3></Link>)}
      {click &&(<Link className='text-link'to="/aboutme"><h3 className="AboutMeText">About Me</h3></Link>)}
      {click &&(<Link className='text-link'to="/portfolio"><h3 className="GalleryText">Gallery</h3></Link>)}
      {click &&(<Link className='text-link'to="/projects"><h3 className="ProjectsText">Projects</h3></Link>)}
      {click &&(<Link className='text-link'to="/bootcamp"><h3 className="BootcampText">Bootcamp</h3></Link>)}
    </div>
    {/* <div data-dropdown="menu" class="dropdown-menu">
        This is the menu
    </div> */}
    </div>
    </div>
  )
}

export default BootcampNavBar