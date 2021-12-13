import React from 'react'

function Test(props){
    return (
        <div style={{display: 'grid', placeContent: 'center', width: '100vw', height: '100vh'}}>
            {props.children}
        </div>
    )
}

function InheritanceExample() {
    return (
        <Test>
            This is for the test!
        </Test>
    )
}

export default InheritanceExample
