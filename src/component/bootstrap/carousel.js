import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselExample() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div>
            <Carousel activeIndex={currentIndex} onSelect={(index, e) => setCurrentIndex(index)}>
                <Carousel.Item>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src="http://imagescdn.gettyimagesbank.com/500/21/071/067/0/1295021978.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu8WOZjSeD1Cci3H5zdJl1XxKg-sIcip5XQ&usqp=CAU"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/181657165.jpg?k=6630f6bc905b7db7224218aa1e257388ddaba80a5784671ec8b691dcd0cf6a8b&o="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

const imgStyle = {
    height: "400px",
}

export default CarouselExample
