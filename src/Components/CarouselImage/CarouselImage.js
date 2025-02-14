import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS cho carousel
import './CarouselImage.css';

// Import hình ảnh
import img1 from "../../assets/b2965456-931d-42a4-bbb0-453dbc12e292.jpg"

const CarouselImage = () => {
  return (
    <div className="middle-image-container">
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={img1} alt="Hình ảnh 1" />
          </div>
          <div>
            <img src={img1} alt="Hình ảnh 2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImage;