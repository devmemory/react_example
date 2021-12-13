import { Component } from 'react'
import ErrorScreen from './error_screen'
import Test from './test'

class ErrorTest extends Component {

    render() {
        return (
            <ErrorScreen>
                <Test />
            </ErrorScreen>
        )
    }
}

export default ErrorTest
