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

  return (
    <div className='card explore-card' data-uk-lightbox='animation: slide'>
      <div
        className='explore-card__header'
        style={{ backgroundImage: `url(${img})` }}
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
      >
        <ModalBody>
          <div className='row'>
            <div className='col-md-6'>
              <img alt='' src={img} />
            </div>
            <div className='col-md-6 modal-content-ct'>
              <div className='modal-body-content pt40'>{text}</div>
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
