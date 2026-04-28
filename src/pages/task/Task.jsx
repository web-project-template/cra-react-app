import './Task.css'
import React, {Component} from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

export default class Task extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="task-page">
        <h2>任务列表</h2>
        <p className="task-desc">使用 Redux 管理任务状态的示例</p>
        <div className={'task-body'}>
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
        </div>
      </div>
    )
  }
}