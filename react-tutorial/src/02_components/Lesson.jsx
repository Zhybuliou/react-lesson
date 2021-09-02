import React from 'react'

function Lesson1() {
    return (
        <div>
            <h3>Lesson1 !!!</h3>
        </div>
    )
}

class Lesson2 extends React.Component {
    render() {
        return(
            <div>
            <h3>Lesson1-class component</h3>
        </div>
        )
    }
}

export default function Lesson3(){
    return(
        <div>
            <Lesson1 />
            <Lesson2 />
        </div>
    )
}