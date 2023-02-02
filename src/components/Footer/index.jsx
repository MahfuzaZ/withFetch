import React from 'react'
import sass from "../comp.module.scss"
import logo from "../../pages/img/logo1.avif"

function Footer() {
  return (
    <div className={sass.footer}>
        <footer>
            <ul>
                <li><img src={logo} alt="" /></li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, explicabo eos, cupiditate laboriosam debitis accusantium velit placeat quam corrupti veniam, cum totam sapiente? Ipsum eveniet, saepe architecto odio soluta veniam!</li>
                <li>238293980</li>
                <li>323893329</li>
            </ul>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
           </ul>

           <ul>
            <li>Men's clothes</li>
            <li>Women's Clothes</li>
            <li>Jewellery</li>
            <li>Accessories</li>
           </ul>

           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
           </ul>
        </footer>
    </div>
  )
}

export default Footer