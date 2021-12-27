import { PageButton } from "../../style/styled"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import { useState} from 'react'

function PaginationButton({page, pagination}) {
    let [pageRange, setPageRange] = useState(1)
    const lastPageRange = Math.ceil(page.lastPage / 10)

    const pageList = () => {
        let start = (pageRange - 1) * 10 + 1
        let end = 10 * pageRange > page.lastPage ? page.lastPage : 10 * pageRange

        return Array(end - start + 1).fill().map((_, index) => start + index)
    }

    const changeRange = (isAdd) => {
        pageRange = isAdd ? pageRange + 1 : pageRange - 1
        
        pagination(isAdd ? (pageRange - 1) * 10 + 1 : pageRange * 10)
        
        setPageRange(pageRange)
    }

    return (
        <>
            {pageRange > 1 ? <PageButton key='previous' background='grey' onClick={() => changeRange(false)}>
                <AiFillCaretLeft />
            </PageButton> : <></>}

            {pageList(page).map((e) => (
                <PageButton key={e} background={page.currentPage === e ? '#bebebe' : 'grey'} onClick={() => pagination(e)}>
                    {e}
                </PageButton>
            ))}

            {lastPageRange > pageRange ? <PageButton key='next' background='grey' onClick={() => changeRange(true)}>
                <AiFillCaretRight />
            </PageButton> : <></>}
        </>
    )
}

export default PaginationButton
