import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ReactComponent as LeftArrow } from 'assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from 'assets/svg/right-arrow.svg';

import Paper from 'assets/img/new-paper.jpg';
// import Stationery from 'assets/img/stationery.jpg';
import Print from 'assets/img/printing-packaging.png';
import Agro from 'assets/img/agrochemicals.jpg';

import axios from 'axios';
import api from '../utils/api';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const slideObjectCreator = something => {
  let result = [];
  something.map(onething => {
    let obj = {};
    console.log(onething);
  });
  return result;
};

let slidess = [];
const Slide = ({ btn, img, subtitle, title }) => (
  <div className='hero__slide' style={{ backgroundImage: `url(${img})` }}>
    <div className='overlay'></div>
    <div className='container'>
      <div className='col-md-7'>
        <h3 className='title text text--sm c-white fw-regular'>{title}</h3>
        <h4 className='subtitle text text--xl c-white fw-light'>{subtitle}</h4>

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
  const [sliders, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get(api.SLIDERS)
      .then(res => {
        console.log(res.data[0].slides);
        slidess = res.data[0].slides;
        setSlides(res.data[0].slides);
        slideObjectCreator(slidess);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
      id: 'ag',
      img: Paper,
      title: 'VISTA INTERNATIONAL',
      subtitle:
        'Your source for world-class paper, stationery, printing & agrochemical products',
      btn: {
        title: 'LEARN MORE',
        link: '#'
      }
    },
    {
      id: 'ra',
      img: Print,
      title: 'OFFICE EVERYTHING',
      subtitle:
        'Trusted companion for superior quality stationery, furniture, technology and everything for your office',
      btn: {
        title: 'LEARN MORE',
        link: '#'
      }
    },
    {
      id: 'nd',
      img: Agro,
      title: 'VISTA INITIATIVES',
      subtitle: 'What we give back to the community',
      btn: {
        title: 'LEARN MORE',
        link: '#'
      }
    }
  ]
};
