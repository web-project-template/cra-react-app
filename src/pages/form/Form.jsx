import './Form.css';
import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
        email: '',
        age: '',
        gender: '',
        country: '',
        hobbies: [],
        bio: '',
        website: '',
        birthdate: '',
        favoriteTime: '',
        favoriteColor: '#57bf6a',
        volume: 50,
        agreement: false,
        newsletter: false
      },
      submitted: false,
      errors: {}
    };
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'hobbies') {
        const hobbies = [...this.state.formData.hobbies];
        if (checked) {
          hobbies.push(value);
        } else {
          const index = hobbies.indexOf(value);
          if (index > -1) {
            hobbies.splice(index, 1);
          }
        }
        this.setState({
          formData: { ...this.state.formData, hobbies }
        });
      } else {
        this.setState({
          formData: { ...this.state.formData, [name]: checked }
        });
      }
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value }
      });
    }
  };

  validateForm = () => {
    const { formData } = this.state;
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = '用户名不能为空';
    }

    if (!formData.password) {
      errors.password = '密码不能为空';
    } else if (formData.password.length < 6) {
      errors.password = '密码至少6位';
    }

    if (!formData.email) {
      errors.email = '邮箱不能为空';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '邮箱格式不正确';
    }

    if (!formData.age) {
      errors.age = '年龄不能为空';
    } else if (formData.age < 1 || formData.age > 150) {
      errors.age = '年龄必须在1-150之间';
    }

    if (!formData.gender) {
      errors.gender = '请选择性别';
    }

    if (!formData.country) {
      errors.country = '请选择国家';
    }

    if (!formData.agreement) {
      errors.agreement = '请同意用户协议';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.validateForm()) {
      this.setState({ submitted: true });
      console.log('表单数据：', this.state.formData);
      
      setTimeout(() => {
        this.setState({ submitted: false });
      }, 3000);
    }
  };

  handleReset = () => {
    this.setState({
      formData: {
        username: '',
        password: '',
        email: '',
        age: '',
        gender: '',
        country: '',
        hobbies: [],
        bio: '',
        website: '',
        birthdate: '',
        favoriteTime: '',
        favoriteColor: '#57bf6a',
        volume: 50,
        agreement: false,
        newsletter: false
      },
      submitted: false,
      errors: {}
    });
  };

  render() {
    const { formData, submitted, errors } = this.state;

    return (
      <div className="form-page">
        <Header
          title="表单示例" 
          description="包含各种原生HTML表单组件的示例" 
        />

        {submitted && (
          <div className="success-message">
            ✅ 表单提交成功！请查看控制台输出。
          </div>
        )}

        <form className="demo-form" onSubmit={this.handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="username">用户名 *</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={this.handleInputChange}
              placeholder="请输入用户名"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">密码 *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={this.handleInputChange}
              placeholder="请输入密码（至少6位）"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">邮箱 *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={this.handleInputChange}
              placeholder="example@email.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age">年龄 *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={this.handleInputChange}
              placeholder="请输入年龄"
              min="1"
              max="150"
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="website">个人网站</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={this.handleInputChange}
              placeholder="https://example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">出生日期</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="favoriteTime">喜欢的时间</label>
            <input
              type="time"
              id="favoriteTime"
              name="favoriteTime"
              value={formData.favoriteTime}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="favoriteColor">喜欢的颜色</label>
            <input
              type="color"
              id="favoriteColor"
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="volume">音量: {formData.volume}</label>
            <input
              type="range"
              id="volume"
              name="volume"
              value={formData.volume}
              onChange={this.handleInputChange}
              min="0"
              max="100"
            />
          </div>

          <div className="form-group">
            <label>性别 *</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={this.handleInputChange}
                />
                男
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={this.handleInputChange}
                />
                女
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={this.handleInputChange}
                />
                其他
              </label>
            </div>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="country">国家 *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={this.handleInputChange}
            >
              <option value="">请选择国家</option>
              <option value="china">中国</option>
              <option value="usa">美国</option>
              <option value="japan">日本</option>
              <option value="korea">韩国</option>
              <option value="uk">英国</option>
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
          </div>

          <div className="form-group">
            <label>兴趣爱好</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="hobbies"
                  value="reading"
                  checked={formData.hobbies.includes('reading')}
                  onChange={this.handleInputChange}
                />
                阅读
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="hobbies"
                  value="sports"
                  checked={formData.hobbies.includes('sports')}
                  onChange={this.handleInputChange}
                />
                运动
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="hobbies"
                  value="music"
                  checked={formData.hobbies.includes('music')}
                  onChange={this.handleInputChange}
                />
                音乐
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="hobbies"
                  value="travel"
                  checked={formData.hobbies.includes('travel')}
                  onChange={this.handleInputChange}
                />
                旅行
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bio">个人简介</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={this.handleInputChange}
              placeholder="介绍一下自己..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={this.handleInputChange}
              />
              我同意用户协议 *
            </label>
            {errors.agreement && <span className="error">{errors.agreement}</span>}
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={this.handleInputChange}
              />
              订阅邮件通知
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">提交</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleReset}>重置</button>
          </div>
        </form>
      </div>
    );
  }
}
