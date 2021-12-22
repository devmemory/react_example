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
                <li>
                    <Link to='/error'>Error page example</Link>
                </li>
                <li>
                    <Link to='/lazy'>Lazy component example</Link>
                </li>
                <li>
                    <Link to='/ref'>Ref example</Link>
                </li>
                <li>
                    <Link to='/hoc'>HOC example</Link>
                </li>
                <li>
                    <Link to='/inheritance'>Inheritance example</Link>
                </li>
                <li>
                    <Link to='/portal'>Portal example</Link>
                </li>
                <li>
                    <Link to='/bootstrap'>Bootstrap example</Link>
                </li>
            </ul>
        )
    }
}

export default Main
