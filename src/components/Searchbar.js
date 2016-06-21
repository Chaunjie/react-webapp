/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/SearchBar.css');

import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <div className="aui-searchbar-wrap demo" id="search" style={{}}>
        <div className="aui-searchbar aui-border-radius" onclick="doSearch()">
          <i className="aui-iconfont aui-icon-search"></i>
          <div className="aui-searchbar-text">请输入搜索内容</div>
          <div className="aui-searchbar-input">
            <form action="javascript:search();">
              <input type="text" placeholder="请输入搜索内容" id="search-input" />
            </form>
          </div>
          <i className="aui-iconfont aui-icon-roundclosefill" onclick="clearInput()"></i>
        </div>
        <div className="aui-searchbar-cancel aui-text-info" onclick="cancelSearch()">取消</div>
      </div>
    );
  }

}

Searchbar.defaultProps = {

};

export default Searchbar;
