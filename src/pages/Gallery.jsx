// import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  room1  from '../assets/images/24-3249-cc-q2-may-web-untargeted.avif'

const Gallery = () => {
  return (
    <div className='container'>
    <div style={{ display: 'block', width: 1100, padding: 30 }}>
    <h2 style={{ color: 'green' }}>LilySolutions</h2>
    <h2>Feel at home and enjoy your stay here</h2>
    <Carousel variant="dark">
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src={room1}
                alt="JAVA"
            />

        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src={room1}
                alt="HTML"
            />

        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src={room1}
                alt="Angular"
            />
        </Carousel.Item>
    </Carousel>
</div>
</div>
  )
}

export default Gallery
