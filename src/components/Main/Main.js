import React from 'react';
import './Main.css';
import Carousel from '../Carousel/Carousel';

function Main() {
  const imagesCarousel1 = [
    "img/img01.jpg",
    "img/img02.jpg",
    "img/img03.jpg",
    "img/img04.jpg",
  ];

  const imagesCarousel2 = [
    "img/img05.jpg",
    "img/img06.jpg",
    "img/img07.jpg",
    "img/img08.jpg",
  ];

  const imagesCarousel3 = [
    "img/img09.jpg",
    "img/img10.jpg",
    "img/img11.jpg",
    "img/img12.jpg",
  ];

  return (
    <div className="main-container">
      <div className="text-container">Bienvenue sur ma page personnelle !</div>
      <div className="carousel-container">
        <Carousel images={imagesCarousel1} autoPlay={true} />
        <Carousel images={imagesCarousel2} middle={true} />
        <Carousel images={imagesCarousel3} autoPlay={true} />
      </div>
    </div>
  );
}

export default Main;
