import { Component } from "react"

class Button extends Component {
    render() {
        const { color, text, onClick } = this.props
        return (
            <button onClick={onClick} style={{ backgroundColor: color }} className="btn-task">{text}</button>
        )
    }
}

export default Button
