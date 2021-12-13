import { Component } from 'react'

class Test extends Component {

    onClick(){
        throw new Error('Button is touched')
    }

    render() {
        return (
            <div style={{height: '100vh', width: '100%', display: 'grid', placeContent: 'center'}}>
                This is right screen
                <br/>
                <button onClick={this.onClick}>Throw error</button>
            </div>
        )
    }
}

export default Test
