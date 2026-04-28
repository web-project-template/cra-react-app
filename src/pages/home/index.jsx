import './index.css'
import React, { Component } from 'react'
import Header from '../../components/Header'

export default class Home extends Component {
  render() {
    const features = [
      {
        icon: '📋',
        title: '表单示例',
        desc: '各种原生表单组件',
        link: '/form'
      },
      {
        icon: '✅',
        title: '任务管理',
        desc: 'Redux状态管理',
        link: '/task'
      },
      {
        icon: '📱',
        title: '响应式适配',
        desc: 'PC/移动端自适应',
        link: '/adaptive'
      },
      {
        icon: '👤',
        title: '个人中心',
        desc: '用户信息管理',
        link: '/user'
      }
    ]

    return (
      <div className="home">
        <Header 
          title="欢迎使用" 
          description="React 应用模板示例" 
        />

        <div className="home-hero">
          <div className="hero-content">
            <h1 className="hero-title">React App Template</h1>
            <p className="hero-subtitle">简洁、优雅、高效的前端开发模板</p>
          </div>
        </div>

        <div className="home-features">
          <h3 className="section-title">功能模块</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <a 
                key={index} 
                href={feature.link} 
                className="feature-card"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = feature.link
                }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="home-info">
          <div className="info-card">
            <h4>技术栈</h4>
            <div className="tech-tags">
              <span className="tech-tag">React 16</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag">CSS3</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}