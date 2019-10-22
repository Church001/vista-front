import React, { useState, useEffect } from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';
// import { ReactComponent as Paper } from 'assets/svg/paper.svg';
// import { ReactComponent as Stationery } from 'assets/svg/stationery.svg';
// import { ReactComponent as Print } from 'assets/svg/print.svg';
// import { ReactComponent as OilSpill } from 'assets/svg/oil-spill.svg';
import { ReactComponent as Gradhat } from 'assets/svg/gradhat.svg';
import { ReactComponent as Idea } from 'assets/svg/idea.svg';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';
import { ReactComponent as GreenLeft } from 'assets/svg/green-left.svg';
import { ReactComponent as GreenRight } from 'assets/svg/green-right.svg';

import Paper from 'assets/img/paper.png';
import Stationery from 'assets/img/stationery.png';
import Print from 'assets/img/printing.png';
import OilSpill from 'assets/img/oilspill.png';

import Distribution from 'assets/img/distribution.png';
import Manufacture from 'assets/img/manufacturing.png';
import Trading from 'assets/img/trading.jpeg';
import axios from 'axios';
import api from '../utils/api';

let servicess = [];
let productss = [];
let abouts = [];
let whatWeGives = [];
const falseProductsLoading = ['1', '2', '3', '4'];
const falseServicesLoading = ['1', '2', '3'];

const Home = props => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState(null);
  const [about, setAbout] = useState([]);
  const [whatWeGive, setWhatWeGive] = useState([]);

  useEffect(() => {
    axios
      .get(api.WHAT_WE_GIVE_BACK_URL)
      .then(res => {
        console.log('WHAT WE DO', res.data[0]);
        whatWeGives = res.data[0].givebacks;
        // setWhatWeGive(whatWeGives);
      })
      .catch(err => console.log(err));

    axios
      .get(api.ABOUT_URL)
      .then(res => {
        abouts = res.data;
        abouts = abouts[0];
        setAbout(abouts);
      })
      .catch(err => console.log(err));

    axios
      .get(api.PRODUCT_CATEGORY_URL)
      .then(res => {
        productss = res.data;
        productss = res.data[0]; //NOTE: This is a useless move, I made it because my code works
        setProducts(productss);
      })
      .catch(err => console.log(err));

    axios
      .get(api.SERVICE_URL)
      .then(res => {
        servicess = res.data;
        servicess = servicess[0]; //NOTE: This is a useless move, I made it because my code works
        setServices(servicess);
      })
      .catch(err => console.log(err));

    axios
      .get(api.CONTACTS_URL)
      .then(res => {
        console.log('CONTACT', res.data[0]);
      })
      .catch(err => console.log(err));

    axios
      .get(api.SLIDERS)
      .then(res => console.log('SLIDERS', res.data[0].slides))
      .catch(err => console.log(err));
  }, []);

  const getImage = val => {
    if (val === 'DISTRIBUTION') {
      return Distribution;
    }
    if (val === 'TRADING') {
      return Trading;
    }
    if (val === 'MANUFACTURING') {
      return Manufacture;
    }
  };

  const getIcon = val => {
    //for product icons
    if (val === 'Stationery') {
      return Stationery;
    }
    if (val === 'Printing & Packaging') {
      return Print;
    }
    if (val === 'Paper') {
      return Paper;
    }
    if (val === 'Agrochemicals') {
      return OilSpill;
    }
  };

  const getLinks = val => {
    if (val === 'Stationery') {
      return 'stationery';
    }
    if (val === 'Printing & Packaging') {
      return 'print';
    }
    if (val === 'Paper') {
      return 'paper';
    }
    if (val === 'Agrochemicals') {
      return 'agrochemical';
    }
  };

  return (
    <Wrapper>
      <Hero />
      <SocialLinks alternate />
      <section className='section section--wo section--wo--p' id='about'>
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
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              {abouts.heading ? (
                <h4 className='text text--xs c-purple fw-semi text-center home'>
                  About Us
                </h4>
              ) : (
                <h4 className='text text--xs c-purple fw-semi text-center home'>
                  loading...
                </h4>
              )}
              {abouts.heading ? (
                <h5 className='text text--lg text-center mb-0'>
                  {abouts.heading}
                </h5>
              ) : (
                <h5 className='text text--lg text-center mb-0'>loading...</h5>
              )}
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-7 col-sm-8 col-10'>
                {abouts.description ? (
                  <p className='text text--sm c-off-dark text-center'>
                    {abouts.description}
                  </p>
                ) : (
                  <p className='text text--sm c-off-dark text-center'>
                    loading...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--wo section--wo--p' id='products'>
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
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              {productss.products ? (
                <h4 className='text text--xs c-green fw-semi text-center home'>
                  Our Products
                </h4>
              ) : (
                <h4 className='text text--xs c-green fw-semi text-center home'>
                  loading...
                </h4>
              )}
              {productss.products ? (
                <h5 className='text text--lg text-center mb-0'>
                  {productss.heading}
                </h5>
              ) : (
                <h5 className='text text--lg text-center mb-0'>loading...</h5>
              )}
            </div>
            <div className='row pt-10'>
              {/* <div className='col-lg-3 col-md-4 col-sm-6 mb-5'> */}
              {productss.products
                ? productss.products.map(product => {
                    return (
                      <div
                        key={product.id}
                        className='col-lg-3 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.Product
                          color='green'
                          title={product.title}
                          subtitle={product.description}
                          link={getLinks(product.title)}
                          icon={getIcon(product.title)}
                        />
                      </div>
                    );
                  })
                : falseProductsLoading.map(fal => {
                    return (
                      <div
                        key={fal}
                        className='col-lg-3 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.ProductLoading color='purple' />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>

      <section className='section section--pbg' id='services'>
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              {servicess.servicetypes ? (
                <h4 className='text text--xs c-yellow fw-semi text-center home'>
                  Our services
                </h4>
              ) : (
                <h4 className='text text--xs c-yellow fw-semi text-center home'>
                  loading....
                </h4>
              )}
              {servicess.servicetypes ? (
                <h5 className='text text--lg text-center mb-0'>
                  {servicess.heading}
                </h5>
              ) : (
                <h5 className='text text--lg text-center mb-0'>loading...</h5>
              )}
            </div>

            <div className='row justify-content-center pt-10'>
              {servicess.servicetypes
                ? servicess.servicetypes.map(serve => {
                    return (
                      <div
                        key={serve._id}
                        className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.Service
                          img={getImage(serve.title)}
                          title={serve.title}
                          subtitle={serve.description}
                        />
                      </div>
                    );
                  })
                : falseServicesLoading.map(serv => {
                    return (
                      <div
                        key={serv}
                        className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.ServiceLoading />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>

      <section className='section section--wo section--wo--g'>
        <GreenLeft
          width={230}
          height={502}
          className='symbol--right hide-for-small-only'
        />
        <GreenRight
          width={230}
          height={502}
          className='symbol--left hide-for-small-only'
        />
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header more'>
              {/* { whatWeGives 
                ?
                <h4 className='text text--xs c-red fw-semi text-center home'>
                  What we give back
                </h4>
                :
                <h4 className='text text--xs c-red fw-semi text-center home'>
                  loading...
                </h4>
              }
              {
                whatWeGives 
                ?
                <h5 className='w-50 text text--lg text-center mb-0'>
                  {whatWeGives}
                </h5>
                :
                <h5 className='w-50 text text--lg text-center mb-0'>
                  loading...
                </h5>
              } */}
            </div>
            <div className='row justify-content-center pt-10'>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.CSR
                  color='yellow'
                  title='EMPOWERING EDUCATION'
                  subtitle='We execute initiatives and provide support to education-focused NGOs to increase access to quality education in Nigeria'
                  number='01'
                  icon={<Gradhat />}
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6  mb-5'>
                <Card.CSR
                  color='green'
                  title='COMMUNITY DEVELOPMENT'
                  subtitle='We sponsor and associate with programs designed to generate positive change in our communities.'
                  number='02'
                  icon={<Idea />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Home;
