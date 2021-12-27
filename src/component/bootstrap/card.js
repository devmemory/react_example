import { Card, ListGroup, ListGroupItem, Row, Nav, Button, Col } from 'react-bootstrap'

function CardExample() {
    return (
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ900sNCKIWHj0L7HSWho0elG6JhIbmp2lAUA&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CardExample
