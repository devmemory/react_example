- hook 스터디 예정

- 상태관리 라이브러리 스터디 예정(아마도 redux..?)

## node express추가
 1. server 로직 추가
 2. 구조화 테스트 완료

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