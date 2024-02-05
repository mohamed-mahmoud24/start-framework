import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav className="navbar fixed-top navbar-expand-lg  p-4">
            <div className="container">
                <NavLink className="navbar-brand fw-bold text-white fs-3" to="">START FRAMEWORK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link fw-bold fs-5 text-white activeLink' : 'nav-link fw-bold fs-5 text-white'} aria-current="page" to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link fw-bold fs-5 text-white activeLink' : 'nav-link fw-bold fs-5 text-white '}to="portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link fw-bold fs-5 text-white activeLink' : 'nav-link fw-bold fs-5 text-white' } to="contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
