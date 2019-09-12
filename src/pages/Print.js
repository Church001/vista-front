import React from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';
import { Button } from 'reactstrap';
import { ReactComponent as PurpleLeft } from 'assets/svg/purple-left.svg';
import { ReactComponent as PurpleRight } from 'assets/svg/purple-right.svg';

const Print = props => {
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
              <h4 className='text text--lg text-center'>
                Enjoy superior printing & packaging!
              </h4>
              <div className='row justify-content-center'>
                <div className='col-md-9 col-sm-8 col-10'>
                  <p className='text text--sm c-off-dark text-center'>
                    Look no further than our line of products for superior
                    quality printing consumables and light packaging!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>

            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
            <div className='col-xl-4 col-md-4 col-sm-6 mb-4'>
              <Card.Explore
                img={'https://picsum.photos/200'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                }
              />
            </div>
          </div>

          <div className='d-flex justify-content-center mt-40'>
            <Button className='btn__purple btn--rounded btn--lg'>
              LOAD MORE
            </Button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Print;
