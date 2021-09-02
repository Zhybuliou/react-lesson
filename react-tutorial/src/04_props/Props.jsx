import React, {Component} from 'react';

const Props = (props) => {
    return (
        <h1>
             {`THIS component count: ${props.counter}`}
        </h1>
        )
}

class CounterButton extends Component {
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
                <Props counter={counter} />
            </div>
        )
    }
}
export default CounterButton;