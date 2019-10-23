import React, { useState, useEffect, useContext } from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';
import { Button } from 'reactstrap';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';
import GeneralState from '../context/Context';
import api from '../utils/api';
import axios from 'axios';

const falseSomething = ['1', '2', '3', '4', '5', '6'];

const Products = props => {
  const { state } = useContext(GeneralState);
  if (state.page_id === '') {
    props.history.goBack();
  }
  const [products, setProducts] = useState({});

  useEffect(() => {
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
        console.log(res.data);
        console.log('CREATED DATA', prod);
        setProducts(prod);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
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
        <div className='container'>
          <div className='section__sub'>
            <div className='section__header'>
              {products.title ? (
                <h4 className='text text--lg text-center'>{products.title}</h4>
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

          {products.products && products.products.length > 0 ? (
            <div className='row'>
              {products.products.map(product => {
                const image = product.image.url;
                return (
                  <div
                    key={product._id}
                    className='col-xl-4 col-md-4 col-sm-6 mb-4'
                  >
                    <Card.Explore img={image} text={product.description} />
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
            {products.title && products.products.length > 9 && (
              <Button className='btn__purple btn--rounded btn--lg'>
                LOAD MORE
              </Button>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Products;

{
  /* <div 
    key={falseOne}
    className='col-xl-4 col-md-4 col-sm-6 mb-4'>
    <Card.Explore
        {
            img={}
            text={}
        }
    />
</div> */
}
