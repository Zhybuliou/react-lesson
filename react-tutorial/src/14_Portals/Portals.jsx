import React, { Component } from 'react'
import reactDom from 'react-dom';

class MyPortal extends Component {
    el = document.createElement('div');
    
    componentDidMount() {
        document.body.appendChild(this.el)
    }
    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
        return reactDom.createPortal(this.props.children, this.el)
    }
}

export default class Portals extends Component {
    render() {
        return (
            <div>
                <span>Text</span>
                <MyPortal>
                    <div>Test Portal</div>
                </MyPortal>
            </div>
        )
    }
}
