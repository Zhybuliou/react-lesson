import React, { Component, Fragment } from 'react'

// const Validate = ({val}) => val === 2 ? 2 : 'now two'

const Text = () => <h1>Text 1</h1>
const Text1 = () => <h1>Text 2</h1>
const Text2 = () => <h1>Text 3</h1>


export default class Render extends Component {

    state = {
        activeTab : 1
    }

    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name')
        })
    }
    render() {
        const { activeTab } = this.state;
        return (
            <div>
            <Fragment>
                <button data-name={1} onClick={this.handleTab}>Tab1</button>
                <button data-name={2} onClick={this.handleTab}>Tab2</button>
                <button data-name={3} onClick={this.handleTab}>Tab3</button>
                { activeTab === 1 && <Text />}
                { activeTab === 2 && <Text1 />}
                { activeTab === 3 && <Text2 />}
            </Fragment>
            </div>
        )
    }
}
