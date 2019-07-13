import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Error404 extends Component {
    state = {
        timer: 5,
      }
    
    componentDidMount() {
        this.id = setInterval(() => this.setState({ timer: this.state.timer - 1}), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }
    
      render() {
        return this.state.timer === 0
          ? <Redirect to="/" />
          : <div>BŁĄD 404 - redirect in {this.state.timer} seconds</div>
      }
    }

export default Error404;