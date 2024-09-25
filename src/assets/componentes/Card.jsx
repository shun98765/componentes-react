import React from 'react'
import './Card.css'

const Card = ({lang, img, fcolor, scolor}) => {
  return (
    <>
    <div className="card" style={{
        background: `linear-gradient(to left, ${fcolor}, ${scolor})`
    }}>
        <img src={img}/>
        <h3>Titulo</h3><br />
        <p>{lang}</p>
    </div>
    <br />
    <div className="card">
        <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8432cfb8a2875399ac52885874"/>
        <h3>Titulo</h3><br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex.</p>
    </div>
    <br />
    </>  
  )
}

export default Card

//rafce funcion flecha USAR SIEMPRE