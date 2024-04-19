// Luisteren.js
import React from 'react';
import '../stijlen/App.css'

function Luisteren() {
  return (
    <div>
      <h1 className='text-center'>Luisteren</h1>








    <h3 className='text-center'>Heb jij nog mooie beelden van de bigband?</h3>
    <h5 className='text-center'>Laat het ons weten! stuur een mailtje met de beelden naar info@bigbandenterprise.com</h5>

      <div className='video-container'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/uibb1xOBajw' 
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Luisteren;
