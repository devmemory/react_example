import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalExample() {
    const [show, setShow] = useState(false)

    return (
        <>
            <Button onClick={() => setShow(true)}>Show modal</Button>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalExample
