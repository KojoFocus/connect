import React, { useState } from 'react';
import Image from 'next/image';

interface Slide {
  smallTitle: string;
  strongTitle: string;
  mainTitle: string;
  buttonText: string;
  youtubeLink: string;
  imageUrl: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-fade hero-carousel slide"
      data-bs-ride="carousel"
      style={{ height: '100vh', marginBottom: '0' }}
    >
      <div className="carousel-inner" style={{ height: '100%' }}>
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={index}
            style={{
              height: '100%',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.mainTitle}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>

            <div
              className="container-fluid h-100"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
              }}
            >
              <small className="small-title" style={{ fontSize: '1rem' }}>
                {slide.smallTitle} <strong className="text-warning">{slide.strongTitle}</strong>
              </small>
              <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>{slide.mainTitle}</h1>
              <div className="d-flex align-items-center mt-4">
                <ButtonLink slide={slide} /> {/* Use the new component */}
                <a
                  className="popup-youtube custom-icon d-flex"
                  href={slide.youtubeLink}
                  style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                  }}
                >
                  <i className="bi-play play-icon text-white" style={{ fontSize: '1.2rem' }}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

// New ButtonLink component to handle hover state
const ButtonLink: React.FC<{ slide: Slide }> = ({ slide }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <a
      className="btn btn-lg"
      href={slide.youtubeLink} // Corrected href
      style={{
        backgroundColor: isHovering ? '#ffc206' : '#dc3546',
        color: '#fff',
        padding: '15px 30px',
        textDecoration: 'none',
        borderRadius: '40px',
        fontWeight: 'bold',
        marginRight: '15px',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {slide.buttonText}
    </a>
  );
};

export default Carousel;