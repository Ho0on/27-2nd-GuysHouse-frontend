# GUYSHOUSE Project

## 🎇 팀명 : 남의집

> 취향 공유 커뮤니티 서비스 [남의집](https://naamezip.com/)을 모티브로 제작하게 된 남의집(GUYSHOUSE) 팀의 프론트엔드 레포지토리 입니다.
> 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.

## 📅 개발 기간 및 개발 인원

- 개발 기간 : 2021/12/13 ~ 2021/12/24
- 개발 인원 <br/>
  👨‍👧‍👦 **Front-End** 3명 :
  [김상훈](https://github.com/Ho0on), [김태영](https://github.com/Moro-yong), [황성재](https://github.com/seongjae0325)<br/>
- [Front-end github 링크](https://github.com/wecode-bootcamp-korea/27-2nd-GuysHouse-frontend)<br/>
  👨‍👧‍👦 **Back-End** 3명 :
  [고민혁](https://github.com/MinhyukK0), [박세용](https://github.com/se-yong), [유민혁](https://github.com/MinHyeouk)<br/>
- [Back-end github 링크](https://github.com/wecode-bootcamp-korea/27-2nd-GuysHouse-backend)

## 🎬 프로젝트 구현 영상

- 🔗 [영상 링크] : 추후 재업데이트 예정

## ⚙ 적용 기술

- **Front-End** : JavaScript(ES6), React.js, StyledComponent, HTML5/CSS3
- **Back-End** : Django(Pyhton 3.8), Mysql5.7, AWS(EC2, S3, RDS), Bcrypt / JWT
- **Common** : Git, Github, Slack, Trello, Postman, Notion

## 🗜 [데이터베이스 Diagram(클릭 시 해당 링크로 이동합니다)](https://dbdiagram.io/d/61b6b6908c901501c0ecdb28)

## 💻 구현 기능

### FRONTEND

#### 김상훈

> Nav
>
> - 스타일드 컴포넌트 내에 미디어쿼리를 적용하여 반응형으로 보일 수 있도록 구현
> - `<NavLink/>`를 사용하여 url에 맞는 페이지에 활성클래스 추가

> 호스트 등록 페이지
>
> - 최초 로그인시 유저의 `isHost`값은 `false`이므로 등록 페이지를 통해 호스트 등록을 진행
> - 로그인할 때 유저 데이터에서 토큰과 `isHost`값을 받아와서 `localStorage`에 저장
> - `Nav`에서 호스트메뉴 클릭시 `isHost` 삼항연산자에 따라 다른 경로로 `navigate`
> - 호스트 소개글을 적고 지금 시작하기 버튼 클릭시 `PATCH` 메소드로 백엔드 통신을 통해 유저 정보 업데이트
> - 호스트 등록을 완료하여 호스트 관리페이지로 `navigate`

> 호스트 관리 페이지
>
> - 호스트가 생성한 프로그램들에 대해 리스트로 보여주는 페이지
> - `fetch()` header에 유저 토큰을 담고 body에 프로그램정보와, 유저정보를 `get`으로 받아와 보여준다.
> - 프로그램 리스트 아이템을 컴포넌트화하여 `map` 메소드로 나열
> - `styled component` 내에 미디어쿼리를 적용하여 반응형으로 보일 수 있도록 구현

> 호스트 프로그램 생성 페이지
>
> - 호스트가 프로그램을 생성할 수 있도록 폼을 입력하는 페이지
> - 카테고리 체크 커스텀 체크박스 기능 구현
> - 상수데이터를 활용하여 모든 `input` 컴포넌트를 동적으로 사용
> - 이미지 업로드 기능과, 미리보기 기능 구현
> - `formData` 객체에 모든 입력 데이터를 append하여 데이터를 묶음
> - `fetch()` body에 `formData`를 담아 `POST` 메소드로 데이터 통신

## 🔥 프로젝트 성과
- env 환경변수 파일을 관리 할 수 있습니다.
- 소셜 로그인, 공유 기능을 구현 할 수 있습니다.
- 이미지 업로드, 미리보기 기능을 구현할 수 있습니다.
- 두번째 백엔드와의 협업 프로젝트로서 효율적으로 소통하여 개발을 진행했습니다
- formData 객체에 데이터를 담아 보낼때 백엔드와 데이터 형식을 맞춰 보았습니다.
- localStorage에 필요한 값을 저장하여 분기처리를 할 수 있습니다.
- styled-components 미디어쿼리를 정의하여 반응형 웹을 구현할 수 있습니다.
- AWS s3로 정적 웹사이트 배포를 할 수 있습니다.

## ❗ Reference

- 이 프로젝트는 [남의집](https://naamezip.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 모두는 copyright free 사이트들의 이미지들을 취합한 이미지들로 제작되었습니다.
