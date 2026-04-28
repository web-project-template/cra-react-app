import './app.css';
import React, {Fragment, Suspense, lazy,} from 'react';
import {Route, NavLink, Switch, Redirect,} from 'react-router-dom';

const Home = lazy(() => import(/*webpackChunkName:"home"*/'./home/index'))
const User = lazy(() => import(/*webpackChunkName:"user"*/'./user/index'))
const UserEdit = lazy(() => import(/*webpackChunkName:"user.edit"*/'./user/UserEdit'))
const Task = lazy(() => import(/*webpackChunkName:"task"*/'./task/Task'))
const Adaptive = lazy(() => import(/*webpackChunkName:"adaptive"*/'./adaptive/Adaptive'))

export default function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={'app-main'}>
          <Switch>
            <Redirect from="/" to="/home" exact/>

            <Route path='/' exact component={Home}/>
            <Route path='/home' component={Home}/>

            <Route path='/user' exact component={User}/>
            <Route path="/user/edit" exact component={UserEdit}></Route>

            <Route path="/task" exact component={Task}></Route>

            <Route path="/adaptive" exact component={Adaptive}></Route>
          </Switch>
        </div>

        <div className={'app-nav'}>
          <NavLink to="/home">主页</NavLink>
          <NavLink to="/task">任务</NavLink>
          <NavLink to="/adaptive">适配</NavLink>
          <NavLink to="/user">我的</NavLink>
        </div>
      </Suspense>
    </Fragment>
  );
}