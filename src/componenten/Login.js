import React, { useState, useEffect } from 'react';

const EventList = ({ events, onDeleteEvent }) => {
  return (
    <div className="mt-4">
      <h3 className="text-center">Evenementen</h3>
      <ul className="list-group">
        {events.map((event) => (
          <li key={event.id} className="list-group-item">
            <p>Datum: {event.datum}</p>
            <p>Titel: {event.titel}</p>
            <p>Locatie: {event.locatie}</p>
            <p>Tijdstip: {event.tijdstip}</p>
            <button className="btn btn-danger btn-sm" onClick={() => onDeleteEvent(event.id)}>Verwijderen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EventForm = ({ onAddEvent }) => {
  const [date, setDate] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [time, setTime] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Controleer de lengte van het tijdstip
    if (time.length > 5) {
      setErrorMessage('Tijdstip mag maximaal 5 tekens bevatten');
      return; // Stop de verwerking als het tijdstip te lang is
    }

    const newEvent = { datum: date, titel: title, locatie: location, tijdstip: time };

    try {
      // Verstuur het nieuwe evenement naar de backend
      const response = await fetch('/api/add-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error('Error adding event to database');
      }

      // Voeg het nieuwe evenement toe aan de frontend
      onAddEvent(newEvent);

      // Clear form fields after successful submission
      setDate('');
      setTitle('');
      setLocation('');
      setTime('');
      setErrorMessage(''); // Reset de foutmelding
    } catch (error) {
      console.error('Error adding event:', error.message);
      // Toon een foutmelding aan de gebruiker
      alert('Er is een fout opgetreden bij het toevoegen van het evenement. Probeer het opnieuw.');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-center">Nieuw evenement toevoegen</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Datum:</label>
          <input type="text" id="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="title">Titel:</label>
          <input type="text" id="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Locatie:</label>
          <input type="text" id="location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Tijdstip:</label>
          <input type="text" id="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-3 btn-block">Toevoegen</button>
      </form>
    </div>
  );
};

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (loggedIn) {
      fetch('/api/events')
        .then(response => response.json())
        .then(data => {
          setEvents(data);
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'bigbandadmin' && password === 'pasta') {
      setLoggedIn(true);
    } else {
      alert('Onjuiste gebruikersnaam of wachtwoord. Probeer het opnieuw.');
    }
  };

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await fetch(`/api/delete-event/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting event');
      }

      const updatedEvents = events.filter(event => event.id !== id);
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Als je opnieuw inlogd dan kan je evenement wel verwijderen.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              {!loggedIn ? (
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Gebruikersnaam:</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Wachtwoord:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mt-3">Inloggen</button>
                </form>
              ) : (
                <div>
                  <p className="text-success text-center">Je bent ingelogd!</p>
                  {/* Hier kun je de inhoud van de adminpagina plaatsen */}
                  <EventForm onAddEvent={handleAddEvent} />
                  <EventList events={events} onDeleteEvent={handleDeleteEvent} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
