/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/SearchBar.css');
require('styles/Iconfont.css');

import React from 'react';
import ReactDOM from 'react-dom'

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      classList: 'aui-searchbar-wrap',
      autoFocus: false
    };
  }

  render() {
    return (
      <div>
        <div className={this.state.classList} id="search">
          <div className="aui-searchbar aui-border-radius" onClick={this.doSearch.bind(this)}>
            <i className="aui-iconfont aui-icon-search"></i>
            <div className="aui-searchbar-text">请输入搜索内容</div>
            <div className="aui-searchbar-input">
              <form action="javascript:0">
                <input type="text" placeholder="请输入搜索内容" autofocus={this.state.autoFocus} value={this.state.query}
                       id="search-input" onChange={this.changeValue.bind(this)}
                       onKeyPress={(event) => this.keyPress(event.key)}
                       ref="search"
                />
              </form>
            </div>
            <i className="aui-iconfont aui-icon-roundclosefill" onClick={this.clearInput.bind(this)}></i>
          </div>
          <div className="aui-searchbar-cancel aui-text-info" onClick={this.cancelSearch.bind(this)}>取消</div>
        </div>
      </div>
    );
  }

  doSearch() {
    this.setState({
      classList: 'aui-searchbar-wrap focus',
      autoFocus: true
    });

    const _this = this;
    setTimeout(function () {
      ReactDOM.findDOMNode(_this.refs.search).focus();
    }, 1000);
  }

  cancelSearch() {
    this.setState({
      classList: 'aui-searchbar-wrap',
      autoFocus: false
    });

    const _this = this;
    setTimeout(function () {
      ReactDOM.findDOMNode(_this.refs.search).blur();
    }, 1000)
  }

  changeValue(e) {
    this.setState({
      query: e.target.value
    });
  }

  clearInput() {
    this.setState({
      query: ''
    });
  }

  keyPress(key) {
    if (key == 'Enter') {
     alert(this.state.query);
    }
  }

}
