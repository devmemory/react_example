import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClassApp from './todo/class/class_app'
import Counter from './counter/counter'
import FunctionalApp from './todo/functional/functional_app'
import Main from './main'
import RouterExample from './router/router_example'
import ContextExample from './context/context_example'
import LocalStorageExample from './storage/storage_example'
import ErrorTest from './error/error_test'
import LazyComonent from './suspense/lazy_component'
import RefExample from './ref/ref_example'
import HOCExample from './hoc/hoc_example'
import InheritanceExample from './inheritance/inheritance'
import PortalExample from './portal/portal'
import BootstrapExample from './bootstrap/bootstrap_example'
import KeyboardExample from './keyboard/keyboard_example'
import Album from './clone/album/album'
import AnimationExample from './animation/example'
import ProductCard from './clone/card/product_card'
import TableExample from './table/table_example'

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
            { path: '/error', element: (<ErrorTest />) },
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
            }
        ]
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    {this.list.map((e) => (<Route key={e.path} path={e.path} element={e.element} />))}
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Index