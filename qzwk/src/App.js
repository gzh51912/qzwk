import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';
import cookie from 'react-cookies';

import store from './store';
import { connect } from 'react-redux';

const Index = lazy(() => import("./components/index/index"));
const Sign = lazy(() => import('./components/Sign'));
const Activity = lazy(() => import('./components/Activity'));
const NewWriter = lazy(() => import('./components/NewWriter'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));
const LoginOut = lazy(() => import('./components/LoginOut'));
const Rankinglist = lazy(() => import('./components/Rankinglist'));
const PageList = lazy(() => import('./components/PageList'));
const SelectPage = lazy(() => import('./components/SelectPage'));
const Content = lazy(() => import('./components/Content'));

class App extends Component {

  async componentDidMount() {
    let token = cookie.load('user');
    if (token) {
      let result = await axios.post('http://118.190.52.161:8100/login', { token });
      let userinfo = null;
      console.log("haha", result.data)
      let isLogin = false;
      if (result.data.data.length) {
        userinfo = result.data.data[0];
        delete userinfo.token;
        isLogin = true;
      } else {
        cookie.remove('user')
      }
      store.dispatch({ type: 'SET_LOGIN_DATA', payload: { isLogin: isLogin, userinfo: userinfo } })
    }
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
            <Route path='/home' component={Index} />
            <Route path='/rankinglist' component={Rankinglist} />
            <Route path='/sign' component={Sign} />
            <Route path='/activity' component={Activity} />
            <Route path='/new' component={NewWriter} />
            <Route path='/content/:name' component={Content} />
            <Route path='/reg' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/pageList' component={PageList} />
            <Route path='/loginout' component={LoginOut} />
            <Route path='/selectpage' component={SelectPage} />
            <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
            <Redirect from="/" to="/home" exact />
            <Redirect to="/notfound" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return { ...state }
}

App = connect(mapStateToProps)(App);

export default App;
