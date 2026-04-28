import './app.css';
import React, {Fragment, Suspense, lazy, Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AppNav from '../components/AppNav';

const Home = lazy(() => import(/*webpackChunkName:"home"*/'./home/index'))
const User = lazy(() => import(/*webpackChunkName:"user"*/'./user/index'))
const UserEdit = lazy(() => import(/*webpackChunkName:"user.edit"*/'./user/UserEdit'))
const Task = lazy(() => import(/*webpackChunkName:"task"*/'./task/Task'))
const Adaptive = lazy(() => import(/*webpackChunkName:"adaptive"*/'./adaptive/Adaptive'))
const Form = lazy(() => import(/*webpackChunkName:"form"*/'./form/Form'))

export default class App extends Component {
  render() {
    const navItems = [
      { path: '/home', label: '主页', icon: '' },
      { path: '/form', label: '表单', icon: '' },
      { path: '/task', label: '任务', icon: '' },
      { path: '/adaptive', label: '适配', icon: '' },
      { path: '/user', label: '我的', icon: '' }
    ];
    
    return (
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <AppNav navItems={navItems} />
          
          <div className="app-main">
            <Switch>
              <Redirect from="/" to="/home" exact/>

              <Route path='/' exact component={Home}/>
              <Route path='/home' component={Home}/>

              <Route path='/user' exact component={User}/>
              <Route path="/user/edit" exact component={UserEdit}></Route>

              <Route path="/task" exact component={Task}></Route>

              <Route path="/adaptive" exact component={Adaptive}></Route>

              <Route path="/form" exact component={Form}></Route>
            </Switch>
          </div>
        </Suspense>
      </Fragment>
    );
  }
}