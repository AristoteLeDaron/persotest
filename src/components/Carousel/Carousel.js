import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel({ images, autoPlay, middle }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // ajoutez ceci si vous voulez que tous les carrousels soient verticaux par défaut
  };

  const settingsAutoPlay = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1000,
    afterChange: current => setCurrentSlide(current)
  };

  const settingsMiddleCarousel = {
    ...settingsAutoPlay,
    vertical: true,
    verticalSwiping: true,
    rtl: true,
    autoPlay: 2000,
    afterChange: current => setCurrentSlide(current)
  };

  useEffect(() => {
    if (middle) {
      setAnimate(true);
      const timerId = setTimeout(() => setAnimate(false), 500); // 500 doit correspondre à la durée de l'animation dans CSS
      return () => clearTimeout(timerId); // Nettoyer le timer en cas de démontage du composant
    }
  }, [middle, currentSlide]);

  return (
    <div className="individual-carousel">
      <Slider {...(middle ? settingsMiddleCarousel : autoPlay ? settingsAutoPlay : settings)}>
        {images.map((img, index) => (
          <img
            src={process.env.PUBLIC_URL + '/' + img}
            alt={`Slide ${index + 1}`}
            key={index}
            className={animate && middle ? 'rotating-image' : ''}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
