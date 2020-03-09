import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import { Icon, Input } from 'antd';
import { connect } from 'react-redux';
import store from '../store';
const { Search } = Input;
class Head extends Component {
  constructor() {
    super()
    this.state = {
      defaultHeight: true,
      isLogin: false
    }
    this.unfold = this.unfold.bind(this)
    this.go = this.go.bind(this)
    this.loginout = this.loginout.bind(this)
    this.search = this.search.bind(this)
  }
  go(path) {
    this.props.history.push(path)
  }
  unfold() {
    this.setState({
      defaultHeight: !this.state.defaultHeight
    })
  }

  componentDidMount() {
    setTimeout(() => {
      let { isLogin } = this.props;
      if (isLogin) {
        this.setState({
          isLogin: isLogin
        })
      }
      // console.log("111:", this.props)
    }, 500)
  }
  loginout() {
    cookie.remove("user");
    store.dispatch({ type: 'LOGOUT' });
    this.go('/loginout');
  }
  search(value) {
    this.props.history.push({ pathname: "/selectpage", query: { value } })
  }
  render() {
    let styleObj = {
      height: this.state.defaultHeight ? '13vw' : 'auto',
      position: this.props.history.location.pathname === '/Rankinglist' ? 'fixed' : null
    }
    return (
      <>
        <div id={'head'} style={styleObj}>
          <h1 onClick={this.go.bind(null, '/home')}>
            轻之文库
          </h1>
          <div className={'headright'} onClick={this.unfold}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={'yc'}>
            <li className={'head'}>
              <p onClick={this.go.bind(null, '/pagelist')}>全部分类</p>
              <p className={'tb'} onClick={this.go.bind(null, '/Rankinglist')} >排行榜<i className={'pai'}></i></p>
              <p>APP</p>
            </li>
            <li className={'seek'}>
              <div className={'input'}>
                {/* <input type={'text'} placeholder={'我的便携式游戏女友'}></input>
                <i className={'seekxtb'}> </i> */}
                <Search
                  placeholder="搜索小说"
                  onSearch={this.search}
                />
              </div>
            </li>
            <li className={'footer'}>
              <p><i className={'fan'}></i>简繁切换</p>
              {
                this.state.isLogin ?
                  <>
                    <p onClick={this.go.bind(null, '/personal')}><Icon type="user" />个人中心</p>
                    <p><Icon type="edit" />签到</p>
                    <p><Icon type="mail" />系统通知</p>
                    <p><Icon type="mail" />作者通知</p>
                    <p><Icon type="mail" />投稿管理</p>
                    <p onClick={this.loginout}><Icon type="logout" />退出登录</p>
                    <p><Icon type="appstore" />收藏夹</p>
                  </>
                  :
                  <>
                    <p onClick={this.go.bind(null, '/login')}>登录</p>
                    <p onClick={this.go.bind(null, '/reg')}>注册</p>
                  </>
              }
              <button className={'tb'}><i className={'tougao'}></i>投稿</button>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

const mapStateToProps = function (state) {
  return state
}

Head = connect(mapStateToProps)(Head)
Head = withRouter(Head)
export default Head;
