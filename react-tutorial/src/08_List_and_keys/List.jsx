import React, { Component, Fragment } from 'react'

// const Validate = ({val}) => val === 2 ? 2 : 'now two'

const Text = () => <h1>Text 1</h1>
const Text1 = () => <h1>Text 2</h1>
const Text2 = () => <h1>Text 3</h1>

const people = ['Jack', 'Max', 'Leo', 'Alex'];

const TABS_BTN = [
    {
        dataName: 1,
        title: 'Tab1',
    },
    {
        dataName: 2,
        title: 'Tab2'
    },
    {
        dataName: 3,
        title: 'Tab3'
    }
]

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
                {TABS_BTN.map((map, index) => (
                    <button
                     key={`${map.title}-${map.dataName}`}
                     data-name={map.dataName} 
                     onClick={this.handleTab} >{map.title}</button>
                ))}
                { activeTab === 1 && <Text />}
                { activeTab === 2 && <Text1 />}
                { activeTab === 3 && <Text2 />}
                <ul>
                    {people.map((person, index) => (
                        <li>{person}</li>
                    ))}
                </ul>
            </Fragment>
            </div>
        )
    }
}

