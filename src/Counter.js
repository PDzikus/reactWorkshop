import React, {Component} from 'react';

class Counter extends Component {

    state = { count: 0, }

    increaseCounter = () => this.setState({ count: this.state.count + 1 })
    decreaseCounter = () => this.setState({ count: this.state.count - 1 })
    resetCounter = () => this.setState({ count: 0 })

    render() {
        const {count} = this.state;
        return (
            <div className="licznik">
                <div className="counter">{count}</div>
                <button onClick={this.increaseCounter}> + </button>
                <button onClick={this.decreaseCounter}> - </button>
                <button onClick={this.resetCounter}> RESET </button>
            </div>
        );
    }
}

export default Counter;