import React, { useEffect } from 'react'; // Importeer useEffect uit react
import '../stijlen/App.css'; // Voeg je eigen CSS-bestand toe voor stijlaanpassingen
import { Link } from 'react-router-dom'; // Importeer Link vanuit react-router-dom


function Repertoire() {
  const songs = [
    { title: "A String of Pearls", youtubeLink: "https://www.youtube.com/watch?v=jg2vtWezWbw" },
    { title: "All Of Me", youtubeLink: "https://www.youtube.com/watch?v=6-QQfYQ1mIQ" },
    { title: "April In Paris", youtubeLink: "https://www.youtube.com/watch?v=wCmcoZktZG4" },
    { title: "Birdland", youtubeLink: "https://www.youtube.com/watch?v=_Fm10whccto" },
    { title: "Blue Train", youtubeLink: "https://www.youtube.com/watch?v=HT_Zs5FKDZE" },
    { title: "Bluesette", youtubeLink: "https://www.youtube.com/watch?v=Oi4G6UmYK9U" },
    { title: "Caravan", youtubeLink: "https://www.youtube.com/watch?v=YkLBSLxo5LE" },
    { title: "Cherokee", youtubeLink: "https://www.youtube.com/watch?v=M283JFxesic" },
    { title: "Count Bubba's Revenge", youtubeLink: "https://www.youtube.com/watch?v=hjJpu2TFTEA" },
    { title: "Feeling Good", youtubeLink: "https://www.youtube.com/watch?v=oHs98TEYecM" },
    { title: "Fever", youtubeLink: "https://www.youtube.com/watch?v=JBANWpzsHts" },
    { title: "Fly Me To The Moon", youtubeLink: "https://www.youtube.com/watch?v=ZEcqHA7dbwM" },
    { title: "Georgia On My Mind", youtubeLink: "https://www.youtube.com/watch?v=ggGzE5KfCio" },
    { title: "Groovin' Hard", youtubeLink: "https://www.youtube.com/watch?v=bbVVV6lO27w" },
    { title: "In The Mood", youtubeLink: "https://www.youtube.com/watch?v=_CI-0E_jses" },
    { title: "It Don't Mean A Thing", youtubeLink: "https://www.youtube.com/watch?v=myRc-3oF1d0" },
    { title: "Mack The Knife", youtubeLink: "https://www.youtube.com/watch?v=28ULUQgxJ5M" },
    { title: "Mambo No. 5", youtubeLink: "https://www.youtube.com/watch?v=EK_LN3XEcnw" },
    { title: "Moon Dance", youtubeLink: "https://www.youtube.com/watch?v=6lFxGBB4UGU" },
    { title: "New York, New York", youtubeLink: "https://www.youtube.com/watch?v=le1QF3uoQNg" },
    { title: "Night Train", youtubeLink: "https://www.youtube.com/watch?v=WuZmpN1wTwk" },
    { title: "Satin Doll", youtubeLink: "https://www.youtube.com/watch?v=wTFPV1pk654" },
    { title: "Sing, Sing, Sing", youtubeLink: "https://www.youtube.com/watch?v=r2S1I_ien6A" },
    { title: "Sir Duke", youtubeLink: "https://www.youtube.com/watch?v=EnNgASBdCeo" },
    { title: "Spain", youtubeLink: "https://www.youtube.com/watch?v=sEhQTjgoTdU" },
    { title: "St. Thomas", youtubeLink: "https://www.youtube.com/watch?v=Z4DySQyteRI" },
    { title: "Summertime", youtubeLink: "https://www.youtube.com/watch?v=u2bigf337aU" },
    { title: "Sway", youtubeLink: "https://www.youtube.com/watch?v=a90tZJHBklk" },
    { title: "Take The 'A' Train", youtubeLink: "https://www.youtube.com/watch?v=cb2w2m1JmCY" },
    { title: "The Chicken", youtubeLink: "https://www.youtube.com/watch?v=TgntkGc5iBo" },
    { title: "The Pink Panther", youtubeLink: "https://www.youtube.com/watch?v=VyZiIuMufTA" },
    { title: "The Way You Look Tonight", youtubeLink: "https://www.youtube.com/watch?v=h9ZGKALMMuc" },
    { title: "Tuxedo Junction", youtubeLink: "https://www.youtube.com/watch?v=iBTYcqtaOjg" },
    { title: "When I Fall In Love", youtubeLink: "https://www.youtube.com/watch?v=GfAb0gNPy6s" },
    { title: "Zoot Suit Riot", youtubeLink: "https://www.youtube.com/watch?v=JZm1krVKzBY" }
  ];

  function scrollToRepertoire() {
    const repertoireSection = document.getElementById("repertoire");
    repertoireSection.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const image = new Image();
    image.src = "../fotos/repertoire-foto-1.webp";
  }, []);

  return (
      // container 1 met foto
    <div className="repertoire-container">
      <div className="content">
        <div className="image-container">
          <img src="../fotos/repertoire-foto-1.webp" alt="Beschrijvende tekst voor de afbeelding" />
        </div>
    {/* tweede container 2 met info */}
        <div className="info-container">
          <div className='repertoire-start'>
            <h2 className='repertoire-title'>Wil je onze band zien spelen</h2>
            <div className='repertoire-button'>
              <Link className='custom-link-btn' to='/luisteren'>Klik dan hier</Link>
            </div>
          </div>
        </div>
      </div>

      {/* container 3 met info */}
      <div className="content">
        <div className="info-container">
          <div className="repertoire-start">
            <h2 className="repertoire-title">Wil je de nummers uit ons repertoire horen?</h2>
            <div className="repertoire-button">
              <button className="custom-btn" onClick={scrollToRepertoire}>Klik dan hier</button>
            </div>
          </div>
        </div>
        {/* container 4 met foto */}
        <div className="image-container">
          <img src="../fotos/repertoire-foto-2.webp" alt="Beschrijvende tekst voor de afbeelding" />
        </div>
      </div>

      {/* container 5 met foto */}
      <div id="repertoire" className="content">
        <div className="image-container">
          <img src="../fotos/repertoire-foto-3.webp" alt="Beschrijvende tekst voor de afbeelding" />
        </div>
      </div>

      {/* container 6 met info */}
      <div className="content custom-container">
        <div className="info-container">
          <h3 className='p-3'>Genre 1</h3> 
          {songs.slice(0, 6).map((song, index) => (
            <div key={index} className="song-item">
              <a href={song.youtubeLink} target="_blank" rel="noopener noreferrer">{song.title}</a>
            </div>
          ))}
        </div>
      </div>

      {/* container 7 met info */}
      <div className="content custom-container">
        <div className="info-container">
          <h3 className='p-3'>Genre 2</h3> 
          {songs.slice(6, 12).map((song, index) => (
            <div key={index + 6} className="song-item">
              <a href={song.youtubeLink} target="_blank" rel="noopener noreferrer">{song.title}</a>
            </div>
          ))}
        </div>
      </div>

      {/* container 8 met foto */}
      <div className="content custom-container">
        <div className="image-container">
          <img src="../fotos/repertoire-foto-4.webp" alt="Beschrijvende tekst voor de afbeelding" />
        </div>
      </div>

      {/* container 9 met foto */}
      <div className="content custom-container">
        <div className="image-container">
          <img src="../fotos/repertoire-foto-5.webp" alt="Beschrijvende tekst voor de afbeelding" />
        </div>
      </div>

      {/* container 10 met info */}
      <div className="content custom-container">
        <div className="info-container">
          <h3 className='p-3'>Genre 3</h3> {/* Voeg hier het genre toe */}
          {songs.slice(12, 18).map((song, index) => (
            <div key={index + 12} className="song-item">
              <a href={song.youtubeLink} target="_blank" rel="noopener noreferrer">{song.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Repertoire;
