import React, { useState, useEffect, useContext } from 'react';
import { Card, Wrapper } from 'components';
// import { Button } from 'reactstrap';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';
import Branch from 'assets/img/slider-img.jpg';
import Maps from '../components/maps';
import api from '../utils/api';
import axios from 'axios';
import Loader from '../components/loader';
import GeneralState from 'context/Context';
import { SET_ERROR } from 'context/Constants';
import Error from 'components/error';
import StickyLinks from 'components/stickyLinks';
import { SET_PRODUCTS } from 'context/Constants';

let mapRef = null;
const falseLocations = ['1', '2', '3', '4', '5', '6', '7'];
let products = [];
const Location = props => {
  mapRef = React.createRef();
  const { state, dispatch } = useContext(GeneralState);
  const [locations, setLocations] = useState([]);

  const errSetter = err => {
    const error = {};
    error.msg = err;
    dispatch({
      type: SET_ERROR,
      payload: error
    });
  };

  useEffect(() => {
    axios
      .get(api.LOCATONS)
      .then(res => {
        setLocations(res.data[0]);
      })
      .catch(err => {
        errSetter(err);
      });

    if (state.products.length === 0) {
      axios.get(api.PRODUCT_CATEGORY_URL).then(res => {
        products = res.data[0];
        dispatch({
          type: SET_PRODUCTS,
          payload: res.data[0].products
        });
      });
    }
  }, []);

  useEffect(() => {
    console.log('MAP REF', mapRef);
  }, [mapRef]);

  return state.error.msg === undefined ? (
    locations.length !== 0 ? (
      <Wrapper>
        <div ref={mapRef} className='map'>
          <Maps />
        </div>
        <StickyLinks />
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
          <div
            className='container'
            data-uk-scrollspy='cls: uk-animation-slide-bottom; target: .section__sub; delay: 500; repeat: true'
          >
            <div className='section__sub'>
              <div className='section__header'>
                {locations.heading ? (
                  <h4 className='text text--lg text-center'>
                    {locations.heading}
                  </h4>
                ) : (
                  <h4 className='text text--lg text-center'>loading</h4>
                )}
                <div className='row justify-content-center'>
                  {locations.description ? (
                    <div className='col-md-9 col-sm-8 col-10'>
                      <p className='text text--sm c-off-dark text-center'>
                        {locations.description}
                      </p>
                    </div>
                  ) : (
                    <div className='col-md-9 col-sm-8 col-10'>
                      <p className='text text--sm c-off-dark text-center'>
                        loading
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='row'>
              {locations.cities
                ? locations.cities.map(city => {
                    let phone = 'Tel: +' + city.telephone;
                    return (
                      <div
                        key={city.id}
                        className='col-xl-4 col-md-4 col-sm-6 mb-4'
                      >
                        <Card.Location
                          text={city.name}
                          ntext={city.address}
                          otext={phone}
                        />
                      </div>
                    );
                  })
                : falseLocations.map(falseLocation => {
                    return (
                      <div
                        key={falseLocation}
                        className='col-xl-4 col-md-4 col-sm-6 mb-4'
                      >
                        <Card.LocationLoading />
                      </div>
                    );
                  })}
            </div>
            <div className='row'>
              <div className='col-xl-12'>
                <img className='map__image' src={Branch} />
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    ) : (
      <Loader />
    )
  ) : (
    <Error />
  );
};
export default Location;
