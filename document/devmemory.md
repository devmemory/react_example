react icon 링크 https://react-icons.github.io/react-icons/

- 보류 : suspense(Future builder랑 비슷한 친구?)
- portal : 왜 쓰는거지.. 안써도 비슷한거 간단하게 구현 가능한데...?

## 적용 내용
# node, react image upload example 추가

# table example 추가

# react animation css, js 테스트

# material ui album example

# jsconfig 설정으로 import 경로 간소화

# index route관련 로직 변경

# bootstrap 추가 앞으로 테스트 필요

# class, function app 에러처리(tasks가 빈 배열일때)

# sqlite3 연결 완료
 1. 비동기처리 안됨 (1차 멘붕)
 2. Promise 사용해서 강제 비동기 처리.. (왜 이렇게 써야되는데..)
 3. range 처리 필요
 4. 단일 값 받아오기 필요

# loading, pagination 처리 완료
 - 문제점
  1. 페이지 가져오는 순서 ex) page 1: 1~pageSize page last : ~ last page
  2. hide 부분 처리 문제 ex) page 1: 1~pageSize (갯수가 pageSize보다 적음)
  3. page 개수가 10개 이상일 때 UI처리 필요

 - 해결
  - sql 쿼리 내용 수정 limit, offset 사용
  - pagination button 추가

# HOC
 1. with로 네이밍 ex) TaskList, withTaskList
 2. 여러번 재사용되는부분처리 ex) 같은 api콜 처리 로직

# late import
  let 변수명

  if (typeof window !== `undefined`){
      import("라이브러리 명").then((사용할 이름) => {
          변수명 = 사용할 이름.default
      })
  }

# router
 현재 url parameter는 hook으로만 가능..(왜?)

# node express추가
 1. server 로직 추가
 2. 구조화 테스트 완료
 3. proxy로 middleware사용중

# 로직 개선
 1. 서버쪽 validation처리 개선
 2. 클라이언트쪽 fetch util추가
 3. node 에러 처리 추가

# fetch 에러 처리
 1. fetch에러는 try catch에서 type error만 검출(?)
 2. status code에 따라 throw하는 로직 추가 필요..

# fetch 사용 위치
 1. class형 : onMount에서 콜
 2. function형 : useEffect에서 콜 (두번째 인자 빈 배열로 안넣으면 무한루프)

# rest api를 이용한 crud 구현 완료

# class형 함수형으로 동일한(?) 화면 및 기능 작업 완료

## 공부자료
# lazy import
1. react 웹은 첫방문시 필요한 리소스 다운로드 해서 로딩이 느림
2. lazy 사용으로 필요한 페이지 리소스만 다운르도
3. 페이지를 lazy import하면서 중간에 생기는 텀은 suspense를 이용해서 처리

# hook
useState = setState와 비슷 다만 함수형 내부에서 state를 사용하지 않는 변수는 초기화 됨
useEffect = didMount, willUnmount(return에서 처리)가능. 의존 배열에 변경되는 값을 넣으면 값이 변경될때마다 콜됨. didMount처럼 사용시 의존 배열 안넣으면 무한루프...

# redux 기본 구조
 1. store
 2. action
 3. reducer

 reducer에 action과 state를 넘겨서 상태 변경

# form
 1. input태그 type='email'인경우 자동으로 validation
 2. form태크 action='mailTo:이메일'로 이메일 보내기 가능

# class형에서 bind 대신 arrow function 형태로 선언해주면 bind필요 없음

# setTimeout, setInterval
 1. setTimeout = Future.delayed()
 2. setInterval = Timer()

# context
 1. 전역적으로 데이터 공유 가능
 2. 컴포넌트 재사용성 문제로 필요한곳에서만 사용
 3. 변경 범위를 provider로 감싸고 consumer로 이벤트 및 rebuild호출

# rest api콜 방식
 1. ajax - jquery에서는 편하게 사용가능(error, success, complete구분 처리 용이)
 2. fetch - response time out이 없음, Json변환 필요, 다만 업데이트 및 설치 필요없음
 3. axios - fetch + json변환 필요없음, 구형 브라우저 지원, 다만 설치 필요

# 태그 간단 정리
 - align center
  1. 100%는 부모 태그 크기의 100%
  2. 100vh는 부모 태그 상관없이 화면 100%
  3. 속성 적용했을 때 세로 align이 안되면 height 체크
  4. 가장 간단한 방법
    - display: grid, placeContent: center

 - span & div / inline & block (default 기준)
  1. span : 자식 크기만큼 지정 ex) 길이 : 글자가 차지하는 만큼
  2. div : 부모 크기만큼 지정 ex) 길이 : 부모 태그 넓이만큼
  3. inline : span이랑 동일 요소
  4. block : div랑 동일 요소
  5. 고로.. inline block 쓰기전에 태그 선택 잘하자..
  6. flex
   - align-items : 세로
   - justify-content : 가로
  7. box-shadow 1(x축) 2(y축) 3(번짐)

 - b & strong / i & em / u & ins / del / sup & sub
  1. b, strong : 굵은 글자
  2. i, em : italic 폰트
  3. u, ins : 밑줄 글자
  4. del : 글자 중간에 줄
  5. sup(위) sub(아래) 첨자

 - img 태그
  1. 캡션 붙일 때 figure > img, figcaption(여기에 해당 내용)
  2. 여러개 하이퍼링크 img usemap속성 사용 및 map 태그 사용

 - semantic tags
  1. main : 페이지 소개 (페이지당 한개만 사용 가능, unique key처럼 사용??)
  2. section : 특정 구역 grouping(화면에 노출 안할때는 display none)
  3. article : 블로그 글처럼 여러개의 내용을 담을때 사용(nested 가능 다만 outer랑 inner가 연관되어 있어야 됨)
  4. semantic 태그 내부에 hn 태그 사용 필요. 화면에 비 노출 시 display none을 이용해서 처리

# 렌더링 관련
 - 렌더링 순서
  1. html 파싱 후 dom 트리 구성
  2. css 파싱 후 cssdom 트리 구성
  3. dom과 cssdom을 결합해서 렌더링 트리 구성
  4. 렌더링 트리에서 각 노드의 크기와 위치 계산
  5. 개별 노드를 화면에 그림
  6. (optional) 완료후 리플로우 혹은 리페인트 발생 가능
   - dom 추가, 제거 및 변경
   - css 스타일 추가, 제거 및 변경
   - 애니메이션, 트렌지션 등 사용
   - offset 사용
   - 유저 상호작용
 - 최적화 방법(리플로우 최소화)
  1. 인라인 스타일 사용 x
  2. dom 변경시 작업 그룹핑
   ex)
      function change() {     
        let width = document.getElementById("layer1").style.width;
        let height = document.getElementById("layer3").style.height; 
        document.getElementById("layer2").style.width = width; 
        document.getElementById("layer4").style.height = height; 
      }
  3. 노출제어 : 특정 위젯을 그릴 때 display none 상태에서 style변경후 block으로 변경
  4. 노드복제, 캐싱

# babel, webpack
 1. babel : 브라우저 호환성을 위해 사용(es6 미지원 => es5형태로 변환)
 2. webpack : 쉽게 말해 blundler 유지보수 및 퍼포먼스 개선

# Virtual DOM 관련
 1. 브라우저마다 성능차이 심함
 2. 많은 요소들을 변경할 때 성능저하
 3. DOM fragment를 사용해서 위 문제들 개선
 4. DOM fragment 관리 자동화 = virtual DOM