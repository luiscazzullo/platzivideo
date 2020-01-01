import React from 'react';

import '../assets/styles/CarouselItem.scss';

import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='Pelicula' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play' />
          <img className='carousel-item__details--img' src={plusIcon} alt='Añadir' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
