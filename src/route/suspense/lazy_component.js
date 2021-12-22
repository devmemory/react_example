import React, { Suspense } from 'react'
import { Spinner } from 'react-bootstrap'

const LazyComponent = React.lazy(() => import('./test_component'))

function LazyComonent() {
    return (
        <Suspense fallback={<div style={{ height: '100vh', width: '100vw', display: 'grid', placeContent: 'center' }}>
            <Spinner animation='grow' />
        </div>}>
            <LazyComponent />
        </Suspense>
    )
}

export default LazyComonent
