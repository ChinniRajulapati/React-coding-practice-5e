import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Logout from '../Logout'

import Login from '../Login'

class Home extends Component {
  state = {isClicked: true}

  onChange = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <Message isClicked={isClicked} />
          {isClicked && <Login isChange={this.onChange} />}
          {!isClicked && <Logout isChange={this.onChange} />}
        </div>
      </div>
    )
  }
}

export default Home
