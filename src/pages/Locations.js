import React from 'react';
import { Card, Wrapper } from 'components';
// import { Button } from 'reactstrap';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';

const Location = props => {
  return (
    <Wrapper>
      <div className='map'></div>
      <section className='section section--wo section--wo--p'>
        <PurpleLeft
          width={230}
          height={502}
          className='symbol--right hide-for-small-only'
        />
        <PurpleRight
          width={230}
          height={502}
          className='symbol--left hide-for-small-only'
        />
        <div className='container'>
          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--lg text-center'>
                Find us at your location
              </h4>
              <div className='row justify-content-center'>
                <div className='col-md-9 col-sm-8 col-10'>
                  <p className='text text--sm c-off-dark text-center'>
                    We're in every major city in Nigeria, so find us around you
                    and let us know what you need!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Location
                text={'Abuja Branch'}
                ntext={
                  'Plot 764 Cad Zone, C-16, Idu Industrial Area, Near Larfarge Plant Abuja.'
                }
                otext={'Tel: +2349053807969'}
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Location
                text={'Kaduna Branch'}
                ntext={
                  'I5 Inuwa Abdulkadir Road, Industrial Estate, Kaduna South, Kaduna.'
                }
                otext={'Tel: +2348126300272'}
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Location
                text={'Port Harcourt Branch'}
                ntext={
                  '270, Trans Amadi Industrial Layout, Triana Ltd Compound Near LG Shop, Opp Mainstreet Bank, PHC.'
                }
                otext={'Tel: +2348126300427'}
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Location
                text={'Ibadan Branch'}
                ntext={
                  '8, Ajia Street, Behind Capital Building, Off Ring Road, Ibadan.'
                }
                otext={'Tel: +2348126300108'}
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Location
                text={'Maiduguri Branch'}
                ntext={
                  'Former Leventis Supermarket, Opp Ramat Shopping Plaza, Maiduguri, Borno'
                }
                otext={'Tel: +2349053807969'}
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Location
                text={'Kano Branch'}
                ntext={'Kundial Road, Bompal Industrial Layout, Bompal, Kano.'}
                otext={'Tel: +2348150865735'}
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Location;
