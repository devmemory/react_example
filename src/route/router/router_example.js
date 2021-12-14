import { useParams } from 'react-router-dom'
import { Center } from '../../style/styled'

const RouterExample = () => {
    const param = useParams()
    return (
        <Center height='100vh'>
            <h1>{param ? param.text : 'Error'}</h1>
        </Center>
    )
}

export default RouterExample