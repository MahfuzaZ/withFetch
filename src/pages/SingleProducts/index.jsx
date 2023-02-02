import React from 'react'
import sass from "../main.module.scss"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function SingleProducts() {
  const {id} = useParams()
  const [posts, setPosts] = useState([])
  useEffect(() =>{
      fetch("https://fakestoreapi.com/products/" + id)
        .then(res => res.json())
        .then(data => setPosts(data))
  })
  return (
    <div className={sass.single}>
      <ul>
         <li>
          <div className={sass.right}>
          <img src={posts.image} alt="" />
          </div>
          <div className={sass.left}>
          <h1>{posts.category}</h1>
          <h4>{posts.title}</h4>
          <p>{posts.description}</p>
          <h3>{`Price: ${posts.price}`}</h3>
          </div>

          </li>
      </ul>
    </div>
  )
}

export default SingleProducts