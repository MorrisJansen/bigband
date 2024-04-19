import React from 'react';
import '../stijlen/App.css';




const leden = [
  {
    id: 1,
    naam: 'Stanislav Mitrovic (daan?)',
    instrument: 'Orkestleider',
    fotoUrl: '../fotos/oorkestleiderDavid.webp', 
  },
  {
    id: 2,
    naam: 'Alicia Wevers',
    instrument: 'Zang',
    fotoUrl: '../fotos/aliciaWevers.webp',
  },
  {
    id: 3,
    naam: 'Gerard Teunisse',
    instrument: 'Drums',
    fotoUrl: './fotos/gerard3.webp',
  },
  {
    id: 4,
    naam: 'Vincent van Steen',
    instrument: 'Bas',
    fotoUrl: '/fotos/vincentvanSteen.webp',
  },
  {
    id: 5,
    naam: 'Kees Flameling',
    instrument: 'Piano',
    fotoUrl: '/fotos/keesFlameling.webp',
  },
  {
    id: 6,
    naam: 'Peter Jansen',
    instrument: 'Gitaar',
    fotoUrl: '/fotos/peterJansen.webp',
  },
  {
    id: 7,
    naam: 'Pjotr Jurtschenko',
    instrument: 'Alt Sax',
    fotoUrl: '/fotos/pjotrJurtschenko.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 8,
    naam: 'Tonke Joppe',
    instrument: 'Alt Sax',
    fotoUrl: '/fotos/tonkeJoppe.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 9,
    naam: 'Piet Boer',
    instrument: 'Tenor Sax',
    fotoUrl: '/fotos/pietBoer.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 10,
    naam: 'Daphne Doekemeijer',
    instrument: 'Tenor Sax',
    fotoUrl: '/fotos/daphneDoekemeijer.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 11,
    naam: 'Jan van Santvoort',
    instrument: 'Bariton Sax',
    fotoUrl: '/fotos/janvanZantvoort.webp', 
  },
  {
    id: 12,
    naam: 'Axel Zilvertand',
    instrument: 'Trompet',
    fotoUrl: '/fotos/axelZilvertand.webp', 
  },
  {
    id: 13,
    naam: 'Jasper Daams',
    instrument: 'Trompet',
    fotoUrl: '/fotos/jasperDaams.webp',
  },
  {
    id: 14,
    naam: 'Peter Lachnit',
    instrument: 'Trompet',
    fotoUrl: '/fotos/peterLachnit.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 15,
    naam: 'Marianne van de Meiracker',
    instrument: 'Trompet',
    fotoUrl: '/fotos/mariannevandeMeiracker.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 16,
    naam: 'Han Geerligs',
    instrument: 'Trombone',
    fotoUrl: '/fotos/hanGeerligs.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 17,
    naam: 'Pieter Jan de Jager',
    instrument: 'Trombone',
    fotoUrl: '/fotos/pieterJandeJager.webp', // Vervang dit met het juiste pad naar de foto
  },
  {
    id: 18,
    naam: 'Leo van der Kruk',
    instrument: 'Bas Trombone',
    fotoUrl: '/fotos/leovanderKruk.webp',
  },
  {
    id: 19,
    naam: 'onbekend Trombone',
    instrument: 'Trombone',
    fotoUrl: '/fotos/onbekendeTrombone.webp',
  },
];





function OverOns() {
  return (
    <div className="OverOns-container">
      <h1 className='center-text'>Over ons</h1>
      <div className='OverOns-text center-text'>
        <p>Voor de band staat zangeres Alicia Wevers en helemaal vooraan orkestleider, Stanislav Mitrovic.</p>
        <hr className='onderlijn'></hr>
        <p>Enterprise heeft in de loop der tijd een veelzijdig repertoire opgebouwd. De ruggengraat daarvan wordt gevormd door stukken uit het American songbook, bekend door onder meer Duke Ellington, Count Basie en de zangers Frank Sinatra, Billy Holliday, Ray Charles en vele anderen.</p>
        <hr className='onderlijn'></hr>
        <p>Daar blijft het overigens niet bij. De band speelt ook Latinnummers, Funky grooves, Dansmuziek, maar ook schitterende ballads. Daarbij komen de kwaliteiten van de solisten goed over het voetlicht. Op die manier is een optreden van de bigband Enterprise een lekker sfeervolle gebeurtenis, het spelplezier spat er dan vanaf.</p>
      </div>
      <hr className='onderlijn'></hr>
      <h2 className='center-text py-4'>Onze Leden</h2>
      <div className="row lid-container">
        {leden.map((lid) => (
          <div key={lid.id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <div className="lid mx-auto">
              <img
                src={lid.fotoUrl}
                alt={lid.naam}
                className={`rounded-circle ${lid.naam.toLowerCase().replace(' ', '-')}`} // Dynamische klasse gebaseerd op de naam van het lid
              />
              <div className="lid-details">
                <h3>{lid.naam}</h3>
                <p>{lid.instrument}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverOns;