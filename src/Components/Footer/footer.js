import React from "react";
import '../Footer/footer.css'
import facebook from '../Footer/Image/facebook.svg'
import twitter from '../Footer/Image/twitter.svg'
import email from '../Footer/Image/email.svg'
import top from '../Footer/Image/top.svg'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="social_icon">
                <div className="facebook"><img src={facebook} alt='facebook'/></div>
                <div className="twitter"><img src={twitter} alt='twitter'/></div>
                <div className="email"><img src={email} alt='email'/></div>
          </div>
          <div className="divmenu">
            <ul className="footer_menu">
                <li className='nav_link'>
                    <a href='#' className='nav_name'>HOME </a>
                </li>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>ABOUT US </a>
                </li>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>OUR WORK </a>
                </li>
                <li className='nav_link'>
                    <a href='#' className='nav_name'>CONTACT</a>
                </li>
            </ul>
          </div>
          <div>
          <div className="top"><img src={top} alt='top'/></div>
          </div>
        </footer>
    )
}
export default Footer