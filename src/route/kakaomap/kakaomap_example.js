/*global kakao*/
import React, { Component } from 'react'

class KakaoMapExample extends Component {
    componentDidMount() {
        const script = document.createElement('script')

        script.async = true
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}`
        document.head.appendChild(script)

        script.onload = () => {
            kakao.maps.load(() => {
                this.loadOption()
            })
        }
    }

    loadOption = () => {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }

    render() {
        return (
            <>
                <div id='map' style={{ width: '100vw', height: '100vh' }} />
                <div id="menu_wrap" className="bg_white">
                    <div className="option">
                        <div>
                            <form onSubmit={() => console.log('click')}>
                                키워드 : <input type="text" onChange={(e) => console.log(e.target.value)} size="15" />
                                <button type="submit">검색하기</button>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <ul id="placesList"></ul>
                    <div id="pagination"></div>
                </div>
            </>
        )
    }
}

export default KakaoMapExample