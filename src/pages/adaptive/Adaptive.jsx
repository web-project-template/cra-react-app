import './Adaptive.css';
import React, { Component } from 'react';
import TableView from './components/TableView';
import ListView from './components/ListView';

export default class Adaptive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 768
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 768
    });
  };

  render() {
    const { isMobile } = this.state;
    
    return (
      <div className="adaptive-page">
        <h2>适配示例</h2>
        <p className="adaptive-desc">
          {isMobile ? '移动端 - 列表下拉加载' : 'PC端 - 表格分页显示'}
        </p>
        {isMobile ? <ListView /> : <TableView />}
      </div>
    );
  }
}
