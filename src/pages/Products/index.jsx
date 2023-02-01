import React from 'react'
import sass from "../main.module.scss"
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Outlet, useParams } from 'react-router-dom'


function Products() {
  const [posts, setPosts] = useState([])
  const {id} = useParams
  useEffect(() =>{
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setPosts(data))
  })

  return (
    <div className={sass.products}>
        <div className={sass.top}>
        <h2>Our Products</h2>
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>0</h3>
        </div>
        <ul className={sass.types}>
           <li><NavLink to="/" >Men's Clothes</NavLink></li>
           <li><NavLink to="/" >Women's Clothes</NavLink></li>
           <li><NavLink to="/" >Jewellery</NavLink></li>
           <li><NavLink to="/" >Electronics</NavLink></li>
        </ul>
        <ul className={sass.json}>
             {posts.map(elem => (<li>
              <img src={elem.image} alt="" />
              <h1>{elem.category}</h1>
              <h4>{elem.title}</h4>
              <div  className={sass.btn}>
                <Link to={`/products/${elem.id}`}>Learn More</Link>
                <button>Buy Now</button>
              </div>
              </li>))}
         </ul>
         <Outlet/>
    </div>

  )
}

export default Products