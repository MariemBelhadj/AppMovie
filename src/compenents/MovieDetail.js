import React from 'react'
import {  Link,useLocation } from 'react-router-dom'

export default function MovieDetail() {

    const location = useLocation() ; 
  return (
    <div >
        <div >
        <Link to="/">Home</Link>
        </div>
        <div>
        <h1>{location.state.title}</h1>
        <iframe  src={location.state.Trailer}></iframe>
        <p>{location.state.detail}</p>
        </div>
    </div>
    
  )
}
