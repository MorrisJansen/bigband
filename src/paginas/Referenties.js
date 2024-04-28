// Referenties.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stijlen/App.css';

function Referenties() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    '../fotos/referentiesCarousel.webp',
    '../fotos/referentiesCarousel2.webp',
    '../fotos/referentiesCarousel3.webp',
  ];

  return (
    <div className="referenties-container">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="referenties-text">
        <h1 className='text-center'>Referenties</h1>
        <div className='onderlijn'></div>

        <p>Wij hebben al vele gelegenheden van muziek voorzien. Zo verzorgden wij o.a. optredens voor Doelencafé Rotterdam, Grand Café Metz in Dordrecht, Cultureel centrum Concordia in Haastrecht en de Grote Kerk te Schiedam. Ook speelden wij op de jazzfestivals van Middelburg, Delft, Rotterdam Charlois, Dordrecht, Enschede en Schiedam en voorzagen wij diverse privé feesten van muziek. En om niet te vergeten het grote dansfestijn "Meet and Dance" in Den Bosch.</p>
      </div>
      <div>
        <img src='./referenties.webp' alt='referentieFoto'></img>
      </div>
    </div>
  );
}

export default Referenties;
