import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';
import GeneralState from 'context/Context';

export const ExploreCard = ({ img, text, product }) => {
  const { state } = useContext(GeneralState);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const toggle = () => setModal(!modal);
  const externalCloseBtn = (
    <button
      className='close'
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  useEffect(() => {
    if (currentIndex === null) {
      setCurrentIndex(state.product_items.indexOf(product));
    }
  }, [currentIndex]);

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex);
    }
  };

  const onNext = () => {
    if (currentIndex < state.product_items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex);
    }
  };

  return (
    <div
      className='card explore-card'
      id='gallery'
      data-toggle='modal'
      data-target='#exampleModal'
      data-uk-lightbox='animation: slide'
      onClick={toggle}
      style={{ cursor: 'pointer' }}
    >
      <div
        className='explore-card__header'
        style={{ backgroundImage: `url(${img})` }}
        data-target='#carouselExample'
        data-slide-to={currentIndex}
      />
      <div className='explore-card__body'>
        <p
          className='text text--xs c-off-dark text-center mb-0'
          style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {text.length > 10 ? text.substring(0, 60) + '...' : text}
        </p>
      </div>

      <Button color='secondary' size='lg' onClick={toggle}>
        Read More
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className='modal-dialog modal-dialog-centered modal-xl'
        external={externalCloseBtn}
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <ModalBody>
          <div className='row'>
            <div
              id='carouselExample'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                {state.product_items.map(one => {
                  return (
                    <li
                      key={one.id}
                      data-target='#carouselExample'
                      data-slide-to={state.product_items.indexOf(one)}
                      className={
                        state.product_items.indexOf(one) === currentIndex
                          ? 'active'
                          : ''
                      }
                    ></li>
                  );
                })}
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  {state.product_items.map(single => {
                    if (state.product_items.indexOf(single) === currentIndex) {
                      return (
                        <div key={single.id} className='row fade-in'>
                          <div className='col-md-6'>
                            <img
                              alt=''
                              src={single.image.url}
                              className='img-fill'
                            />
                          </div>
                          <div className='col-md-6 modal-content-ct'>
                            <div className='modal-body-content pt40'>
                              {single.description}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <a
                className='carousel-control-prev'
                // href='#carouselExample'
                onClick={onPrev}
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                // href='#carouselExample'
                onClick={onNext}
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export const ExploreCardLoading = () => {
  return (
    <div className='card explore-card'>
      <div className='explore-card__header' />
      <div className='explore-card__body'>
        <p className='text text--xs c-off-dark text-center mb-0'>loading...</p>
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
};
