import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

function DrawerExample() {
    const [show, setShow] = useState(false)

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Open drawer
            </Button>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default DrawerExample
