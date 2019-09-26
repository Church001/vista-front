import React from 'react';
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

const Home = props => {
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
        <div className='container-fluid'>
          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--xs c-purple fw-semi text-center home'>
                About Us
              </h4>
              <h5 className='text text--lg text-center mb-0'>
                The Vista Advantage
              </h5>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-7 col-sm-8 col-10'>
                <p className='text text--sm c-off-dark text-center'>
                  We started out as a trading company in 1992 and throughout our
                  evolution to one of the largest manufacturers and distributors
                  of paper, stationery, printing equipment and agrochemical
                  products in West Africa, Vista International Ltd has been
                  committed to providing you with superior quality and a world
                  class experience in our products.
                </p>
              </div>
            </div>
          </div>

          <div className='section__sub'>
            <div className='section__header'>
              <h4 className='text text--xs c-green fw-semi text-center home'>
                Our Products
              </h4>
              <h5 className='text text--lg text-center mb-0'>
                World class products just for you
              </h5>
            </div>
            <div className='row pt-10'>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='purple'
                  title='Paper'
                  subtitle='Enjoy seamless writing, printing & everything in between with our top quality papers, perfect for all your needs!'
                  link='paper'
                  icon={Paper}
                />
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='green'
                  title='Stationery'
                  subtitle='Ready to note that idea down or get back to school? Explore our exciting stationery for a smooth-sailing experience!'
                  link='stationery'
                  icon={Stationery}
                />
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='yellow'
                  title='Printing & Packaging'
                  subtitle='Look no further for superior quality printing consumables and equipment. Our light packaging also offers you state of the art solutions for your requirements!'
                  link='print'
                  icon={Print}
                />
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6 mb-5'>
                <Card.Product
                  color='red'
                  title='Agrochemicals'
                  subtitle='Get rid of all those pesky pests and increase your productivity with our highly effective herbicides & insecticides.'
                  link='agrochemical'
                  icon={OilSpill}
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
              <h4 className='text text--xs c-yellow fw-semi text-center home'>
                Our services
              </h4>
              <h5 className='text text--lg text-center mb-0'>
                Enjoy our top notch services
              </h5>
            </div>

            <div className='row justify-content-center pt-10'>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.Service
                  img={Manufacture}
                  title='MANUFACTURING'
                  subtitle='World class quality stationery for you such as Exercise Books, Hardcover books, Spiral Books, Sketch Pads and more'
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.Service
                  img={Distribution}
                  title='DISTRIBUTION'
                  subtitle='Quality products chosen and distributed to serve your discerning taste.'
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                <Card.Service
                  img={Trading}
                  title='TRADING'
                  subtitle='Raw materials sourced from world class producers in bulk for industrial use'
                />
              </div>
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
              <h4 className='text text--xs c-red fw-semi text-center home'>
                What we give back
              </h4>
              <h5 className='w-50 text text--lg text-center mb-0'>
                Driven by a mission for sustainable development
              </h5>
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
