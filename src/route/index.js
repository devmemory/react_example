import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClassApp from './class/class_app'
import Counter from './counter/counter'
import FunctionalApp from './functional/functional_app'
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

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/router/:text' element={<RouterExample />} />
                    <Route path='/class' element={<ClassApp />} />
                    <Route path='/functional' element={<FunctionalApp />} />
                    <Route path='/context' element={<ContextExample />} />
                    <Route path='/storage' element={<LocalStorageExample />} />
                    <Route path='/error' element={<ErrorTest />} />
                    <Route path='/lazy' element={<LazyComonent />} />
                    <Route path='/ref' element={<RefExample />} />
                    <Route path='/hoc' element={<HOCExample />} />
                    <Route path='/inheritance' element={<InheritanceExample />} />
                    <Route path='/portal' element={<PortalExample />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Index