import './index.css'
import React, {Component} from 'react'

export default class Home extends Component {
  state = {
    currentNavigation: ""
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        首页
      </div>
    )
  }
}