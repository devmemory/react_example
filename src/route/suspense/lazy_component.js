import React, { Suspense } from 'react'
import { BounceLoader } from 'react-spinners'

const LazyComponent = React.lazy(() => import('./test_component'))

function LazyComonent() {
    return (
        <Suspense fallback={<div style={{ height: '100vh', width: '100vw', display: 'grid', placeContent: 'center' }}>
            <BounceLoader />
        </div>}>
            <LazyComponent />
        </Suspense>
    )
}

export default LazyComonent
