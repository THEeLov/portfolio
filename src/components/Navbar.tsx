import { useEffect } from 'react'
import MenuIcon from '../images/menu.svg'
import { preLoadAnim } from '../animation';

const Navbar = () => {

    useEffect(() => {
        preLoadAnim();
    })

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