import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';

export const ExploreCard = ({ img, text }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const closeBtn = (
  //   <button className='close' onClick={toggle}>
  //     &times;
  //   </button>
  // );

  const externalCloseBtn = (
    <button
      className='close'
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  let count = 0;

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
        data-slide-to={count}
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
                <li
                  data-target='#carouselExample'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li data-target='#carouselExample' data-slide-to='1'></li>
                <li data-target='#carouselExample' data-slide-to='2'></li>
                <li data-target='#carouselExample' data-slide-to='3'></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img alt='' src={img} className='img-fill' />
                    </div>
                    <div className='col-md-6 modal-content-ct'>
                      <div className='modal-body-content pt40'>{text}</div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className='carousel-control-prev'
                href='#carouselExample'
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
                href='#carouselExample'
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
