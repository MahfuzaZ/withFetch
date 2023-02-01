import React from 'react'
import sass from "../main.module.scss"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function SingleProducts() {
  const {id} = useParams()
  const [posts, setPosts] = useState([])
  useEffect(() =>{
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setPosts(data))
  })
  return (
    <div className={sass.single}>
      <ul>
         <li>{posts.title} <img src={posts.image} alt="" /></li>
      </ul>
    </div>
  )
}

export default SingleProducts