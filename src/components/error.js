import React from 'react';

const Error = () => (
  <div className='section section--wo section--wo--p'>
    <div className='container-fluid'>
      <div className='section__sub'>
        <div className='section__header'>
          <h1 className='text text--lg c-black fw-semi text-center home'>
            Oops! something seems to be wrong with you network
          </h1>
          <button
            onClick={() => window.location.reload()}
            className='text text--lg c-blue fw-semi text-center home'
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Error;
