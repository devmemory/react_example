const Button = ({ color, text, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: color }} className="btn-task">{text}</button>
}

export default Button
