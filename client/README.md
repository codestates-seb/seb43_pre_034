# ☁︎ 코드스테이츠 Pre Project Client
## 🛠️ 기술 스택
- JavaScript
- react(18 version)
- axios
- redux-toolkit
- styled-component
- eslint
- prettier

<br>

## 📃 폴더 구조
- `public` : 정적 파일
- `eslintrc.json` : 코드 규칙 명시
- `prettierrc.json` : 코드 작성 규칙 명시
- `package.json` : 핵심 파일
- `src` : 소스 코드
  - `components` : 컴포넌트들
  - `hooks` : 사용자 정의 훅들
  - `Layout` : 전체 레이아웃 (Header, Main, Footer, SideBar)
  - `pages` : 페이지 컴포넌트들
  - `redux` : redux-toolkit을 정의를 위한 폴더
  - `style` : styled-components 세팅 및 css를 위한 폴더

```
├─client
│  ├─public
│  ├─eslintrc.json
│  ├─prettierrc.json
│  ├─package.json
│  └─src
│      ├─components
│      ├─hooks
│      └─Layout
│          ├─Footer
│          ├─Header
│          ├─Main
│          └─SideBar
│      ├─pages
│      └─redux
│          └─slices
│      └─style
```

<br>

## 🌱 Git
### branch
> `Pull Request` 와 `Code Review` 가 이루어진 후, 병합을 진행해야 한다.
- `main` : 배포 브랜치
- `dev` : `fe` / `be` 작업 테스트 병합 브랜치
- `fe` : Front-End 개발 브랜치
- `be` : Back-End 개발 브랜치
- `fe-feat/기능명` | `fe-feat/페이지명` : 상세 개발 브랜치 

### Git 저장소 이용법 
로컬에서 작업 후 개인 branch Push
1. `git checkout 브랜치 `
2. `git add 파일/디렉토리 경로`
3. `git commit -m "message"`
4. `git push origin 브랜치" `
