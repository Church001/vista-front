import React from 'react';
import { Card, Hero, SocialLinks, Wrapper } from 'components';
import { ReactComponent as Paper } from 'assets/svg/paper.svg';
import { ReactComponent as Stationery } from 'assets/svg/stationery.svg';
import { ReactComponent as Print } from 'assets/svg/print.svg';
import { ReactComponent as OilSpill } from 'assets/svg/oil-spill.svg';
import { ReactComponent as Gradhat } from 'assets/svg/gradhat.svg';
import { ReactComponent as Idea } from 'assets/svg/idea.svg';

const Home = props => {
  return (
    <Wrapper>
      <Hero />
      <SocialLinks alternate />
      <section className='section section--wo section--wo--p'>
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--xs c-purple fw-bold text-center'>
                ABOUT US
              </h4>
              <h5 className='text text--lg text-center mb-0'>
                What is Vista International
              </h5>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-6 col-sm-8 col-10'>
                <p className='text text--sm c-off-dark text-center'>
                  Established in 1992, Vista International Ltd has evolved from
                  being a trading company into one of the largest manufacturers
                  of Education and office stationery products, distributors of
                  paper and Board from the topmost companies of the world,
                  Printing consumables and chemicals, Printing
                  Equipment’s,Machinery and Argo chemicals
                </p>
              </div>
            </div>
          </div>

          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--xs c-green fw-bold text-center'>
                PRODUCTS
              </h4>
              <h5 className='text text--lg text-center mb-0'>
                Some of our products that we offer
              </h5>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='purple'
                  title='Paper'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                  icon={<Paper />}
                />
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='green'
                  title='Stationery'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                  icon={<Stationery />}
                />
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='yellow'
                  title='Printing and Packaging'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                  icon={<Print />}
                />
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='red'
                  title='Agrochemicals'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                  icon={<OilSpill />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--pbg'>
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--xs c-yellow fw-bold text-center'>
                OUR SERVICES
              </h4>
              <h5 className='text text--lg text-center mb-0'>
                Take a look at our amazing services
              </h5>
            </div>

            <div className='row justify-content-center'>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.Service
                  img={'https://picsum.photos/200'}
                  title='MANUFACTORING'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.Service
                  img={'https://picsum.photos/200'}
                  title='DISTRIBUTION'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.Service
                  img={'https://picsum.photos/200'}
                  title='TRADING'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  link='#'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--wo section--wo--g'>
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header more'>
              <h4 className='text text--xs c-red fw-bold text-center'>CSR</h4>
              <h5 className='w-50 text text--lg text-center mb-0'>
                Driven by a mission to guide, support and provide thought
                leadership to all
              </h5>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.CSR
                  color='yellow'
                  title='EMPOWERING EDUCATION'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  number='01'
                  icon={<Gradhat />}
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6  mb-5'>
                <Card.CSR
                  color='green'
                  title='COMMUNITY DEVELOPMENT'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
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
