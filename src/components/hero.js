import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ReactComponent as LeftArrow } from 'assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from 'assets/svg/right-arrow.svg';
import Typical from 'react-typical';

import axios from 'axios';
import api from '../utils/api';
import GeneralState from 'context/Context';
import history from '../history';
import { SET_CATEGORY_ID } from 'context/Constants';

let current_page_title = '';

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000
};

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

  // console.log('CURRENT PAGE TITLE', state.page_title);
  // const redirector = () => {
  //   window.location.href = 'https://www.officeeverything.com.ng';
  // };
  useEffect(() => {
    if (current_page_title !== state.page_title) {
      current_page_title = state.page_title;
    }
  }, [state]);

  const extractID = (name, data) => {
    let result = null;
    data.map(one => {
      if (name === one.title.toUpperCase()) {
        result = one.id;
      } else {
        if (one.title === 'Stationery') {
          result = one.id;
        }
        if (one.title === 'Paper') {
          result = one.id;
        }
        if (one.title === 'Printing & Packaging') {
          result = one.id;
        }
      }
    });
    return result;
  };

  const setId = id => {
    dispatch({
      type: SET_CATEGORY_ID,
      payload: id
    });
    history.push(`/products/${id}`);
  };

  const customRedirector = data => {
    console.log(state.products);
    if (data === 'VISTA INTERNATIONAL') {
      console.log('VISTA INTERNATIONAL WAS CLICKED');
      window.location.href = '/#about';
    }
    if (data === 'QUALITY PAPER') {
      setId(extractID(data, state.products));
    }
    if (data === 'STATIONARY') {
      console.log(data.toUpperCase());
      setId(extractID(data, state.products));
    }
    if (data === 'AGROCHEMICALS') {
      setId(extractID(data, state.products));
    }
    if (data === 'PRINTING & PACKAGING') {
      setId(extractID(data, state.products));
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
  }, [state.page_title]);

  let slideRef;

  const slideObjectCreator = (something, title) => {
    let result = [];
    something.map(onething => {
      if (onething.sliders === title) {
        let slides = onething.slides;
        slides.map(anotherthing => {
          let obj = {
            btn: {
              title: anotherthing.button_text,
              link: anotherthing.button_url
            }
          };
          obj.img = api.BASE_URL + anotherthing.image.url;
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
                      //   slide.btn && slide.btn.title ? (
                      //   <div>
                      //     {slide.btn.link ===
                      //     'https://www.officeeverything.com.ng/' ? (
                      //       <button
                      //         className='btn btn__white btn--rounded btn--lg'
                      //         data-uk-scroll
                      //         onClick={() => redirector()}
                      //       >
                      //         {slide.btn.title}
                      //       </button>
                      //     ) : (
                      //       <button
                      //         className='btn btn__white btn--rounded btn--lg'
                      //         data-uk-scroll
                      //         href={slide.btn.link}
                      //       >
                      //         {slide.btn.title}
                      //       </button>
                      //     )}
                      //   </div>
                      // ) : null
                      <button
                        className='btn btn__white btn--rounded btn--lg'
                        data-uk-scroll
                        // onClick={() => customRedirector(slide.title)}
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
