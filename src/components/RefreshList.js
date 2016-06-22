/**
 * Created by xudao on 16/6/22.
 */
require('normalize.css/normalize.css');
require('styles/Refresh.css');

import React from 'react';
import Tloader from 'react-touch-loader';

export default class RefreshList extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      canRefreshResolve: 1,
      listLen: 0,
      hasMore: 0,
      initializing: 1,
      refreshedAt: Date.now()
    }
  }

  loadMore(resolve){
    setTimeout(function() {
      var l = this.state.listLen + 9;

      this.setState({
        listLen: l,
        hasMore: l>0 && l<20
      });

      resolve();
    }.bind(this), 2e3);
  }

  refresh(resolve, reject) {
    setTimeout(function(){
      if(!this.state.canRefreshResolve) return reject();

      this.setState({
        listLen: 9,
        hasMore: 1,
        refreshedAt: Date.now()
      });
      resolve();
    }.bind(this), 2e3);
  }

  componentDidMount() {
    setTimeout(function(){
      this.setState({
        listLen: 9,
        hasMore: 1,
        initializing: 2, // initialized
      });
    }.bind(this), 2e3);
  }

  toggleCanReresh() {
    this.setState({ canRefreshResolve: !this.state.canRefreshResolve});
  }

  render() {
    var { listLen, hasMore, initializing, refreshedAt, canRefreshResolve } = this.state;
    var { refresh, loadMore, toggleCanReresh } = this;
    var list = [];

    if(listLen) {
      for(var i = 0; i < listLen; i++){
        list.push(
          <li key={i} className="aui-list-view-cell">
            <p>{i}</p>
          </li>
        );
      }
    }
    return (
      <div className="refresh-container aui-load-container">
        <Tloader className="main aui-content" onRefresh={this.refresh.bind(this)} onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
          <ul className="aui-list-view">{list}</ul>
        </Tloader>
      </div>
    );
  }

}
