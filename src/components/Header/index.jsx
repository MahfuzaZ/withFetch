import React from 'react'
import sass from "../comp.module.scss"
import logo from "../../pages/img/logo1.avif"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className={sass.header}>
        <header>
        <div className={sass.logo}>
            <img src={logo} alt="" />
            <h1>Anita Black</h1>
        </div>
        <div className="menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contacts">Contact</NavLink></li>
            </ul>
        </div>
        </header>
    </div>
  )
}

export default Header