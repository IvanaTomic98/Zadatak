import React, {useState} from 'react'
import '../NavBar/navigationBar.css'
import logo from '../NavBar/Imge/logo.jpg'
import search from '../NavBar/Imge/search.svg'

const NavigationBar = () => {

    const [active, setActive] = useState ('dropdown_menu');
    const navToggle = () => {
        active === 'nav_menu' ? setActive('menu menu__active') 
        : setActive( 'menu' )
    }

  return (
    <div className='nav_bar'>  
        <nav className='menu'>
            <img src={logo} className='logo'/>
            <ul className={active}>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>HOME /</a>
                </li>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>ABOUT US /</a>
                </li>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>OUR WORK /</a>
                </li>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>CONTACT</a>
                </li>
                <li className='nav_link'>
                    <img src={search} width="20px" height="20px"/>
                </li>
            </ul>
            <div onClick = { navToggle } className='toggler'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    </div>
    
  )

}


export default NavigationBar