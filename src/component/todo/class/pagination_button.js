import { Component } from 'react'
import { PageButton } from '../../../style/styled'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

class PaginationButton extends Component {
    constructor(props) {
        super(props)

        this.pageRange = 1

        this.lastPageRange = Math.ceil(props.page.lastPage / 10)

        this.pageList = this.pageList.bind(this)
        this.changeRange = this.changeRange.bind(this)
    }

    pageList() {
        const start = (this.pageRange - 1) * 10 + 1
        const end = 10 * this.pageRange > this.props.page.lastPage ? this.props.page.lastPage : 10 * this.pageRange

        return Array(end - start + 1).fill().map((_, index) => start + index)
    }

    changeRange(isAdd) {
        this.pageRange = isAdd ? this.pageRange + 1 : this.pageRange - 1

        this.props.pagination(isAdd ? (this.pageRange - 1) * 10 + 1 : this.pageRange * 10)
    }

    render() {
        const { page, pagination } = this.props
        return (
            <>
                {this.pageRange > 1 ? <PageButton key='previous' background='grey' onClick={() => this.changeRange(false)}>
                    <AiFillCaretLeft />
                </PageButton> : <></>}

                {this.pageList().map((e) => (
                    <PageButton key={e} background={page.currentPage === e ? '#bebebe' : 'grey'} onClick={() => pagination(e)}>
                        {e}
                    </PageButton>
                ))}

                {this.lastPageRange > this.pageRange ? <PageButton key='next' background='grey' onClick={() => this.changeRange(true)}>
                    <AiFillCaretRight />
                </PageButton> : <></>}
            </>
        )
    }
}

export default PaginationButton