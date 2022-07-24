import React, {useState} from 'react'
import '../NavBar/navigationBar.css'

const NavigationBar = () => {

    const [active, setActive] = useState ('dropdown_menu');
    const navToggle = () => {
        active === 'nav_menu' ? setActive('menu menu__active') 
        : setActive( 'menu' )
    }

  return (
    <div className='nav_bar'>  
        <nav className='menu'>
            <a href='#' className='logo'> WirlessMedia </a>
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