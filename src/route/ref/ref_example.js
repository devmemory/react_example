import React from 'react'

function RefExample() {
    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className='FancyButton'>
            {props.children}
        </button>
    ))

    const ref = React.createRef()

    return (
        <div>
            <FancyButton ref={ref}>Click me</FancyButton>
        </div>
    )
}

export default RefExample