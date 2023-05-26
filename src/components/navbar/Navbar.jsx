import { useState } from 'react'

import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import logo from '../../assets/images/rmuzb.png'
import './navbar.scss' 

const Navbar = () => {
  const [active, setActive] = useState('navbar');
  
  const showNav = () => {
    setActive('navbar activeNavbar')
  }
  const closeNav = () => {
    setActive('navbar')
  }
  if(active == "navbar"){

  }
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img style={{width: "140px"}} src={logo} alt="" />
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className='navItem'>
              <a href="#" className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>Contact</a>
            </li>
            <button className="btn"><a href="#">Book now</a></button>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
      </header>
    </section>
  )
}

export default Navbar