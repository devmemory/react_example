import React, { Component } from 'react'
import { AiFillCaretDown, AiOutlineMinus } from "react-icons/ai";
import './table.css'

class Table extends Component {
    constructor(){
        super()

        this.compactNumber = this.compactNumber.bind(this)
        this.sortIcon = this.sortIcon.bind(this)
    }

    compactNumber(num) {
        return Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(num)
    }

    sortIcon(isSelected) {
        return isSelected ? <AiFillCaretDown /> : <AiOutlineMinus />;
    }

    render() {
        const { orderType, currentOrder, changeOrder, currentList, currentPage, pageSize } = this.props
        console.log(this.props)
        return (
            <table>
                <thead>
                    <tr id="tr-head">
                        <th>순위</th>
                        <th>채널명</th>
                        <th>카테고리</th>
                        <th onClick={() => changeOrder(orderType.follower)}>
                            구독자수
                            {this.sortIcon(currentOrder === orderType.follower)}
                        </th>
                        <th onClick={() => changeOrder(orderType.avgView)}>
                            평균 조회수
                            {this.sortIcon(currentOrder === orderType.avgView)}
                        </th>
                        <th onClick={() => changeOrder(orderType.advView)}>
                            광고 영상 평균 조회수
                            {this.sortIcon(currentOrder === orderType.advView)}
                        </th>
                        <th onClick={() => changeOrder(orderType.totView)}>
                            총 조회수
                            {this.sortIcon(currentOrder === orderType.totView)}
                        </th>
                        <th onClick={() => changeOrder(orderType.video)}>
                            업로드 영상
                            {this.sortIcon(currentOrder === orderType.video)}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {currentList.map((e, i) => {
                        return (
                            <tr
                                key={i}
                                className='tr-body-selected'
                            >
                                <td>
                                    {(currentPage - 1) * pageSize + i + 1}
                                </td>
                                <td className="td-channel">
                                    {e.name}
                                </td>
                                <td>
                                    {e.category}
                                </td>
                                <td>
                                    {this.compactNumber(e.follower)}
                                </td>
                                <td>
                                    {this.compactNumber(e.avgView)}
                                </td>
                                <td>
                                    {this.compactNumber(e.advView)}
                                </td>
                                <td>
                                    {this.compactNumber(e.totView)}
                                </td>
                                <td>
                                    {this.compactNumber(e.video)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Table