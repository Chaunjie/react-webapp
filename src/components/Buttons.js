/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/Button.css');
import Modal from './Modal';
import Alert from './Alert';
import ActionSheet from './ActionSheet';

import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      animateIn: 'bounceIn',
      animateOut: 'bounceOut',
      modal: '',
      closeBtnStyle:{
        position:'absolute',
        top:-20,
        right:10
      },

      showAlert:false,
      alertModal:'',
      btns:[
        {
          text:'支付宝',
          color:'green'
        },{
          text:'微信支付',
          color:'#333'
        },{
          text:'苹果支付',
          color:'blue'
        }],

      showActionSheet:false,
      actionSheetModal:'',
      cancelBtn:{
        text:'取消',
        color:'red'
      }
    };
  }

  render() {
    return (
      <div className="button-container">
        <div className="aui-content aui-content-padded">
          <p>普通按钮</p>
          <div className="aui-btn">默认按钮(default)</div>
          <div className="aui-btn aui-btn-primary" onnClick="demo();">默认按钮(primary)</div>
          <div className="aui-btn aui-btn-success">默认按钮(success)</div>
          <div className="aui-btn aui-btn-info">默认按钮(info)</div>
          <div className="aui-btn aui-btn-warning">默认按钮(warning)</div>
          <div className="aui-btn aui-btn-danger">默认按钮(danger)</div>

          <div className="aui-btn aui-btn-info"><span className="aui-iconfont aui-icon-roundcheck"></span>图标按钮</div>
          <div className="aui-btn aui-btn-info">图标按钮<span className="aui-badge aui-badge-warning">12</span></div>
          <p>块按钮类</p>
          <div className="aui-btn aui-btn-block">默认按钮(default)</div>
          {this.state.modal}
          {this.state.alertModal}
          {this.state.actionSheetModal}
          <div className="aui-btn aui-btn-primary aui-btn-block" onClick={this.renderModal.bind(this)}>打开modal(primary)</div>
          <div className="aui-btn aui-btn-success aui-btn-block" onClick={this.renderAlert.bind(this)}>打开Alert(success)</div>
          <div className="aui-btn aui-btn-info aui-btn-block" onClick={this.renderActionSheet.bind(this)}>打开actionSheet(info)</div>
          <div className="aui-btn aui-btn-warning aui-btn-block">默认按钮(warning)</div>
          <div className="aui-btn aui-btn-danger aui-btn-block">默认按钮(danger)</div>
          <p>块按钮类 - 默认增加10px底部外边距</p>
          <div className="aui-btn aui-btn-block aui-btn-outlined">默认按钮(default)</div>
          <div className="aui-btn aui-btn-primary aui-btn-block aui-btn-outlined">默认按钮(primary)</div>
          <div className="aui-btn aui-btn-success aui-btn-block aui-btn-outlined">默认按钮(success)</div>
          <div className="aui-btn aui-btn-info aui-btn-block aui-btn-outlined">默认按钮(info)</div>
          <div className="aui-btn aui-btn-warning aui-btn-block aui-btn-outlined">默认按钮(warning)</div>
          <div className="aui-btn aui-btn-danger aui-btn-block aui-btn-outlined">默认按钮(danger)</div>
        </div>

      </div>
    );
  }

  renderModal() {
    if (!this.state.showModal) {
      this.setState({
        showModal: true,
        modal: <Modal close={this.closeModal.bind(this)} _this={this} animateIn={this.state.animateIn} animateOut={this.state.animateOut} closeBtnStyle={this.state.closeBtnStyle}>
                  <div style={{color:'#333'}}>666</div>
               </Modal>
      })
    }
  }

  closeModal(_this) {
    const that = _this;
    setTimeout(function () {
      that.setState({
        showModal: false,
        modal: ''
      })
    }, 600);

  }

  renderAlert(){
    if (!this.state.showAlert) {
      this.setState({
        showAlert: true,
        alertModal: <Alert close={this.closeAlert.bind(this)} _this={this} title={'提示'} content={'提示内容'} btns={this.state.btns}></Alert>
      })
    }
  }

  closeAlert(_this, index) {
    const that = _this;
    setTimeout(function () {
      that.setState({
        showAlert: false,
        alertModal: ''
      })
    }, 600);

  //index为点击的按钮索引
  }

  renderActionSheet(){
    if (!this.state.showActionSheet) {
      this.setState({
        showActionSheet: true,
        actionSheetModal: <ActionSheet close={this.closeActionSheet.bind(this)} _this={this}  btns={this.state.btns} cancelBtn={this.state.cancelBtn}></ActionSheet>
      })
    }
  }

  closeActionSheet(_this, index){
    const that = _this;
    setTimeout(function () {
      that.setState({
        showActionSheet: false,
        actionSheetModal: ''
      })
    }, 600);

    console.log(index);
    //index为点击的按钮索引或者cancel
  }
}
