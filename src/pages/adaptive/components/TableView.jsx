import './TableView.css';
import React, { Component } from 'react';

export default class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const { currentPage, pageSize } = this.state;
    const total = 100;
    const start = (currentPage - 1) * pageSize;
    const mockData = Array.from({ length: pageSize }, (_, index) => ({
      id: start + index + 1,
      name: `用户${start + index + 1}`,
      email: `user${start + index + 1}@example.com`,
      age: 20 + Math.floor(Math.random() * 40),
      status: Math.random() > 0.5 ? '激活' : '未激活'
    }));

    this.setState({
      data: mockData,
      total
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page }, () => {
      this.loadData();
    });
  };

  renderPagination = () => {
    const { currentPage, pageSize, total } = this.state;
    const totalPages = Math.ceil(total / pageSize);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return (
      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => this.handlePageChange(currentPage - 1)}
        >
          上一页
        </button>
        {pages.map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
          ) : (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => this.handlePageChange(page)}
            >
              {page}
            </button>
          )
        ))}
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => this.handlePageChange(currentPage + 1)}
        >
          下一页
        </button>
        <span className="pagination-info">
          共 {total} 条，第 {currentPage}/{totalPages} 页
        </span>
      </div>
    );
  };

  render() {
    const { data } = this.state;

    return (
      <div className="table-view">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>邮箱</th>
              <th>年龄</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <span className={`status ${item.status === '激活' ? 'active' : 'inactive'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.renderPagination()}
      </div>
    );
  }
}
