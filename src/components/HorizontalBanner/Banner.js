import React from 'react';
import './bannerStyles.css';

const Banner = ({ images, speed }) => {
  return (
    <div className='inner'>
      <div className='wrapper'>
        <section style={{ "--speed": `${speed}ms`}}>
            {images.map(({ id, image }) => (
                <div className='image' key={id}>
                    <img src={image} alt={id}/>
                </div>
            ))}
        </section>

        <section style={{ "--speed": `${speed}ms`}}>
            {images.map(({ id, image }) => (
                <div className='image' key={id}>
                    <img src={image} alt={id} />
                </div>
            ))}
        </section>

        <section style={{ "--speed": `${speed}ms`}}>
            {images.map(({ id, image }) => (
                <div className='image' key={id}>
                    <img src={image} alt={id} />
                </div>
            ))}
        </section>
        
      </div>
    </div>
  )
}

export { Banner }
