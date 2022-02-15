import React, { Component } from 'react'
import { Center } from 'style/styled';
import './table_example.css';
import Pagination from './pagination';
import Table from './table';

const orderType = Object.freeze({
    follower: 0,
    avgView: 1,
    advView: 2,
    totView: 3,
    video: 4,
});

class TableExample extends Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            currentList: [],
            currentOrder: orderType.totView,
            pageSize: 10
        }

        this.channelList = Array.from({ length: 242 }, (_, index) => {
            return {
                name: `channel - ${index}`,
                category: [
                    "게임",
                    "영화",
                    "여행",
                    "노래",
                    "IT",
                    "뉴스",
                    "과학",
                    "기타",
                ][Math.floor(Math.random() * 8)],
                follower: Math.random() * (100000 - 1) + 1,
                avgView: Math.random() * (1000000 - 1) + 1,
                advView: Math.random() * (10000 - 1) + 1,
                totView: Math.random() * (1000000000 - 1) + 1,
                video: Math.round(Math.random() * (1000 - 1) + 1),
            };
        });

        this.currentPage = 1

        this.pageRange = 1

        this.pageLength = 10

        this.lastPage = Math.ceil(this.channelList.length / this.state.pageSize)

        this.movePage = this.movePage.bind(this)
        this.changeOrder = this.changeOrder.bind(this)
        this.getChannelList = this.getChannelList.bind(this)
        this.changePageRange = this.changePageRange.bind(this)
        this.getPageList = this.getPageList.bind(this)
        this.changePageSize = this.changePageSize.bind(this)
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            currentList: this.getChannelList(this.currentPage)
        })
    }

    movePage(index) {
        this.currentPage = index
        this.setState({currentList: this.getChannelList(index) })
    }

    changeOrder(type) {
        let order

        switch (type) {
            case orderType.follower:
                order = orderType.follower;
                this.channelList.sort((a, b) => b.follower - a.follower);
                break;
            case orderType.avgView:
                order = orderType.avgView;
                this.channelList.sort((a, b) => b.avgView - a.avgView);
                break;
            case orderType.advView:
                order = orderType.advView;
                this.channelList.sort((a, b) => b.advView - a.advView);
                break;
            case orderType.video:
                order = orderType.video;
                this.channelList.sort((a, b) => b.video - a.video);
                break;
            case orderType.totView:
            default:
                order = orderType.totView;
                this.channelList.sort((a, b) => b.totView - a.totView);
        }

        this.setState({
            currentList: this.getChannelList(this.currentPage),
            currentOrder: order
        })
    }

    getChannelList(index, pageSize) {
        const size = pageSize ?? this.state.pageSize
        const firstIndex = (index - 1) * size
        return this.channelList.slice(firstIndex, firstIndex + size);
    }

    getPageList() {
        let start = (this.pageRange - 1) * this.pageLength + 1;
        let end = this.pageLength * this.pageRange > this.lastPage ? this.lastPage : this.pageLength * this.pageRange;

        return Array(end - start + 1)
            .fill()
            .map((_, index) => index + start);
    }

    changePageRange(isAdd) {
        this.pageRange = isAdd ? this.pageRange + 1 : this.pageRange - 1;

        this.currentPage = isAdd ? (this.pageRange - 1) * this.pageLength + 1 : this.pageRange * this.pageLength

        this.setState({ currentList: this.getChannelList(this.currentPage) })
    }

    changePageSize(e) {
        const size = Number(e.target.value)

        this.lastPage = Math.ceil(this.channelList.length / size)

        this.setState({
            pageSize: size,
            currentList: this.getChannelList(this.currentPage, size)
        })
    }

    render() {
        if (!this.state.isLoaded) {
            return <Center height='100vh'>Please wait...</Center>
        }

        return (
            <main>
                <Table
                orderType={orderType}
                currentOrder={this.state.currentOrder}
                changeOrder={this.changeOrder}
                currentList={this.state.currentList}
                currentPage={this.currentPage}
                pageSize={this.state.pageSize}/>

                <Pagination
                    currentPage={this.currentPage}
                    movePage={this.movePage}
                    pageList={this.getPageList()}
                    pageRange={this.pageRange}
                    lastPageRange={Math.ceil(this.lastPage / this.pageLength)}
                    changePageRange={this.changePageRange}
                />
                <select onChange={this.changePageSize}>
                    {[10, 20, 30].map((e) => (<option name="표시 개수" key={e} value={e}>
                        {e}개
                    </option>))}
                </select>
            </main>
        )
    }
}

export default TableExample