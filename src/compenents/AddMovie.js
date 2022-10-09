import React from 'react'
import { useState } from 'react'
import './nav.css'

export default function AddMovie({handleAdd}) {
    const [newMovie , setNewMovie]=useState({
        id:4,
        title:'',
        image:'',
        detail:'',
        rate:2
    })
    const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       handleAdd(newMovie)
    };
  return (
    <div >
        <div className='inputMovie'>
        <input type="text" name="title" onChange={(e)=>handleChange(e)} placeholder="title"/>
        <input type="text" name="detail" onChange={(e)=>handleChange(e)}  placeholder="detail"/>
        <input type="text" name="image" onChange={(e)=>handleChange(e)} placeholder="image URL"/>
        <input type="number" name="rate" onChange={(e)=>handleChange(e)} placeholder="rate"/>
        </div>
        <div className="buttonMovie" >
        <button onClick={(e)=>handleSubmit(e)}>Add </button>
        </div>
    </div>
  )
}
