import React, { useState, useEffect } from 'react';
import * as API from '../../services/moviesApi';
import './Trailer.css';
export default function Trailer({ id }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    API.fetchTrailer({ id })
      .then(data => {
        console.log(data);
        const id = data.results[0].key;
        setSrc(`https://www.youtube.com/embed/${id}`);
      })
      .catch(error => {
        console.log(error.message);
        setSrc(`https://www.youtube.com/embed/2U76x2fD_tE`);
      });
  }, [id]);
  return (
    <div className="trailer-container">
      <iframe
        className="responsive-iframe"
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
