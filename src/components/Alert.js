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
      animateClassList: 'overflow animated ' + this.props.animateIn
    };
  }

  render() {
    return (
      <div className={this.state.animateClassList}>
        <div className="modal">
          <div className="aui-btn aui-btn-danger" onClick={this.closeModal.bind(this)}>关闭</div>
          {this.props.children}
        </div>
      </div>
    );
  }


  closeModal() {
    this.setState({
      animateClassList: 'overflow animated '+this.props.animateOut
    });

    this.props.close(this.props._this);
  }



}
