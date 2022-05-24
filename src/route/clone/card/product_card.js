import React, { Component } from 'react'
import classNames from 'classnames'
import { Center } from 'style/styled'
// import './product_card.scss'

class ProductCard extends Component {
    constructor() {
        super()

        this.colors = ['blue', 'red', 'white', 'green']
    }

    mouseToggle = (value) => {
        console.log('toggle',{value})
        const hiddenBlock = document.getElementById('div-hidden')
        hiddenBlock.style.display = value ? 'block' : 'none'
    }

    render() {
        return (
            <Center height='100vh'>
                <div id='div-card' onMouseEnter={() => this.mouseToggle(true)} onMouseLeave={() => this.mouseToggle(false)}>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png' alt='' />
                    <div>
                        <div id='div-price'>
                            <p>
                                AdidasOriginals
                            </p>
                            <p>
                                $39
                            </p>
                        </div>
                        <p id='p-cate'>
                            Men's running shirt
                        </p>
                        <div id='div-hidden'>
                            <p>
                                SIZES
                            </p>
                            <p>
                                XS,S,M,L,XL,XXL
                            </p>
                            <p>
                                COLORS
                            </p>
                            {this.colors.map((e, i) => (<div key={i} className={`div-color ${e}`} />))}
                        </div>
                    </div>
                </div>
            </Center>
        )
    }
}

export default ProductCard