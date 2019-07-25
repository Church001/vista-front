import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ReactComponent as LeftArrow } from 'assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from 'assets/svg/right-arrow.svg';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slide = ({ btn, img, subtitle, title }) => (
  <div className='hero__slide' style={{ backgroundImage: `url(${img})` }}>
    <div className='overlay'></div>
    <div className='container'>
      <div className='col-md-6'>
        <h3 className='title text text--sm c-white fw-semi'>{title}</h3>
        <h4 className='subtitle text text--xl c-white fw-regular'>
          {subtitle}
        </h4>

        {btn && btn.title ? (
          <Link to={btn.link} className='btn btn__white btn--rounded btn--lg'>
            {btn.title}
          </Link>
        ) : null}
      </div>
    </div>
  </div>
);

export const Hero = ({ slides }) => {
  const [active, setActive] = useState(0);
  let slideRef;
  return (
    <div className='hero'>
      <Slider
        {...settings}
        afterChange={index => setActive(index)}
        ref={slider => {
          slideRef = slider;
        }}
      >
        {slides.map(slide => (
          <Slide key={slide.id} {...slide} />
        ))}
      </Slider>
      <div className='hero__controls'>
        <div className='hero__controls__top'>
          <div className='pills'>
            {slides.map((slide, index) => (
              <div
                onClick={() => slideRef.slickGoTo(index)}
                key={slide.id}
                style={{ width: `${100 / slides.length}%` }}
                className={cx('pill', {
                  active: index === active
                })}
              ></div>
            ))}
          </div>
        </div>
        <div className='hero__controls__bottom'>
          <LeftArrow
            height={24}
            onClick={() => slideRef.slickPrev()}
            style={{ cursor: 'pointer' }}
            width={24}
          />
          <div className='dots'>
            {slides.map((slide, index) => (
              <div
                onClick={() => slideRef.slickGoTo(index)}
                key={slide.id}
                className={cx('dot', {
                  active: index === active
                })}
              ></div>
            ))}
          </div>
          <RightArrow
            height={24}
            onClick={() => slideRef.slickNext()}
            style={{ cursor: 'pointer' }}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  btn: PropTypes.object,
  img: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

Hero.propTypes = {
  slides: PropTypes.array
};

Hero.defaultProps = {
  slides: [
    {
      id: 'ra',
      img: 'https://picsum.photos/600',
      title: 'Manufacturing',
      subtitle:
        'The best in paper, stationery, printing & agrochemical products',
      btn: {
        title: 'LEARN MORE',
        link: '#'
      }
    },
    {
      id: 'nd',
      img: 'https://picsum.photos/600',
      title: 'DISTRIBUTION',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      btn: {
        title: 'LEARN MORE',
        link: '#'
      }
    },
    {
      id: 'om',
      img: 'https://picsum.photos/600',
      title: 'TRADING',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      btn: {
        title: 'LEARN MORE',
        link: '#'
      }
    }
  ]
};
