import { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Main from './main'
const ClassApp = lazy(() => import('./todo/class/class_app'))
const Counter = lazy(() => import('./counter/counter'))
const FunctionalApp = lazy(() => import('./todo/functional/functional_app'))
const RouterExample = lazy(() => import('./router/router_example'))
const ContextExample = lazy(() => import('./context/context_example'))
const LocalStorageExample = lazy(() => import('./storage/storage_example'))
const ErrorTest = lazy(() => import('./error/error_test'))
const LazyComonent = lazy(() => import('./suspense/lazy_component'))
const RefExample = lazy(() => import('./ref/ref_example'))
const HOCExample = lazy(() => import('./hoc/hoc_example'))
const InheritanceExample = lazy(() => import('./inheritance/inheritance'))
const PortalExample = lazy(() => import('./portal/portal'))
const BootstrapExample = lazy(() => import('./bootstrap/bootstrap_example'))
const KeyboardExample = lazy(() => import('./keyboard/keyboard_example'))
const Album = lazy(() => import('./clone/album/album'))
const AnimationExample = lazy(() => import('./animation/example'))
const ProductCard = lazy(() => import('./clone/card/product_card'))
const TableExample = lazy(() => import('./table/table_example'))
const KakaoMapExample = lazy(() => import('./kakaomap/kakaomap_example'))
const ImageUploadExample = lazy(() => import('./upload/image_upload'))
const ImageList = lazy(() => import('./upload/image_list'))
const ThreeExample = lazy(() => import('./three/three_example'))
const SocketExample = lazy(() => import('./socket/socket_example'))

class Index extends Component {
    constructor() {
        super()

        this.list = [
            { path: '/', element: (<Main />) },
            { path: '/counter', element: (<Counter />) },
            { path: '/router/:text', element: (<RouterExample />) },
            { path: '/class', element: (<ClassApp />) },
            { path: '/functional', element: (<FunctionalApp />) },
            { path: '/context', element: (<ContextExample />) },
            { path: '/storage', element: (<LocalStorageExample />) },
            { path: '*', element: (<ErrorTest />) },
            { path: '/lazy', element: (<LazyComonent />) },
            { path: '/ref', element: (<RefExample />) },
            { path: '/hoc', element: (<HOCExample />) },
            { path: '/inheritance', element: (<InheritanceExample />) },
            { path: '/portal', element: (<PortalExample />) },
            { path: '/bootstrap', element: (<BootstrapExample />) },
            { path: '/keyboard', element: (<KeyboardExample />) },
            { path: '/album', element: (<Album />) },
            {
                path: '/animation', element: (<AnimationExample />)
            },
            {
                path: '/product-card', element: (<ProductCard />)
            },
            {
                path: '/table', element: (<TableExample />)
            },
            {
                path: '/kakaomap', element: (<KakaoMapExample />)
            },
            {
                path: '/img-upload', element: (<ImageUploadExample />)
            },
            {
                path: '/img-list', element: (<ImageList />)
            },
            {
                path: '/three', element: (<ThreeExample />)
            },
            {
                path: '/socket', element: (<SocketExample />)
            },
        ]
    }

    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />}>
                    <Routes>
                        {this.list.map((e) => (<Route key={e.path} path={e.path} element={e.element} />))}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default Index