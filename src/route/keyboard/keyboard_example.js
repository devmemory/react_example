import { Component } from 'react'
import { Center } from '../../style/styled'

class KeyboardExample extends Component {
    constructor() {
        super()

        this.state = {
            key: ''
        }

        this.keyEvent = this.keyEvent.bind(this)
    }

    keyEvent(event) {
        this.setState({ key: event.key })
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyEvent, false)
    }

    componentWillUnmount() {
        document.addEventListener('keydown', this.keyEvent, false)
    }

    render() {
        return (
            <Center height='100vh' style={{ fontSize: '30px' }}>
                {this.state.key === '' ? 'Press key' : this.state.key}
            </Center>
        )
    }
}

export default KeyboardExample


// function KeyboardExample() {
//     const [key, setKey] = useState('')

//     const keyEvent = (event) => {
//         setKey(event.key)
//     }

//     useEffect(() => {
//         document.addEventListener('keydown', keyEvent, false)

//         return () => {
//             document.addEventListener('keydown', keyEvent, false)
//         }
//     }, [])

//     return (
//         <Center height='100vh' style={{fontSize: '30px'}}>
//             {key === '' ? 'Press key' : key}
//         </Center>
//     )
// }

// export default KeyboardExample
