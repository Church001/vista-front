import React, { useState, useEffect, useContext } from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';
import { ReactComponent as Gradhat } from 'assets/svg/gradhat.svg';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';
import { ReactComponent as GreenLeft } from 'assets/svg/green-left.svg';
import { ReactComponent as GreenRight } from 'assets/svg/green-right.svg';
import axios from 'axios';
import api from '../utils/api';
import GeneralContext from '../context/Context';
import Loader from 'components/loader';

let servicess = [];
let productss = [];
let abouts = [];
let whatWeGives = [];
const falseProductsLoading = ['1', '2', '3', '4'];
const falseServicesLoading = ['1', '2', '3'];
const falseWhatWeGive = ['1', '2'];

const Home = () => {
  const { state, dispatch } = useContext(GeneralContext);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState(null);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get(api.WHAT_WE_GIVE_BACK_URL)
      .then(res => {
        whatWeGives = res.data[0];
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
  }, []);

  const colorChange = val => {
    if (val === 'EMPOWERING EDUCATION') {
      return { color: 'yellow', number: '1' };
    }
    if (val === 'COMMUNITY DEVELOPMENT') {
      return { color: 'green', number: '2' };
    }
  };

  return productss.length == 0 ? (
    <Loader />
  ) : (
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
                    // console.log("PRODUCTS HERE", products)
                    let image = api.BASE_URL + product.feature_image.url;
                    return (
                      <div
                        key={product.id}
                        className='col-lg-3 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.Product
                          color='green'
                          title={product.title}
                          subtitle={product.description}
                          link={'products'}
                          icon={image}
                          id={product.id}
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
                    let image = api.BASE_URL + serve.feature_image.url;
                    return (
                      <div
                        key={serve._id}
                        className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.Service
                          img={image}
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
              {whatWeGives.givebacks ? (
                <h4 className='text text--xs c-red fw-semi text-center home'>
                  What we give back
                </h4>
              ) : (
                <h4 className='text text--xs c-red fw-semi text-center home'>
                  loading...
                </h4>
              )}
              {whatWeGives.givebacks ? (
                <h5 className='w-50 text text--lg text-center mb-0'>
                  {whatWeGives.heading}
                </h5>
              ) : (
                <h5 className='w-50 text text--lg text-center mb-0'>
                  loading...
                </h5>
              )}
            </div>
            <div className='row justify-content-center pt-10'>
              {whatWeGives.givebacks
                ? whatWeGives.givebacks.map(giveback => {
                    return (
                      <div
                        key={giveback.id}
                        className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.CSR
                          color={colorChange(giveback.title).color}
                          title={giveback.title}
                          subtitle={giveback.description}
                          number={colorChange(giveback.title).number}
                          icon={<Gradhat />}
                        />
                      </div>
                    );
                  })
                : falseWhatWeGive.map(falswWhat => {
                    return (
                      <div
                        key={falswWhat}
                        className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'
                      >
                        <Card.CSRCardLoading />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Home;
