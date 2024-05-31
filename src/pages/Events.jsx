import React from 'react'
import  room1  from '../assets/images/24-3249-cc-q2-may-web-untargeted.avif'
import  room2  from '../assets/images/photo-1716632943255-355b59566d11.avif'
import  room3  from '../assets/images/photo-1716910729414-302a85b5c3ce.avif'
import '../components/Styles.css'

const Events = () => {
  return (
    <div className='container'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade h-200" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active h-200">
        <img src={room1} className="d-block w-100 h-100" alt="..." />
      </div>
      <div className="carousel-item h-200">
        <img src={room3} className="d-block w-100 h-100 phot" alt="..." />
      </div>
      <div className="carousel-item h-200">
        <img src={room2} className="d-block w-100 h-100 phot" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Events
