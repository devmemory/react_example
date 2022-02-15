import React, { Component } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './pagination.css'

class Pagination extends Component {
    render() {
        const { currentPage, movePage, pageList, pageRange, lastPageRange, changePageRange } = this.props
        return (
            <>
                {pageRange > 1 ? (<span className="span-page-button" onClick={() => changePageRange(false)}>
                    <AiOutlineLeft />
                </span>) : <></>}

                {pageList.map((e, i) => (
                    <span
                        key={e}
                        style={{ color: `${e === currentPage ? "#009879" : ''}` }}
                        className="span-page-button"
                        onClick={() => movePage(e)}
                    >
                        {e}
                    </span>
                ))}


                {pageRange < lastPageRange ? (<span className="span-page-button" onClick={() => changePageRange(true)}>
                    <AiOutlineRight />
                </span>) : <></>}
            </>
        )
    }
}

export default Pagination