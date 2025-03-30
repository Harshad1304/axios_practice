import React from 'react';

const Card = ({ title, posterUrl, year}) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">⭐ Year:- {year}</p>
      </div>
    </div>
  );
};

export default Card;
