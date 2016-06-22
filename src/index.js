import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group';*/
import { Router, Route, IndexRoute} from 'react-router';
import Main from './components/Main';
import SearchBar from './components/Searchbar';
import Tabs from './components/Tabs';
import NineGrid from './components/NineGrid';
import Refresh from './components/RefreshList';

class TestApp extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Route path="/" component={TestApp}>
      <IndexRoute component={Main}/>
      <Route path="/SearchBar" component={SearchBar}/>
      <Route path="/Tabs/:id" component={Tabs}/>
      <Route path="/nineGrid/:id" component={NineGrid}/>
      <Route path="/refresh" component={Refresh}/>
    </Route>
  </Router>
), document.getElementById('app'));
