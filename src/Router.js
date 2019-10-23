import React, { lazy, Suspense, useEffect } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';

const Home = lazy(() => import('pages/Home'));
const Locations = lazy(() => import('pages/Locations'));
const Products = lazy(() => import('pages/Products'));

const Scroll = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);
  //
  return props.children;
};

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const ScrollToTop = withRouter(Scroll);

const Loader = () => (
  <div className='section section--wo section--wo--p'>
    <div className='container-fluid'>
      <div className='section__sub'>
        <div className='section__header'>
          <h1 className='text text--lg c-black fw-semi text-center home'>
            loading...
          </h1>
        </div>
      </div>
    </div>
  </div>
);

class RouterComponent extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Home {...props} />
                </Suspense>
              )}
            />

            <Route
              path='/products'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Products {...props} />
                </Suspense>
              )}
            />
            <Route
              path='/location'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Locations {...props} />
                </Suspense>
              )}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default RouterComponent;
