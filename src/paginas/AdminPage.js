import React, { useState } from 'react';

function AdminPage() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEvent = {
      date: formData.get('date'),
      title: formData.get('title'),
      location: formData.get('location'),
      time: formData.get('time'),
    };
    setEvents([...events, newEvent]);
    event.target.reset();
  };

  return (
    <div>
      <h1>Admin Pagina</h1>
      <form onSubmit={handleAddEvent}>
        <label>
          Datum:
          <input type="date" name="date" required />
        </label>
        <label>
          Titel:
          <input type="text" name="title" required />
        </label>
        <label>
          Locatie:
          <input type="text" name="location" required />
        </label>
        <label>
          Tijdstip:
          <input type="time" name="time" required />
        </label>
        <button type="submit">Evenement toevoegen</button>
      </form>
    </div>
  );
}

export default AdminPage;
