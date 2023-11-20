## 커밋 컨벤션😉
- init: 개발 환경 초기 세팅
- feat: 새로운 기능 추가 (새로운 구현)
- fix: 버그 수정
- docs: 문서 추가, 수정, 삭제
- style: 코드 포맷팅(코드 순서 변경, 세미콜론 추가)
- design: CSS 등 사용자 UI 디자인 변경
- refactor: 코드 리팩토링
- chore: 그 외 자잘한 수정
> ex) feat/#{이슈번호}: 헤더 기능 완성<br/>
> ex) style/#{이슈번호}: css 코드 순서 변경

## CSS 속성 순서😉
1. display `-객체의 노출여부/표현방식--`
2. ( justify-content / align-items)
3. ( flex-direction / flex-wrap / flex-flow ) → flex ~로 시작하는 것들
4. list-style
5. position `-위치/좌표--`
6. float
7. clear
<br/>

1. width 
2. height `-크기/여백--`
3. padding 
4. margin
<br/>

1. border 
2. background `-윤곽/배경--`
3. color 
4. font `-글자/정렬--`
<br/>

1. text-decoration
2. text-align / vertical-align
<br/>

1. white-space
2. other text
3. content `-내용--`

## 폴더 구조😉
```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 asset
			|-- 📁 icon
				|-- logo.svg
			|-- 📁 image
				|-- logo.png
	|-- 📁 components
			|-- 📁 Common
				|-- Router.jsx // 라우팅
			|-- 📁 Main
				|-- Header.jsx
			|-- 📁 // 필요한 구조에 맞게 컴포 폴더 추가. 
				|-- // ...
	|-- 📁 pages
			|-- Main.jsx
			|-- // ..jsx
	|-- 📁 styles
			|-- style.jsx
			|-- globalStyle.js
			|-- theme.js
	|-- 📁 utils
			|-- 📁 lib // 좀더 알아보기!
				|-- api.js // 데이터 통신에 필요한 메소드 구현
				|-- index.js // axios, baseInstance 만드는 곳
	|-- 📁 types // 좀더 알아보기!
			|-- common.js
	|-- App.jsx
	|-- main.jsx
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- index.html
|-- README.md
|-- package.json
|-- vite.config.js
|-- yarn-error.log
|-- yarn.lock
```
