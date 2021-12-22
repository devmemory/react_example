import React, { Component } from 'react'
import AlertExample from '../../component/bootstrap/alert'
import NavBarExample from '../../component/bootstrap/navbar'

class BootstrapExample extends Component {
    render() {
        return (
            <>
                <NavBarExample/>
                <AlertExample/>
            </>
        )
    }
}

export default BootstrapExample
