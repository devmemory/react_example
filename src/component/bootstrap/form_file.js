import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function FormFile() {
    const [value, setValue] = useState(30)

    return (
        <>
            <Form.Label>Range</Form.Label>
            <Form.Range value={value} onChange={(event) => setValue(event.target.value)}/>
            <br />
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <br />
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </>
    )
}

export default FormFile
