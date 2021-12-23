- hook 스터디 예정

- 상태관리 라이브러리 스터디 예정(아마도 redux..?)
 1. reducer
 2. action
 3. store

- 보류 : suspense(Future builder랑 비슷한 친구?)
- portal : 왜 쓰는거지.. 안써도 비슷한거 간단하게 구현 가능한데...?

## sql 현재 id range로 되어있는데 hide값 생각해서 변경 필요...

## bootstrap 추가 앞으로 테스트 필요

## class, function app 에러처리(tasks가 빈 배열일때)

## sqlite3 연결 완료
 1. 비동기처리 안됨 (1차 멘붕)
 2. Promise 사용해서 강제 비동기 처리.. (왜 이렇게 써야되는데..)
 3. range 처리 필요
 4. 단일 값 받아오기 필요

## loading, pagination 처리 완료

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

## 렌더링 관련
 # 렌더링 순서
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
 # 최적화 방법(리플로우 최소화)
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

## 태그 간단 정리
 # align center
  1. 100%는 부모 태그 크기의 100%
  2. 100vh는 부모 태그 상관없이 화면 100%
  3. 속성 적용했을 때 세로 align이 안되면 height 체크
  4. 가장 간단한 방법
    - display: grid, placeContent: center

 # span & div / inline & block (default 기준)
  1. span : 자식 크기만큼 지정 ex) 길이 : 글자가 차지하는 만큼
  2. div : 부모 크기만큼 지정 ex) 길이 : 부모 태그 넓이만큼
  3. inline : span이랑 동일 요소
  4. block : div랑 동일 요소
  5. 고로.. inline block 쓰기전에 태그 선택 잘하자..

 # b & strong / i & em / u & ins / del / sup & sub
  1. b, strong : 굵은 글자
  2. i, em : italic 폰트
  3. u, ins : 밑줄 글자
  4. del : 글자 중간에 줄
  5. sup(위) sub(아래) 첨자

 # img 태그
  1. 캡션 붙일 때 figure > img, figcaption(여기에 해당 내용)
  2. 여러개 하이퍼링크 img usemap속성 사용 및 map 태그 사용

 # semantic tags
  1. main : 페이지 소개 (페이지당 한개만 사용 가능, unique key처럼 사용??)
  2. section : 특정 구역 grouping(화면에 노출 안할때는 display none)
  3. article : 블로그 글처럼 여러개의 내용을 담을때 사용(nested 가능 다만 outer랑 inner가 연관되어 있어야 됨)
  4. semantic 태그 내부에 hn 태그 사용 필요. 화면에 비 노출 시 display none을 이용해서 처리

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