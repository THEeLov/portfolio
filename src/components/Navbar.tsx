import { useEffect, useRef } from 'react'
import MenuIcon from '../images/menu.svg'


const Navbar = () => {


    return (
    <div className="navbar-container">
        <div className="navbar__icon-container">
            <img className="navbar__icon" src={MenuIcon} alt="Menu icon" />
        </div>
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list__item">
                    About
                </li >
                <li className="navbar__list__item">
                    Courses
                </li>
                <li className="navbar__list__item">
                    Contact
                </li>
            </ul>
        </nav>
    </div>

  )
}

export default Navbar