import './User.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Tom',
        email: 'tom@example.com',
        phone: '138****8888',
        avatar: 'https://i.pravatar.cc/150?img=12',
        level: 'VIP会员',
        points: 1280
      }
    };
  }

  render() {
    const { userInfo } = this.state;

    const menuItems = [
      {
        icon: '👤',
        title: '个人资料',
        desc: '编辑个人信息',
        link: '/user/edit'
      },
      {
        icon: '📋',
        title: '我的订单',
        desc: '查看订单记录',
        link: '#'
      },
      {
        icon: '❤️',
        title: '我的收藏',
        desc: '收藏的内容',
        link: '#'
      },
      {
        icon: '💰',
        title: '我的积分',
        desc: `当前积分：${userInfo.points}`,
        link: '#'
      },
      {
        icon: '⚙️',
        title: '账号设置',
        desc: '安全与隐私',
        link: '#'
      },
      {
        icon: '📞',
        title: '联系客服',
        desc: '在线客服支持',
        link: '#'
      },
      {
        icon: '❓',
        title: '帮助中心',
        desc: '常见问题解答',
        link: '#'
      },
      {
        icon: 'ℹ️',
        title: '关于我们',
        desc: '了解更多信息',
        link: '#'
      }
    ];

    return (
      <div className="user-page">
        <Header 
          title="个人中心" 
          description="管理您的个人信息和账户设置" 
        />

        <div className="user-profile-card">
          <div className="profile-avatar">
            <img src={userInfo.avatar} alt={userInfo.name} />
            <span className="profile-level">{userInfo.level}</span>
          </div>
          <div className="profile-info">
            <h3>{userInfo.name}</h3>
            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">邮箱：</span>
                <span className="detail-value">{userInfo.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">手机：</span>
                <span className="detail-value">{userInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="user-menu">
          {menuItems.map((item, index) => (
            item.link === '#' ? (
              <div key={index} className="menu-item" onClick={() => alert('功能开发中...')}>
                <span className="menu-icon">{item.icon}</span>
                <div className="menu-content">
                  <div className="menu-title">{item.title}</div>
                  <div className="menu-desc">{item.desc}</div>
                </div>
                <span className="menu-arrow">›</span>
              </div>
            ) : (
              <Link key={index} to={item.link} className="menu-item">
                <span className="menu-icon">{item.icon}</span>
                <div className="menu-content">
                  <div className="menu-title">{item.title}</div>
                  <div className="menu-desc">{item.desc}</div>
                </div>
                <span className="menu-arrow">›</span>
              </Link>
            )
          ))}
        </div>

        <div className="user-logout">
          <button className="btn-logout" onClick={() => alert('退出登录')}>
            退出登录
          </button>
        </div>
      </div>
    );
  }
}