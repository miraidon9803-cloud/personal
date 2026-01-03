# Portfolio Website

React + Vite + TypeScript로 제작된 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **Tailwind CSS v4** - 유틸리티 우선 CSS 프레임워크
- **Lucide React** - 아이콘 라이브러리
- **Pretendard** - 한글 웹폰트

## 디자인 특징

- 🎨 다크 테마 (검정 배경 + 흰색 글씨)
- 💚 그린 액센트 컬러
- 📱 완벽한 반응형 디자인
- ✨ 부드러운 애니메이션 및 전환 효과

## 시작하기

### 설치

\`\`\`bash
npm install
\`\`\`

### 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 `http://localhost:5173` 을 열어 확인하세요.

### 빌드

\`\`\`bash
npm run build
\`\`\`

### 빌드 미리보기

\`\`\`bash
npm run preview
\`\`\`

## 프로젝트 구조

\`\`\`
/
├── src/
│   ├── components/        # React 컴포넌트
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   │   └── globals.css    # 전역 스타일 및 Tailwind 설정
│   ├── App.tsx           # 메인 App 컴포넌트
│   └── main.tsx          # 앱 엔트리 포인트
├── index.html            # HTML 템플릿
├── vite.config.ts        # Vite 설정
├── tsconfig.json         # TypeScript 설정
└── package.json          # 프로젝트 의존성
\`\`\`

## 섹션 구성

1. **Hero** - 인트로 및 소개
2. **About** - 자기소개 및 핵심 가치
3. **Skills** - 기술 스택 및 숙련도
4. **Portfolio** - 프로젝트 포트폴리오
5. **Contact** - 연락처 정보 및 문의 폼

## 커스터마이징

### 개인 정보 수정

`src/components/` 폴더의 각 컴포넌트에서 개인 정보를 수정할 수 있습니다:

- **Hero.tsx** - 소개 문구 및 SNS 링크
- **About.tsx** - 자기소개 내용
- **Skills.tsx** - 기술 스택 및 레벨
- **Portfolio.tsx** - 프로젝트 목록
- **Contact.tsx** - 연락처 정보

### 색상 변경

`src/styles/globals.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다.

\`\`\`css
:root {
  --primary: #22c55e;  /* 그린 색상 */
  --background: #000000;  /* 배경색 */
  --foreground: #ffffff;  /* 글자색 */
}
\`\`\`

## 라이선스

MIT
