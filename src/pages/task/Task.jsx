import './Task.css'
import React, {Component} from 'react';
import Header from '../../components/Header';
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
        <Header
          title="任务列表" 
          description="使用 Redux 管理任务状态的示例" 
        />
        <div className={'task-body'}>
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
        </div>
      </div>
    )
  }
}