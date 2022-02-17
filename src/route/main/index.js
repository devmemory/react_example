import { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()

        this.list = [
            { route: '/counter', title: 'Counter with styled' },
            { route: '/class', title: 'Class' },
            { route: '/functional', title: 'Functional' },
            { route: '/router/test1', title: 'Route Test1' },
            { route: '/router/test2', title: 'Route Test2' },
            { route: '/context', title: 'Context example' },
            { route: '/storage', title: 'Storage example' },
            { route: '/error', title: 'Error page example' },
            { route: '/lazy', title: 'Lazy component example' },
            { route: '/ref', title: 'Ref example' },
            { route: '/hoc', title: 'HOC example' },
            { route: '/inheritance', title: 'Inheritance example' },
            { route: '/portal', title: 'Portal example' },
            { route: '/bootstrap', title: 'Bootstrap example' },
            { route: '/keyboard', title: 'Keyboard example' },
            { route: '/album', title: 'Album example' },
            { route: '/animation', title: 'Animation example' }, { route: '/product-card', title: 'Product card example' },
            { route: '/table', title: 'Table example' },
            { route: '/kakaomap', title: 'KakaoMap example' },
            { route: '/img-upload', title: 'Image upload example' },
            { route: '/three', title: 'Three example' }
        ]
    }

    render() {
        return (
            <ul>
                {this.list.map((e) => (
                    <li key={e.route}>
                        <Link to={e.route}>{e.title}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Main
