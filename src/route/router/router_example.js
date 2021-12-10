import { useParams } from 'react-router-dom'
import { Center } from '../../style/styled'

const RouterExample = () => {
    const param = useParams()
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Center>
                <h1>{param ? param.text : 'Error'}</h1>
            </Center>
        </div>
    )
}

export default RouterExample