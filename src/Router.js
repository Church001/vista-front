import React, { lazy, Suspense, useEffect } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';

const Home = lazy(() => import('pages/Home'));
// const Explore = lazy(() => import('pages/Explore'));
const Print = lazy(() => import('pages/Print'));
const Paper = lazy(() => import('pages/Paper'));
const Stationery = lazy(() => import('pages/Stationery'));
const Agrochemical = lazy(() => import('pages/Agrochemical'));
const Locations = lazy(() => import('pages/Locations'));
const Products = lazy(() => import('pages/Products'));

const Scroll = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

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

const Loader = () => <div>loading</div>;

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
                  <Paper {...props} />
                </Suspense>
              )}
            />

            {/*             
            <Route
              path='/paper'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Paper {...props} />
                </Suspense>
              )}
            />


            <Route
              path='/print'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Print {...props} />
                </Suspense>
              )}
            />
            <Route
              path='/stationery'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Stationery {...props} />
                </Suspense>
              )}
            />

            <Route
              path='/agrochemical'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Agrochemical {...props} />
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
            /> */}
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default RouterComponent;
