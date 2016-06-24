/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/animate.css');
require('styles/overflow.css');

import React from 'react';

export default class ActionSheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btns: '',
      animateClassList: 'actionSheet animated slideInUp',
      animateClassOverflow: 'overflow animated fadeIn'
    };
  }

  componentDidMount() {
    this.mapBtns(this);
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={this.state.animateClassOverflow}>
        <div className={this.state.animateClassList}>
          <div className="actionSheet-menus">
            {this.state.btns}
          </div>
          <div className="actionSheet-cencel actionSheet-btn" style={{color:this.props.cancelBtn.color}} onClick={this.closeModal.bind(this, 'cancel')}>{this.props.cancelBtn.text}</div>
        </div>
      </div>
    );
  }


  closeModal(index) {
    this.setState({
      animateClassList: 'actionSheet animated slideOutDown'
    });

    const _this = this;
    setTimeout(function () {
      _this.setState({
        animateClassOverflow: 'overflow animated fadeOut'
      });
    }, 300);

    this.props.close(this.props._this, index);
  }

  mapBtns(that) {
    const _this = that;
    var btns = this.props.btns.map(function (b, index) {
      return (
        <div className="actionSheet-btn sure-btn" onClick={_this.closeModal.bind(_this, index)}
             style={{color:b.color}}>{b.text}</div>
      )
    });

    this.setState({
      btns: btns
    });
  }

}
