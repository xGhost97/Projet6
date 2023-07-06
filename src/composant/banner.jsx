import React from 'react';
import '../style/Banner.css';

const Banner = ({ image, text }) => {
  return (
    <div>
      <img src={image} alt="img" className='logo-header' />
      <p className='text-overlay'>{text}</p>
    </div>
  );
};

export default Banner;
