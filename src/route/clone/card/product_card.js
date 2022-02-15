import React, { Component } from 'react'
import { Center } from 'style/styled'

class ProductCard extends Component {
    render() {
        return (
            <Center height='100vh'>
                <div style={styles.card}>
                    <img style={styles.mainImage} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png' alt='' />
                    <div style={styles.textArea}>
                        <div style={styles.upperText}>
                            <p style={{ fontWeight: 'bold', fontSize: '18px', margin: '0' }}>
                                AdidasOriginals
                            </p>
                            <p style={{ color: '#48cfad', margin: '0' }}>
                                $39
                            </p>
                        </div>
                        <p style={{ color: '#eaebec', margin: '0' }}>
                            Men's running shirt
                        </p>
                    </div>
                </div>
            </Center>
        )
    }
}

const styles = {
    card: {
        height: '600px',
        width: '400px',
        border: '0.5px solid #e2e2e2'
    },
    mainImage: {
        width: '100%'
    },
    textArea: {
        padding: '20px'
    },
    upperText: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

export default ProductCard