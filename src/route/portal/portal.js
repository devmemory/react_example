import React, {useState} from 'react'
import { createPortal, ReactDOM } from 'react-dom'
import { ModalBackground, ModalContent } from '../../style/styled'

const Modal = ({close}) => {
    return (
        <ModalBackground className="div-modal">
            <ModalContent className="div-content">
                <h3>title</h3>
                <p>content</p>
                <button onClick={close}>close</button>
            </ModalContent>
        </ModalBackground>
    )
}

// const ModalPortal = ({ children }) => {
//     const el = document.getElementById('modal')
//     return ReactDOM, createPortal(children, el)
// }

const PortalExample = ({ children }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>show modal</button>
            {showModal ? <Modal close={() => setShowModal(false)}/> : <></>}
        </>
    )
}

export default PortalExample
