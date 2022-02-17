import React, { Component } from 'react'
import ImageBlock from 'route/imageblock/imageblock'
import { Center } from 'style/styled'

const imgBaseUrl = 'http://localhost:3000/image'

class ImageList extends Component {
    constructor() {
        super()

        this.imageData = window.localStorage.getItem('imgList')

        if (this.imageData !== null) {
            this.imageList = []

            this.imageData.split(',').forEach((e) => {
                this.imageList.push(`${imgBaseUrl}/${e}`)
            })
        }
    }

    componentWillUnmount() {
        window.localStorage.removeItem('imgList')
    }

    render() {
        if (this.imageList) {
            return (
                <ImageBlock imageList={this.imageList} title='업로드 이미지' />
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