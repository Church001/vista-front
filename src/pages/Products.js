import React, { useState, useEffect, useContext } from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';
import { Button } from 'reactstrap';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';
import GeneralState from '../context/Context';
import api from '../utils/api';
import axios from 'axios';
import Loader from '../components/loader';
import { SET_ERROR } from 'context/Constants';
import Error from 'components/error';

const falseSomething = ['1', '2', '3', '4', '5', '6'];
let beginning = 0;
let end = 3;

const Products = props => {
  const { state, dispatch } = useContext(GeneralState);
  const [products, setProducts] = useState({});
  const [allProductss, setAllProductss] = useState([]);
  const [productHolder, setProductHolder] = useState([]);
  const [productLength, setProductLength] = useState(0);

  const errSetter = err => {
    const error = {};
    error.msg = err;
    dispatch({
      type: SET_ERROR,
      payload: error
    });
  };

  if (state.page_id === '') {
    props.history.push('/');
  }

  const loadMore = () => {
    setProductLength(0);
    if (allProductss.length !== 0) {
      setProductHolder(allProductss);
    }
  };

  useEffect(() => {
    if (products) {
      setProducts([]);
    }
    const endpoint = api.PRODUCT_URL + '/' + state.page_id;
    axios
      .get(endpoint)
      .then(res => {
        const prod = {
          description: res.data.description,
          img: api.BASE_URL + res.data.feature_image.url,
          title: res.data.title,
          products: res.data.productitems,
          id: res.data.id
        };
        let allProducts = res.data.productitems;
        if (allProducts.length > 3) {
          setProductHolder(allProducts.slice(beginning, end));
          setProductLength(allProducts.length);
        } else {
          setProductHolder(allProducts);
        }
        setProducts(prod);
        setAllProductss(allProducts);
      })
      .catch(err => {
        errSetter(err);
      });

    return () => setProductLength(0);
  }, [state.page_id]);

  return state.error.msg === undefined ? (
    products.id !== undefined ? (
      <Wrapper>
        <Hero />
        <SocialLinks alternate />
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
                {products.title ? (
                  <h4 className='text text--lg text-center'>
                    {products.title}
                  </h4>
                ) : (
                  <h4 className='text text--lg text-center'>loading...</h4>
                )}
                <div className='row justify-content-center'>
                  {products.description ? (
                    <div className='col-md-9 col-sm-8 col-10'>
                      <p className='text text--sm c-off-dark text-center'>
                        {products.description}
                      </p>
                    </div>
                  ) : (
                    <div className='col-md-9 col-sm-8 col-10'>
                      <p className='text text--sm c-off-dark text-center'>
                        loading...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {!products.products && (
              <div className='row'>
                {falseSomething.map(falseOne => {
                  return (
                    <div
                      key={falseOne}
                      className='col-xl-4 col-md-4 col-sm-6 mb-4'
                    >
                      <Card.ExploreLoading />
                    </div>
                  );
                })}
              </div>
            )}

            {products.products && productHolder.length > 0 ? (
              <div className='row'>
                {productHolder.map(product => {
                  const image = product.image.url;
                  console.log('PRODSSSS', product);
                  return (
                    <div
                      key={product._id}
                      className='col-xl-4 col-md-4 col-sm-6 mb-4'
                    >
                      <Card.Explore
                        img={image}
                        text={product.description}
                        id={product.id}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className='row justify-content-center'>
                <div className='col-md-9 col-sm-8 col-10'>
                  <p className='text text--lg c-off-dark text-center'>
                    No Product available for this Category
                  </p>
                </div>
              </div>
            )}
            <div className='d-flex justify-content-center mt-40'>
              {productLength > 3 && (
                <Button
                  className='btn__purple btn--rounded btn--lg'
                  onClick={() => loadMore()}
                >
                  LOAD MORE
                </Button>
              )}
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
export default Products;
