import React, { Component } from 'react'
import { CircleButton } from '../../style/styled'

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            value: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        let num = this.state.value
        this.setState({ value: ++num })
    }

    decrement() {
        let num = this.state.value
        this.setState({ value: --num })
    }

    render() {
        console.log('rebuild')
        return (
            <div>
                <h1>Value : {this.state.value}</h1>
                <div>
                    <CircleButton onClick={this.increment} color='blue' hoverColor='rgb(0,0,255,0.6)'>+</CircleButton>
                    <CircleButton onClick={this.decrement} color='red' hoverColor='rgb(255,0,0,0.6)'>-</CircleButton>
                </div>
            </div>
        )
    }
}

export default Counter