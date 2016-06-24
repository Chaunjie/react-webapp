/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/animate.css');
require('styles/overflow.css');

import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: '',
      animateClassList: 'modal animated ' + this.props.animateIn,
      animateClassOverflow: 'overflow animated fadeIn'
    };
  }

  render() {
    return (
      <div className={this.state.animateClassOverflow}>
        <div className={this.state.animateClassList}>
          <div className="aui-btn aui-btn-danger" onClick={this.closeModal.bind(this)} style={this.props.closeBtnStyle}>关闭</div>
          {this.props.children}
        </div>
      </div>
    );
  }


  closeModal() {
    this.setState({
      animateClassList: 'modal animated '+this.props.animateOut
    });

    const _this = this;
    setTimeout(function(){
      _this.setState({
        animateClassOverflow: 'overflow animated fadeOut'
      });
    },300);

    this.props.close(this.props._this);
  }



}
