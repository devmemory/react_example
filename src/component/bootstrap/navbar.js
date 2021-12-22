import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../logo.svg'

const NavBarExample = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <Navbar.Brand>
                        <img src={Logo} alt='' width="30" height="30" />
                        React Bootstrap
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBarExample