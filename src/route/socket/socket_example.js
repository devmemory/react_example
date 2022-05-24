import React, { Component } from 'react'
import {io} from 'socket.io-client'
import './socket_example.css'
import { MdSend, MdClose } from "react-icons/md";

class SocketExample extends Component {
    constructor() {
        super()

        this.isAdmin = this.props?.isAdmin ?? false

        this.state = {
            list: [
                { isAdmin: true, name: 'Admin', message: 'Hello. Thanks for using our page. How can I help you? :)' }
            ],
            showMessage: false,
            message: ''
        }

        this.name = 'User'
    }

    componentDidMount() {
        this.socket = io(process.env.REACT_APP_SERVER_IP)

        console.log(this.socket)

        this.socket.on('message', (data) => {
            this.addMessage(data)
        })
    }

    componentWillUnmount() {
        this.socket.off('message')
    }

    sendMessage = () => {
        if (this.state.message === '') {
            return
        }

        const data = { name: this.name, message: this.state.message, isAdmin: this.isAdmin }

        this.socket.emit('message', data)

        this.addMessage(data)
    }

    addMessage = (data) => {
        if (this.socket.connected) {
            console.log('called')
            this.setState({ list: [...this.state.list, data], message: '' })
        } else {
            alert('Socket is disconnected.')
        }
    }

    toggleFab = (value) => {
        this.setState({ showMessage: value })
    }

    keyPressed = (e) => {
        if (e.key === 'Enter') {
            this.sendMessage()
        }
    }

    render() {
        return (
            <>
                {this.state.showMessage ? (
                    <div id='div-message'>
                        <div>
                            Message
                            <MdClose onClick={() => this.toggleFab(false)} />
                        </div>
                        <ul>
                            {this.state.list.map((e, i) =>
                            (<li key={i} style={{ textAlign: e.isAdmin ? 'left' : 'right' }}>
                                {e.isAdmin ? (
                                    <>
                                        <div className='div-nick'>
                                            {e.name[0]}
                                        </div>
                                        <div className='div-bubble'>
                                            {e.message}
                                        </div>
                                    </>
                                ) : (
                                    <div className='div-bubble'>
                                        {e.message}
                                    </div>
                                )}
                            </li>)
                            )}
                        </ul>
                        <div className='div-bottom-message'>
                            <input
                                type='text'
                                value={this.state.message}
                                onChange={(e) => this.setState({ message: e.target.value })}
                                onKeyDown={this.keyPressed}
                            />
                            <MdSend type='submit' onClick={this.sendMessage} />
                        </div>
                    </div>
                ) : (
                    <div id='div-fab'>
                        <MdSend onClick={() => this.toggleFab(true)} />
                    </div >
                )
                }
            </>
        )
    }
}

export default SocketExample