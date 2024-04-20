import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../stijlen/App.css';

function scrollToTop() {
  window.scrollTo(0, 0);
}

function homeLogic(setShowText) {
  const timer = setTimeout(() => {
    setShowText(true);
  }, 1500);

  return () => clearTimeout(timer);
}

function Home() {
  const [showText, setShowText] = useState(false);
  const [events, setEvents] = useState([]); // Definieer een staat voor evenementen en initialiseer deze met een lege array

  useEffect(() => {
    const cleanup = homeLogic(setShowText);

    // Haal evenementen op van de server wanneer de component mount
    fetch('/api/events') // Zorg ervoor dat '/events' overeenkomt met de serverroute
      .then((response) => response.json())
      .then((data) => setEvents(data)) // Sla de opgehaalde evenementen op in de staat
      .catch((error) => console.error('Error fetching events:', error));

    return cleanup;
  }, []); 

  return (
    <div className="thuisscherm-container">
      <div className="thuisscherm-inhoud">
        <div className="foto-container">
          <h1 className={`foto-heading text-center w-100`}>Welkom bij BigBand Enterprise</h1>
          <img src='./homepageSlider.webp' alt='homepageSlider' className='homepageSlider' />
        </div>
      </div>
      <div className="tekst-container">
        <div className={`tekst-overlay ${showText ? 'active fadeIn' : ''}`}>
          <h4>Wie zijn wij?</h4>
          <hr className='onderlijn'></hr>
          <p>Bigband Enterprise uit Rhoon speelt sinds 1993 in de volledige bigband. Dat wil zeggen; een 5 koppige saxofoonsectie, daarachter 4 trombones en op de laatste rij 4 trompettisten. Het geheel wordt gecompleteerd door een stevige ritmesectie (drums, bas, gitaar en piano).</p>
        </div>

        <Link to="/OverOns" onClick={scrollToTop}>
          <button className='custom-btn'>lees meer</button>
        </Link>

      </div>
      <div className='tweedeFoto'>
        <img src='/public/fotos/homepageFoto.webp' alt='homepageFoto' className={`homepageFoto ${showText ? 'active' : ''}`} />
      </div>

      <div className='data-container'>
  <h3 className='center-text'>Opkomende data</h3>
  <div className="grid-container">
    {events.map((event, index) => (
      <div key={index} className="grid-item">
        <div className="grid-cell">
          <div className="event-title">{event.titel}</div>
        </div>
        <div className="grid-cell">
          <div className="event-details">
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.locatie)}`} target="_blank" rel="noopener noreferrer">{event.locatie}</a>
          </div>
        </div>
        <div className="grid-cell">
          <div className="event-details">{event.datum}</div>
        </div>
        <div className="grid-cell">
          <div className="event-details">{event.tijdstip}</div>
        </div>
      </div>
    ))}
  </div>
</div>




    </div>
  );
}

export default Home;
