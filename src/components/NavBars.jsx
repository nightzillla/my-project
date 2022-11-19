import React from 'react'
import {useState} from 'react'
import sword from '../img/hamburger.png'
import {Link} from 'react-router-dom'

function NavBars() {

const [click, setClick] = useState(false);

const handlerChange = (e) => {
    
    setClick((preState)=> !preState)

}

  return (
    <div className="section2">
    <div data-dropdown="parent" class="dropdown-parent">
    <div data-dropdown="toggle" class="dropdown-toggle">
        <div>
            <img className="hamburger"onClick={handlerChange} src={sword} />
        </div>
    </div>
    <div>
      {click &&(<Link to="aboutme"><h3>About Me</h3></Link>)}
      {click && (<h3>Projects</h3>)}
      {click && (<h3>Bootcamp</h3>)}
    </div>
    {/* <div data-dropdown="menu" class="dropdown-menu">
        This is the menu
    </div> */}
    </div>
    </div>
  )
}

export default NavBars