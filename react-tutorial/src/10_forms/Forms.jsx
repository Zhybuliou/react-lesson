import React, { Component, Fragment } from 'react'
import '../09_CSS/style.css'

export default class Forms extends Component {
    state ={
        inputText: '',
        textareaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: ''
        }
    }
     
    handleInputChange = ({ target: {value}}) => {
        this.setState({
            inputText: value
        })
    }

    handleTextareaChange = ({ target: {value}}) => {
        this.setState({
            textareaText: value
        })
    }
    handleSelectChange = ({ target: {value}}) => {
        this.setState({
            selectText: value
        })
    }

    handleInputSubmit = (e) => {
        e.preventDefault();
        const { inputText, textareaText, selectText } = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText
            }
        })
    }

    render() {
        const {inputText, textareaText, showData, selectText} = this.state;
        const {name, text, position} = showData;
        return (
            <Fragment>
            <form className="form">
                {/* Input */}
                <label htmlFor="input">
                Name:
                    <input
                    id="input"
                    name="name"
                    type="text"
                    value={inputText}
                    onChange={this.handleInputChange}
                     />
                </label>
                {/* TextArea */}
                <label htmlFor="text-area">
                About yourself:
                    <textarea
                    id="text-area"
                    value={textareaText}
                    onChange={this.handleTextareaChange}
                     />
                </label>
                <select 
                value={selectText}
                onChange={this.handleSelectChange}>
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                </select>
                {/* Button */}
                <button onClick={this.handleInputSubmit}>Submit</button>
            </form>
            <div style={{textAlign:"center" }}>
                <p>Name : {name}</p>
                <p>Text : {text}</p>
                <p>position: {position}</p>
            </div>
            </Fragment>
        )
    }
}
