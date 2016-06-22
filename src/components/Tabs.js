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

    this.state = {
      component:Home,
      title:'首页',
      activeTab:0
    };

  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="tabs">
        <header className="aui-bar aui-bar-nav aui-bar-warning">
          <div className="aui-title">{this.state.title}</div>
        </header>
        <div className="center">
          <Component className="center"/>
        </div>
        <footer className="aui-nav">
          <ul className="aui-bar-tab">
            <li className={this.state.activeTab == 0 ? 'active-warning' : ''} onClick={this.translateToPage.bind(this, Home, '首页', 0)}>
              <span className="aui-iconfont aui-icon-home"></span>
              <p>首页</p>
            </li>
            <li id="tabbar2" className={this.state.activeTab == 1 ? 'active-warning' : ''} onClick={this.translateToPage.bind(this, Circle, '消息', 1)}>
              <span className="aui-iconfont aui-icon-mark"></span>
              <p>消息</p>
            </li>
            <li id="tabbar3" className={this.state.activeTab == 2 ? 'active-warning' : ''} onClick={this.translateToPage.bind(this, Home, '关注', 2)}>
              <span className="aui-iconfont aui-icon-like"></span>
              <p>关注</p>
            </li>
            <li id="tabbar4" className={this.state.activeTab == 3 ? 'active-warning' : ''} onClick={this.translateToPage.bind(this, Circle, '个人中心', 3)}>
              <span className="aui-iconfont aui-icon-people"></span>
              <p>个人中心</p>
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

