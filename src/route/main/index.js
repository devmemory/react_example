import { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to='/counter'>Counter with styled</Link>
                </li>
                <li>
                    <Link to='/class'>Class</Link>
                </li>
                <li>
                    <Link to='/functional'>Functional</Link>
                </li>
                <li>
                    <Link to='/router/test1'>Test1</Link>
                    <span style={{ marginRight: '10px' }} />
                    <Link to='/router/test2'>Test2</Link>
                </li>
                <li>
                <Link to='/context'>Context Example</Link>
                </li>
                <li>
                <Link to='/storage'>Storage Example</Link>
                </li>
            </ul>
        )
    }
}

export default Main
