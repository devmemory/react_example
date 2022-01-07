import React from 'react'
import { AiFillCamera } from 'react-icons/ai'
import './album.css'

function Album() {
    // copy : https://mui.com/getting-started/templates/album/
    return (
        <>
            <header className='header-album'>
                <AiFillCamera size={25} style={{ margin: '0 20px 0 20px' }} />
                Album layout
            </header>
            <div className='div-head-text'>
                <p>
                    Album layout
                </p>
                <p>
                    Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                </p>
                <span>
                    <button className='btn-main'>
                        MAIN CALL TO ACTION
                    </button>
                    <button className='btn-main-secondary'>
                        SECONDARY ACTION
                    </button>
                </span>
            </div >

            <div className='div-image-container'>
                {Array.from({ length: 9 }, (_, index) => index).map((e) => (
                    <div key={e} className='div-card'>
                        <img src='https://source.unsplash.com/random' />
                        <div className='div-card-text'>
                            <p>
                                Heading
                            </p>
                            <p>
                                This is a media card. You can use this section to describe the content.
                            </p>
                            <div>
                                <button style={{marginRight: '10px'}}>
                                    VIEW
                                </button>
                                <button>
                                    EDIT
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <footer>
                <p>Footer</p>
                <p>Something here to give the footer a purpose</p>
                <p>
                    Copyright &copy;
                    <a href='/'>Your Website</a>
                    2022
                </p>
            </footer>
        </>
    )
}

export default Album
