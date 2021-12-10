import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClassApp from './class/class_app'
import Counter from './counter/counter'
import FunctionalApp from './functional/functional_app'
import Main from './main'
import RouterExample from './router/router_example'
import ContextExample from './context/context_example'

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
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Index