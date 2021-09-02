import React, { Component } from 'react'

const TitleContext = React.createContext();

const LevelThree = () => (
    <TitleContext.Consumer>
        { title => <h1>{title}</h1>}
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = (s) => <LevelTwo />

export default class Context extends Component {
    render() {
        return (
            <div>
            <TitleContext.Provider value="Simple title">
                <LevelOne />
            </TitleContext.Provider>
            </div>
        )
    }
}
