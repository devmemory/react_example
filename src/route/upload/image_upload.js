import React, { Component } from 'react'
import { API } from 'api/common'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ImageUploadExample extends Component {
    constructor() {
        super()

        this.state = {
            hasImage: false
        }

        this.api = new API()
        this.file = null
        this.type = null
    }

    getImageListFromServer = async () => {
        const res = await this.api.getImageList()

        console.log({ res })

        if (res.code === 1) {
            window.localStorage.setItem('imgList', res.data)
            toast('이미지 리스트 보기 버튼을 눌러주세요')
            this.setState({hasImage: true})
        } else {
            toast(res.data)
        }
    }

    getImage = (e) => {
        e.preventDefault()

        this.file = e.target.files[0]

        this.type = `${this.file.type}`.split('/')[1]
        console.log(e, this.file, this.type)
    }

    uploadImage = async () => {
        if (this.file === null) {
            alert('No image selected')
            return
        }

        if (this.type === null) {
            alert('Unknown image type')
            return
        }

        const res = await this.api.uploadImage(this.file, this.type)

        toast('이미지 업로드 완료')
    }

    render() {
        return (
            <>
                <label>
                    파일업로드
                    <input type='file' accept='image/*' onChange={this.getImage} />

                </label>
                <button onClick={() => this.uploadImage()}>
                    업로드
                </button>
                <div style={{ margin: '10px 0 10px 0' }}>
                    <button onClick={() => this.getImageListFromServer()}>
                        이미지 리스트 가져오기
                    </button>
                </div>
                {this.state.hasImage ? (<Link to={'/img-list'}>
                    이미지 리스트 보기
                </Link>) : <></>}
                <ToastContainer />
            </>
        )
    }
}

export default ImageUploadExample