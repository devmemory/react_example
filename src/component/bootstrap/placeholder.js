import React, { useEffect, useState } from 'react'
import { Card, Placeholder, Button } from 'react-bootstrap'

function PlaceHolderExample() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [])

    if (isLoading) {
        console.log('loading')
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ900sNCKIWHj0L7HSWho0elG6JhIbmp2lAUA&usqp=CAU" />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card>
            </>
        )
    }

    console.log('done')
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ900sNCKIWHj0L7HSWho0elG6JhIbmp2lAUA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default PlaceHolderExample
