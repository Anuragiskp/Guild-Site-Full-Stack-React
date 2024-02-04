import React from "react";
import ImageSlider from './3d-carousel';
import { IMAGES } from './data';

export const Moments = () => {
  return (
    <div className="moments-title" id="gallery">  
      <h3>🌟Best Moments🌟</h3>
      <div className='test'>
        <div className='container'>
          <ImageSlider images={IMAGES} />
        </div>
      </div>
    </div>
  );
};