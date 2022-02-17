import React, { Component } from 'react'
import './imageblock.css'

class ImageBlock extends Component {
    render() {
        const {imageList,title} = this.props

        let component

        switch (imageList.length) {
            case 0:
                component = (<div>No image</div>)
                break;
            case 1:
                component = (
                    <div className="div-image-block">
                        <img src={imageList[0]} alt="" />
                        <p>{title}</p>
                    </div>
                )
                break;
            case 2:
                component = (
                    <div className="div-image-block">
                        <div>
                            <img src={imageList[0]} alt="" />
                            <img src={imageList[1]} alt="" />
                        </div>
                        <p>{title}</p>
                    </div>
                )
                break;
            default:
                component = (
                    <div className="div-image-block">
                        <div>
                            <img src={imageList[0]} alt="" />
                            <div>
                                <img src={imageList[1]} alt="" />
                                {imageList.length > 3 ? (<div className="div-num" style={{ backgroundImage: `url(${imageList[2]})` }}>
                                    +{imageList.length - 3}
                                </div>) : (<img src={imageList[2]} alt="" />)}
                            </div>
                        </div>
                        <p>{title}</p>
                    </div>
                )
        }

        return component
    }
}

export default ImageBlock