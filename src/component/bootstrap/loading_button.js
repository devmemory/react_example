import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'

function LoadingButton() {
    const [isLoading, setIsLoading] = useState(false)

    const load = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }

    return (
        <Button
            variant={isLoading ? "success" : "primary"}
            disabled={isLoading}
            onClick={() => !isLoading ? load() : null}
        >
            {isLoading ? 'Loading…' : 'Click to load'}
            {isLoading ? <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            /> : <div />}
        </Button>
    )
}

export default LoadingButton
