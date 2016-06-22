/**
 * Created by xudao on 16/6/22.
 */
require('normalize.css/normalize.css');
require('styles/Tabs.css');

import React from 'react';
import Home from './Main';
import Circle from './Searchbar';

let Component = Home;
export default class Tab extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.params.id);

    this.state = {
      component:Home,
      title:'栏目1',
      activeTab:0
    };

  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="tabs">
        <header className="aui-bar aui-bar-nav aui-bar-warning" id="aui-header">
          <div className="aui-title" id="header-title">{this.state.title}</div>
        </header>
        <div className="center">
          <Component style=""/>
        </div>
        <footer className="aui-nav" id="aui-footer">
          <ul className="aui-bar-tab">
            <li className={this.state.activeTab == 0 ? "active-warning" : ""} id="tabbar1" onClick={this.translateToPage.bind(this, Home, '栏目1', 0)}>
              <span className="aui-iconfont aui-icon-home"></span>
              <p>栏目1</p>
            </li>
            <li id="tabbar2" className={this.state.activeTab == 1 ? "active-warning" : ""} onClick={this.translateToPage.bind(this, Circle, '栏目2', 1)}>
              <span className="aui-iconfont aui-icon-mark"></span>
              <p>栏目2</p>
            </li>
            <li id="tabbar3" className={this.state.activeTab == 2 ? "active-warning" : ""} onClick={this.translateToPage.bind(this, Home, '栏目3', 2)}>
              <span className="aui-iconfont aui-icon-like"></span>
              <p>栏目3</p>
            </li>
            <li id="tabbar4" className={this.state.activeTab == 3 ? "active-warning" : ""} onClick={this.translateToPage.bind(this, Circle, '栏目4', 3)}>
              <span className="aui-iconfont aui-icon-my"></span>
              <p>栏目4</p>
            </li>
          </ul>
        </footer>
      </div>
    );
  }

  translateToPage(component, title ,activeTab){
      Component = component;
      this.setState({
        component: component,
        title:title,
        activeTab:activeTab
      })
  }

}

