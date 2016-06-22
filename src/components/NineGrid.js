/**
 * Created by xudao on 16/6/22.
 */
require('normalize.css/normalize.css');
require('styles/Ninegrid.css');

import React from 'react';
import Tloader from 'react-touch-loader';


export default class NineGrid extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  hasMore={true}

  onRefresh (resolve, reject) {
    setTimeout(resolve, 3000);
  }

  handleLoadMore(resolve){
    setTimeout(resolve, 3000);
  }

  render() {
    return (
      <div className="nine-grid aui-load-container">
        <Tloader
          initializing={0}
          onRefresh={this.onRefresh.bind(this)}
          hasMore={this.hasMore}
          onLoadMore={this.handleLoadMore}
          className="refresh-container">
          <div className="aui-content">
            <ul className="aui-grid-nine">
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-edit aui-text-primary"></span>
                <p>栏目</p>
              </li>
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-emoji aui-text-danger"></span>
                <p>栏目</p>
              </li>
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-favor aui-text-warning"></span>
                <p>栏目</p>
              </li>
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-phone aui-text-pink"></span>
                <p>栏目</p>
              </li>
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-evaluate aui-text-warning"></span>
                <p>栏目</p>
              </li>
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-camera aui-text-info"></span>
                <p>栏目</p>
              </li>
              <li className="aui-col-xs-4 aui-text-center">
                <span className="aui-iconfont aui-icon-like aui-text-blue"></span>
                <p>栏目</p>
              </li>
            </ul>
          </div>
        </Tloader>
      </div>
    );
  }

}
