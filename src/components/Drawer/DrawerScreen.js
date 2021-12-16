import { faBars, faCrown, faFilm, faHeart, faIdCard, faPlay, faRunning, faSortDown, faTimesCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDrawer } from "../../hooks/useDrawer";


import { Button } from "./Button";
import { Dropdown } from "./Dropdown";

export const DrawerScreen = () => {

    const { click, handleClick,closeMobileMenu,dropdown,onMouseEnter,
        onMouseLeave, } = useDrawer();

    return (
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    <FontAwesomeIcon icon={faFilm} />
                    <span>STREAM</span>NIMEX
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimesCircle : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon icon={faRunning} />
                            Coming Soon
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon icon={faHeart} />
                            Favorite Animes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon icon={faCrown} />
                            Most Popular
                        </Link>
                    </li>
                    <li className="nav-item"
                                        onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Genre
                            <FontAwesomeIcon icon={faSortDown} />
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon icon={faIdCard} />
                            Contact Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links-mobile" onClick={closeMobileMenu}>
                            <FontAwesomeIcon icon={faUser} />
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    )
}
