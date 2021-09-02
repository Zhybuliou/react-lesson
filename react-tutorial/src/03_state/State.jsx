import React, {Component} from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }
    handleClick = () => {
        this.setState(({counter}) => ({
            counter: ++counter
        }))
    }
    render() {
        const { counter } = this.state // destruction 
        return (
            <div>
                {counter}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default Counter;