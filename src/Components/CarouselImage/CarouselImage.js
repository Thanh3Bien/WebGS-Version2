import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS cho carousel
import './CarouselImage.css';

// Import hình ảnh
// import img1 from "../../assets/b2965456-931d-42a4-bbb0-453dbc12e292.jpg"
const img1 = "https://res.cloudinary.com/dsq0mei34/image/upload/v1740161240/GIA_S%C6%AFcontentofpage_e4qiuw.png"; 
const img2 = "https://res.cloudinary.com/dsq0mei34/image/upload/v1740166129/Onthituyensinhcaccap_c8fhll.png";
const CarouselImage = () => {
  return (
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={img1} alt="Hình ảnh 1" />
          </div>
          <div>
            <img src={img2} alt="Hình ảnh 2" />
          </div>
        </Carousel>
      </div>

  );
};

export default CarouselImage;