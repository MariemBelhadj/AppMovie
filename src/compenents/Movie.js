import React from "react";
import './nav.css'
import Rate from './Rate';


const Movie = ({movie:{id, image, title, detail, rate }}) => {
  return (
    <>
      <div key={id} className="movie">
        <img src={image} className="poster"/>

        <div className="details">

          <div className="box">
            <div className="title">{title}</div>
            <div className="rate"> <Rate rate={rate} /></div>
          </div>
          <div className="overview">
            <h1>overview</h1>
            <p>{detail}</p>

          </div>

        </div>

      </div>
    </>
  )
}
export default Movie;