import { Row, Button, Col } from "react-bootstrap"

function ButtonRow() {
    return (
        <>
            <Row className='mx-0'>
                <Button as={Col} variant='primary'>Button1</Button>
                <Button as={Col} variant='secondary' className="mx-2">Button2</Button>
                <Button as={Col} variant='success'>Button3</Button>
            </Row>
        </>
    )
}

export default ButtonRow
