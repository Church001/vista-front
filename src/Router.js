import React, { lazy, Suspense, useEffect } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Products from './pages/Products';
// import  Loader from "./components/loader";
// const Home = lazy(() => import('pages/Home'));
// const Locations = lazy(() => import('pages/Locations'));
// const Products = lazy(() => import('pages/Products'));

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

class RouterComponent extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path='/'
              // render={props => (
              //   <Suspense fallback={<Loader />}>
              //     <Home {...props} />
              //   </Suspense>
              // )}
              component={Home}
            />
            <Route
              exact
              path='/products'
              // render={props => (
              //   <Suspense fallback={<Loader />}>
              //     <Products {...props} />
              //   </Suspense>
              // )}
              component={Products}
            />
            <Route
              exact
              path='/location'
              // render={props => (
              //   <Suspense fallback={<Loader />}>
              //     <Locations {...props} />
              //   </Suspense>
              // )}
              component={Locations}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default RouterComponent;
