- hook 스터디 예정

- 상태관리 라이브러리 스터디 예정(아마도 redux..?)
 1. reducer
 2. action
 3. store

- 보류 : suspense(Future builder랑 비슷한 친구?)
- portal : 왜 쓰는거지.. 안써도 비슷한거 간단하게 구현 가능한데...?

## HOC
 1. with로 네이밍 ex) TaskList, withTaskList
 2. 여러번 재사용되는부분처리 ex) 같은 api콜 처리 로직

## late import
  let 변수명

  if (typeof window !== `undefined`){
      import("라이브러리 명").then((사용할 이름) => {
          변수명 = 사용할 이름.default
      })
  }

## align center
 1. 100%는 부모 태그 크기의 100%
 2. 100vh는 부모 태그 상관없이 화면 100%
 3. 가장 간단한 방법
  - display: grid, placeContent: center 

## context
 1. 전역적으로 데이터 공유 가능
 2. 컴포넌트 재사용성 문제로 필요한곳에서만 사용
 3. 변경 범위를 provider로 감싸고 consumer로 이벤트 및 rebuild호출

## router
 현재 url parameter는 hook으로만 가능..(왜?)

## rest api콜 방식
 1. ajax - jquery에서는 편하게 사용가능(error, success, complete구분 처리 용이)
 2. fetch - response time out이 없음, Json변환 필요, 다만 업데이트 및 설치 필요없음
 3. axios - fetch + json변환 필요없음, 구형 브라우저 지원, 다만 설치 필요

## node express추가
 1. server 로직 추가
 2. 구조화 테스트 완료
 3. proxy로 middle ware사용중

## 로직 개선
 1. 서버쪽 validation처리 개선
 2. 클라이언트쪽 fetch util추가

## fetch 에러 처리
 1. fetch에러는 try catch에서 type error만 검출(?)
 2. status code에 따라 throw하는 로직 추가 필요..

## fetch 사용 위치
 1. class형 : onMount에서 콜
 2. function형 : useEffect에서 콜 (두번째 인자 빈 배열로 안넣으면 무한루프)

# rest api를 이용한 crud 구현 완료

# class형 함수형으로 동일한(?) 화면 및 기능 작업 완료