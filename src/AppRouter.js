import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ListContainer from './containers/CircleCI/ListContainer'
import Details from './containers/CircleCI/Details'
import ApiProvider from './containers/CircleCI/ApiProvider'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={'/build/:vcs_type/:username/:reponame/:build_num'}
            component={Details}
          />
          <Route
            exact
            path={'/'}
            component={ListContainer}
          />
          <Route
            exact
            path={'/api_key'}
            component={ApiProvider}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
