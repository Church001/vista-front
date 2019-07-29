import React from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';

const Explore = props => {
  return (
    <Wrapper>
      <Hero />
      <SocialLinks alternate />

      <section className='section section--wo section--wo--p'>
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--lg text-center'>
                Explore our items paper
              </h4>
              <div className='row justify-content-center'>
                <div className='col-md-9 col-sm-8 col-10'>
                  <p className='text text--sm c-off-dark text-center'>
                    We supply top-quality paper technology solutions for your
                    best prints all over Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>

            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>

            <div className='col-xl-3  col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Explore;
