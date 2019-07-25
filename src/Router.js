import React, { lazy, Suspense, useEffect } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';

const Home = lazy(() => import('pages/Home'));
const Explore = lazy(() => import('pages/Explore'));

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
              path='/explore'
              render={props => (
                <Suspense fallback={<Loader />}>
                  <Explore {...props} />
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