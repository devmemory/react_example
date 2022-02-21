import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import "./example.css"

class AnimationExample extends Component {
    render() {
        return (
            <div>
                <CSSAnimation />
                <JSAnimation />
                <KeyframeExample />
            </div>
        )
    }
}

class JSAnimation extends Component {
    state = {
        disabled: true
    }

    onChange = (e) => {
        const length = e.target.value.length
        this.setState({ disabled: !(length >= 4) })
    }

    render() {
        const label = this.state.disabled ? 'Disabled' : 'Submit'
        return (
            <div>
                <button style={Object.assign({}, styles.button, !this.state.disabled && styles.buttonEnabled)}>
                    {label}
                </button>
                <input style={styles.input} onChange={this.onChange} />
            </div>
        )
    }
}

class CSSAnimation extends Component {
    state = {
        focused: true
    }

    componentDidMount() {
        this.input.addEventListener('focus', this.focus)
        this.input.addEventListener('blur', this.focus)
    }

    focus = () => {
        this.setState({ focused: !this.state.focused })
    }

    render() {
        return (
            <div className='container'>
                <input ref={(input) => this.input = input} className={['input',this.state.focused && 'input-focused'].join(' ')}/>
            </div>
        )
    }
}

class KeyframeExample extends Component {
    render() {
        return (
            <Box />
        )
    }
}

const boxFade = keyframes`
  0% {
    opacity: 1;
    top: 100px;
 
  }
  50% {
    opacity: 0;
    top: 400px;
  }
  100% {
    opacity: 1;
    top: 100px;
  }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: green;
  position: absolute;
  top: 100px;
  left: 20px;
  animation: ${boxFade} 2s 1s infinite linear alternate;
`;

const styles = {
    input: {
        width: 200,
        outline: 'none',
        fontSize: 20,
        padding: 10,
        border: 'none',
        backgroundColor: '#ddd',
        marginTop: 10
    },
    button: {
        width: 180,
        height: 50,
        border: 'none',
        borderRadius: '4',
        fontSize: 20,
        cursor: 'pointer',
        transition: '.25s all'
    },
    buttonEnabled: {
        backgroundColor: '#ffc107',
        width: 220
    }
}

export default AnimationExample
