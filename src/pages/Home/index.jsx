import React from 'react'
import sass from "../main.module.scss"
import img1 from "../img/img12.jpeg"
import img2 from "../img/img2.jpeg"
import img3 from "../img/img3.jpeg"
import img4 from "../img/img4.jpeg"
import img5 from "../img/img13.jpeg"
import img6 from "../img/img5.jpeg"
import { useState, useEffect } from 'react'




function Home() {
     const [posts, setPosts] = useState([])
      useEffect(() =>{
          fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setPosts(data))
      })


  return (
    <div className={sass.home}>
         <ul className={sass.img}>
          <li><img src={img1} alt="" /></li>
          <li><img src={img2} alt="" /></li>
          <li><img src={img3} alt="" /></li>
          <li><img src={img4} alt="" /></li>
          <li><img src={img5} alt="" /></li>
          <li><img src={img6} alt="" /></li>
         </ul>


         <h2>New Arrivals</h2>
         <ul className={sass.json}>
             {posts.map(elem => (<li><img src={elem.image} alt="" /><h1>{elem.category}</h1><h4>{elem.title}</h4></li>))}
         </ul>

    </div>
  )
}

export default Home