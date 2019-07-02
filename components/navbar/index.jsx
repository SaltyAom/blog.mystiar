/* Preact */
import { h, Fragment } from 'preact'

/* Next */
import Link from 'next/link'

/* CSS */
import './navbar.css'

/* Sub Component */
const NavbarLink = (props) => {
    let { title, href = "/" } = props

    return(
        <Link href={href}>
            <a className="navbar-type">
                <h2 className="navbar-title">{title}</h2>
                <div className="navbar-line"></div>
            </a>
        </Link>
    )
}

/* Component */
const Navbar = () => {
    return(
        <nav id="navbar">

            <Link href="/">
                <a id="navbar-mystiar-link">
                    <img id="navbar-mystiar" src="/static/app/icon/ShinoX192.png" alt="Mystiar Blog Icon" />
                </a>
            </Link>
            
            <button id="navbar-menu" className="nav-component material-icons" aria-label="Toggle menu">
                sort
            </button>
            <div id="navbar-end" className="nav-component">

                <aside id="navbar-aside">
                    <NavbarLink title="Algorithms" href="/algorithm" />
                    <NavbarLink title="JavaScript" href="/javascript" />
                    <NavbarLink title="Flutter" href="/flutter" />
                </aside>

                <button id="navbar-search" className="nav-component material-icons">
                    search
                </button>

            </div>
        </nav>
    )
}

export default Navbar