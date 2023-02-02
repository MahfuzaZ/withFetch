import React from 'react'
import sass from "../main.module.scss"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Products() {
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState("nimadur")
  const [increment, setIncrement] = useState(0)

  const change = () => {
     setIncrement(increment + 1)
  }


  
  useEffect(() =>{
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setPosts(data))
  }, [category])
  return (
    <div className={sass.products}>
        <div className={sass.top}>
        <h2>Our Products</h2>
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>{increment}</h3>
        </div>
        <ul className={sass.types}>
           <li><button onClick={()=>  setCategory("men's clothing")}>Men's Clothes</button></li>
           <li><button onClick={()=>  setCategory("women's clothing")}>Women's Clothes</button></li>
           <li><button onClick={()=>  setCategory("jewelery")}>Jewellery</button></li>
           <li><button onClick={()=>  setCategory("electronics")}>Electronics</button></li>
        </ul>
        <ul className={sass.json}>
             {posts.map(elem => {if (elem.category === category) {
                return(<li key={elem.id}>
                  <img src={elem.image} alt="" />
                  <h1>{elem.category}</h1>
                  <h4>{elem.title}</h4>
                  <div  className={sass.btn}>
                    <Link to={`/products/${elem.id}`}>Learn More</Link>
                    <button onClick={change}>Buy Now</button>
                  </div>
                  </li>)
             }})}

         </ul>
      
    </div>

  )
}

export default Products