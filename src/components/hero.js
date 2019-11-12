import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ReactComponent as LeftArrow } from 'assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from 'assets/svg/right-arrow.svg';
// import Typical from 'react-typical';

import axios from 'axios';
import api from '../utils/api';
import GeneralState from 'context/Context';
import history from '../history';
import { SET_CATEGORY_ID } from 'context/Constants';
import { SET_PRODUCT_TITLE } from 'context/Constants';

let current_page_title = '';

let settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

let products = [];

const Slide = ({ btn, img, subtitle, title }) => (
  <div
    className='hero__slide'
    style={{ backgroundImage: `url(/static/media/new-paper.6366cc56.jpg)` }}
  >
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

let slidess = [];

export const Hero = ({ slid }) => {
  const [active, setActive] = useState(0);
  const [sliders, setSlides] = useState([]);
  const { state, dispatch } = useContext(GeneralState);

  useEffect(() => {
    if (current_page_title !== state.page_title) {
      current_page_title = state.page_title;
    }
    products = state.products;
    return;
  }, [state]);

  const handleGoTo = title => {
    if (title === '/#about') {
      window.location.href = '/#about';
    } else {
      let id = '';
      let page_t = '';
      products.map(product => {
        if (product.slug.toUpperCase() === title) {
          page_t = product.slug;
          id = product.id;
        }
      });
      dispatch({
        type: SET_CATEGORY_ID,
        payload: id
      });
      dispatch({
        type: SET_PRODUCT_TITLE,
        payload: page_t
      });
      if (id !== '') {
        history.push(`/products/${id}`);
      }
    }
  };

  useEffect(() => {
    axios
      .get(api.SLIDERS)
      .then(res => {
        slidess = res.data;
        slideObjectCreator(slidess, current_page_title);
      })
      .catch(err => {
        console.log(err);
      });

    return () => setSlides([]);
  }, [state.page_title]);

  let slideRef;

  const slideObjectCreator = (something, title) => {
    let result = [];
    something.map(onething => {
      if (onething.key === title) {
        if (onething.enabled === false) {
          settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1000
          };
        }
        let slides = onething.slides;
        slides.map(anotherthing => {
          let obj = {
            btn: {
              title: anotherthing.button_text,
              link: anotherthing.button_url
            }
          };
          // obj.img = api.BASE_URL + anotherthing.image.url;
          obj.img = anotherthing.image.url;
          obj.id = anotherthing._id;
          obj.title = anotherthing.title;
          obj.subtitle = anotherthing.description;
          result.push(obj);
        });
      }
    });
    setSlides(result);
  };

  return (
    <div className='hero'>
      {sliders && (
        <Slider
          {...settings}
          afterChange={index => setActive(index)}
          ref={slider => {
            slideRef = slider;
          }}
        >
          {sliders.map(slide => {
            const image = slide.img;
            return (
              <div key={slide.id} className='hero__slide'>
                <div
                  className='overlay'
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className='container'>
                  <div className='col-md-7'>
                    <h3 className='title text text--sm c-white fw-regular'>
                      {slide.title}
                    </h3>
                    <h4 className='subtitle text text--xl c-white fw-light'>
                      {slide.subtitle}
                    </h4>
                    {
                      <button
                        className='btn btn__white btn--rounded btn--lg'
                        data-uk-scroll
                        onClick={() => handleGoTo(slide.btn.link)}
                      >
                        {slide.btn.title}
                      </button>
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
      <div className='hero__controls'>
        {sliders && (
          <div className='hero__controls__top'>
            <div className='pills'>
              {sliders.map((slide, index) => (
                <div
                  onClick={() => slideRef.slickGoTo(index)}
                  key={slide.id}
                  style={{
                    width: `${100 / sliders.length}%`
                  }}
                  className={cx('pill', {
                    active: index === active
                  })}
                ></div>
              ))}
            </div>
          </div>
        )}
        <div className='hero__controls__bottom'>
          <LeftArrow
            height={24}
            onClick={() => slideRef.slickPrev()}
            style={{ cursor: 'pointer' }}
            width={24}
          />
          {sliders && (
            <div className='dots'>
              {sliders.map((slide, index) => (
                <div
                  onClick={() => slideRef.slickGoTo(index)}
                  key={slide.id}
                  className={cx('dot', {
                    active: index === active
                  })}
                ></div>
              ))}
            </div>
          )}
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
