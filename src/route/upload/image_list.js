import React, { Component } from 'react'
import { Center } from 'style/styled'

const imgBaseUrl = 'http://localhost:3000/image'

class ImageList extends Component {
    constructor() {
        super()

        this.imageData = window.localStorage.getItem('imgList')

        if (this.imageData !== null) {
            this.imageList = this.imageData.split(',')
        }
    }

    componentWillUnmount() {
        window.localStorage.removeItem('imgList')
    }

    render() {
        if (this.imageList) {
            return (
                <div>
                    {this.imageList.map((e, i) => <img key={i} src={`${imgBaseUrl}/${e}`} alt='' />)}
                </div>
            )
        }

        return (
            <Center height='100vh'>
                이미지 불러오는중...
            </Center>
        )
    }
}

export default ImageList