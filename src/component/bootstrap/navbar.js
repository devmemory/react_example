import { useState } from 'react'
import { Container, Navbar, Modal, Form, Button, Card } from 'react-bootstrap'
import Logo from 'logo.svg'

const NavBarExample = () => {
    const [content, setContent] = useState('main')

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <span onClick={() => setContent('main')} style={{cursor: 'pointer'}}>
                            <img src={Logo} alt='' width="30" height="30" />
                            React Bootstrap
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <LoginButton text='Sign in'/>
                        <span style={{ margin: "0 10px 0 10px", color: 'white' }}>/</span>
                        <span style={{ color: "white", cursor: 'pointer' }} onClick={() => setContent('register')}>Sign up</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {content === 'main' ? <></> : <RegisterScreen />}
        </>
    )
}

const LoginButton = ({text, textDecoration}) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <span onClick={() => setShow(true)} style={{ color: 'white', cursor: 'pointer', textDecoration: textDecoration}}>
                {text}
            </span>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                backdrop='static'
                size='sm'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Sign in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="dark" type="submit" style={{ float: "right" }}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

const RegisterScreen = () => {
    return (
        <Card
            bg="secondary"
            text='white'
            style={{ height: "320px", width: '300px' }}
            className="mb-2"
        >
            <Card.Header>Sign up</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="light" type="submit" style={{ float: "right" }}>
                        Submit
                    </Button>
                    <div style={{ display: "inline-block", marginTop: "20px", fontSize: "13px" }}>If you have an account, click <LoginButton text="here" textDecoration='underline' /> to login</div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default NavBarExample