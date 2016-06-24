import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import SearchBar from './components/Searchbar';
import Tabs from './components/Tabs';
import NineGrid from './components/NineGrid';
import Refresh from './components/RefreshList';
import Button from './components/Buttons';
require('./styles/Page.css');

class TestApp extends React.Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          style={{height: '100%'}}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render((
  <Router key="router" history={ browserHistory }>
    <Route path="/" component={TestApp}>
      <IndexRoute key="Main" component={Main}/>
      <Route key="SearchBar" path="/SearchBar" component={SearchBar}/>
      <Route key="Tabs" path="/Tabs/:id" component={Tabs}/>
      <Route key="nineGrid" path="/nineGrid/:id" component={NineGrid}/>
      <Route key="refresh" path="/refresh" component={Refresh}/>
      <Route key="button" path="/button" component={Button}/>
    </Route>
  </Router>
), document.getElementById('app'));
