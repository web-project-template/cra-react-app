import './ListView.css';
import React, { Component } from 'react';

export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      pageSize: 10,
      loading: false,
      hasMore: true,
      total: 100
    };
    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.loadData();
    this.listRef.current.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (this.listRef.current) {
      this.listRef.current.removeEventListener('scroll', this.handleScroll);
    }
  }

  loadData = () => {
    const { page, pageSize, data, loading, total } = this.state;
    
    if (loading || data.length >= total) {
      return;
    }

    this.setState({ loading: true });

    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const newData = Array.from({ length: pageSize }, (_, index) => ({
        id: start + index + 1,
        name: `用户${start + index + 1}`,
        email: `user${start + index + 1}@example.com`,
        age: 20 + Math.floor(Math.random() * 40),
        status: Math.random() > 0.5 ? '激活' : '未激活',
        avatar: `https://i.pravatar.cc/150?img=${(start + index + 1) % 70}`
      }));

      this.setState(prevState => ({
        data: [...prevState.data, ...newData],
        page: prevState.page + 1,
        loading: false,
        hasMore: prevState.data.length + newData.length < total
      }));
    }, 800);
  };

  handleScroll = () => {
    const { loading, hasMore } = this.state;
    const listElement = this.listRef.current;
    
    if (!listElement || loading || !hasMore) {
      return;
    }

    const scrollTop = listElement.scrollTop;
    const scrollHeight = listElement.scrollHeight;
    const clientHeight = listElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      this.loadData();
    }
  };

  render() {
    const { data, loading, hasMore } = this.state;

    return (
      <div className="list-view" ref={this.listRef}>
        <div className="list-container">
          {data.map(item => (
            <div key={item.id} className="list-item">
              <div className="list-item-avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
              <div className="list-item-content">
                <div className="list-item-header">
                  <span className="list-item-name">{item.name}</span>
                  <span className={`list-item-status ${item.status === '激活' ? 'active' : 'inactive'}`}>
                    {item.status}
                  </span>
                </div>
                <div className="list-item-email">{item.email}</div>
                <div className="list-item-age">年龄: {item.age}</div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="loading-indicator">
              <div className="loading-spinner"></div>
              <span>加载中...</span>
            </div>
          )}
          
          {!hasMore && data.length > 0 && (
            <div className="no-more">没有更多数据了</div>
          )}
          
          {data.length === 0 && !loading && (
            <div className="empty">暂无数据</div>
          )}
        </div>
      </div>
    );
  }
}
