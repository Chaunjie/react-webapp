require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import {Link} from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="aui-content">
          <li className="aui-list-view-cell" onClick={this.handleClick}>
            <div className="aui-arrow-right aui-text-danger">
              <i className="aui-iconfont aui-icon-sort aui-bg-danger"></i>更新说明
              <span className="aui-badge aui-badge-danger aui-pull-right">V 1.2.0</span>
            </div>
          </li>
          <li className="aui-list-view-cell"  onclick="share()" id="share">
            <div className="aui-arrow-right aui-text-primary">
                <span>分享至朋友圈</span>
            </div>
          </li>
        </div>

        <div className="aui-content">
          <ul className="aui-list-view">
            <li className="aui-list-view-cell"  onclick="openWin('pull_refresh')">
              <a href="#SearchBar" className="aui-arrow-right">下拉刷新组件（一）<span className="aui-badge aui-badge-danger">新增</span></a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('pull_refresh_2')">
             <Link to="/SearchBar" className="aui-arrow-right">下拉刷新组件（二）<span className="aui-badge aui-badge-danger">新增</span></Link>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('slide')">
              <a className="aui-arrow-right">轮播组件<span className="aui-badge aui-badge-danger">新增</span></a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list_swipe')">
              <a className="aui-arrow-right">列表右滑显示菜单<span className="aui-badge aui-badge-danger">新增</span></a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('accordion')">
              <a className="aui-arrow-right">手风琴折叠面板<span className="aui-badge aui-badge-danger">新增</span></a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('flex')">
              <a className="aui-arrow-right">AUI Flex<span className="aui-badge aui-badge-warning">优化</span></a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('border')">
              <a className="aui-arrow-right">边框样式</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('indexed_list')">
              <a className="aui-arrow-right">索引列表<span className="aui-badge aui-badge-success">优化</span></a>
            </li>
            <li className="aui-list-view-cell"  onclick="openSlider()">
              <a className="aui-arrow-right">上下滑动全屏展示</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('calendar')">
              <a className="aui-arrow-right">日历</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('calendar_slide')">
              <a className="aui-arrow-right">日历上下滑动展示</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('button')">
              <a className="aui-arrow-right">按钮</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('form')">
              <a className="aui-arrow-right">表单</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('switch')">
              <a className="aui-arrow-right">switch开关</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('checkbox')">
              <a className="aui-arrow-right">checkbox选择</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('radio')">
              <a className="aui-arrow-right">radio选择</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list')">
              <a className="aui-arrow-right">普通列表</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list_arrow')">
              <a className="aui-arrow-right">带有角标和箭头的列表</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list_thumb')">
              <a className="aui-arrow-right">缩略图列表</a>
            </li>

            <li className="aui-list-view-cell"  onclick="openWin('list_image')">
              <a className="aui-arrow-right">图片列表布局</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('header_bar')">
              <a className="aui-arrow-right">导航栏</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('footer_tab')">
              <a className="aui-arrow-right">底部工具栏</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list_nine')">
              <a className="aui-arrow-right">九宫格</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list_sixteen')">
              <a className="aui-arrow-right">十六宫格</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('loading')">
              <a className="aui-arrow-right">个性loading</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('tab')">
              <a className="aui-arrow-right">TAB菜单</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('contact_book')">
              <a className="aui-arrow-right">通讯录</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('chat')">
              <a className="aui-arrow-right">聊天界面</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('iconfont')">
              <a className="aui-arrow-right">图标</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('list_counter')">
              <a className="aui-arrow-right">计数列表(购物车类样式疯狂拼合)</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('dialog')">
              <a className="aui-arrow-right">弹出提示样式(dialog)</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('status')">
              <a className="aui-arrow-right">带状态的表单／列表</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('toast')">
              <a className="aui-arrow-right">Toast</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('tips')">
              <a className="aui-arrow-right">信息提示条</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('searchbar')">
              <a className="aui-arrow-right">搜索条</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('range')">
              <a className="aui-arrow-right">滑块</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('timeline')">
              <a className="aui-arrow-right">时间轴</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('progress')">
              <a className="aui-arrow-right">进度条</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('alert')">
              <a className="aui-arrow-right">自定义弹出层</a>
            </li>
            <li className="aui-list-view-cell"  onclick="openWin('waterfall')">
              <a className="aui-arrow-right">瀑布流</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  handleClick(){
    alert(666);
  }

  testFun(a, b){
    return a + b;
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
