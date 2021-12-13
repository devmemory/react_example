import { Component } from 'react'

class ErrorScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // error를 저장해서 화면에 보여줌
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // 서버로 에러 전송
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error</h1>
        }

        return this.props.children
    }
}

export default ErrorScreen
