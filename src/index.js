import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import Main from './components/Main';
import SearchBar from './components/Searchbar';

class TestApp extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="page"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        style={{height: '100%'}}
      >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
      </ReactCSSTransitionGroup>
    );
  }
}

// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Route path="/" component={TestApp}>
      <IndexRoute component={Main}/>
      <Route path="SearchBar" component={SearchBar}/>
    </Route>
  </Router>
), document.getElementById('app'));
