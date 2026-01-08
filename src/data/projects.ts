export const project = [
  {
    title: "쇼핑몰 플랫폼",
    category: "react",
    description:
      "실제 구매 흐름과 결제 로직을 중심으로 구현한 이커머스 프론트엔드 프로젝트",
    fullDescription:
      "실제 쇼핑몰 사용 흐름을 기준으로 설계한 전자상거래 플랫폼입니다. 상품 탐색부터 장바구니, 결제까지의 사용자 경험을 중심으로 컴포넌트 구조와 전역 상태 관리를 설계했습니다. React 기반으로 확장성과 유지보수를 고려한 구조를 구현했습니다.",
    image:
      "https://images.unsplash.com/photo-1558234200-3efd43232f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzY2NTU4Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "JavaScript", "Firebase"],
    year: "2025",
    features: [
      {
        title: "로그인·회원가입 및 소셜 인증",
        desc: "이메일·Google·Kakao 로그인과 회원가입 플로우 구현",
      },
      {
        title: "약관 동의·주소 검색",
        desc: "필수 약관 검증 및 Daum Postcode 기반 주소 입력",
      },
      {
        title: "마이페이지 사용자 관리",
        desc: "회원 정보 수정, 배송지 관리, 로그아웃 기능 구현",
      },
      {
        title: "장바구니·주문·결제 시스템",
        desc: "결제 금액 계산, 쿠폰·포인트 적용 결제 플로우 구현",
      },
      {
        title: "상품 검색 및 카테고리",
        desc: "카테고리·서브카테고리 기반 상품 목록 UI 구현",
      },
      {
        title: "전역 상태 관리",
        desc: "Zustand 기반 인증·상품·결제 상태 관리",
      },
    ],
    active: [
      {
        title: "페이지 이동 시 장바구니·결제 상태 유지 문제",
        text: "전역 상태 관리 적용으로 사용자 흐름 중 상태 유지",
      },
      {
        title: "결제 금액 계산 로직이 복잡해지는 문제",
        text: "계산 로직을 스토어 selector로 분리해 UI 단순화",
      },
      {
        title: "포인트·쿠폰 입력 시 예외 처리 문제",
        text: "입력 검증 함수로 잘못된 값 차단 및 상태 안정화",
      },
      {
        title: "카테고리 변경 시 UI가 갱신되지 않는 문제",
        text: "key 기반 리마운트로 카테고리 변경 시 화면 초기화",
      },
    ],

    liveUrl: "https://jackson-chameleon.vercel.app/",
    githubUrl: "https://github.com/miraidon9803-cloud/Jackson-among",
  },
  {
    title: "OTT 스트리밍 플랫폼",
    category: "react",
    description:
      "콘텐츠 탐색부터 재생까지 사용자 경험을 고려해 구현한 OTT 플랫폼 클론 프로젝트",
    fullDescription:
      "실제 OTT 서비스 흐름을 참고해 구현한 콘텐츠 스트리밍 플랫폼입니다.영화·TV 콘텐츠 탐색, 상세 정보 조회, 재생, 사용자 인터랙션까지 서비스 전반의 UX를 고려해 화면 구조와 상태 관리를 설계했습니다.전역 상태 관리와 컴포넌트 분리를 통해 확장 가능한 프론트엔드 구조를 구현했습니다.",
    image:
      "https://images.unsplash.com/photo-1632469806239-da8bd28710a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB2aWRlbyUyMG90dCUyMG5ldGZsaXh8ZW58MXx8fHwxNzY2NTU4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "JavaScript", "TypeScript", "Firebase"],
    year: "2025",
    features: [
      {
        title: "로그인·프로필 관리",
        desc: "Firebase Auth 기반 인증 및 멀티 프로필 관리",
      },
      {
        title: "영화·TV 콘텐츠 상세",
        desc: "영화·시리즈 상세 정보, 트레일러, 출연진 제공",
      },
      {
        title: "영상 재생 및 사용자 액션",
        desc: "트레일러 재생, 시청 기록, 좋아요, 다운로드 기능",
      },
      {
        title: "전역 상태 관리",
        desc: "Zustand 기반 콘텐츠·UI·사용자 상태 관리",
      },
      {
        title: "마이페이지 및 알림",
        desc: "프로필 설정, 멤버십 관리, 공개 예정작 알림",
      },
    ],
    active: [
      {
        title: "로그인·온보딩·프로필 상태에 따른 접근 제어 문제",
        text: "Auth / Guest / Profile Gate로 라우팅 흐름을 분리해 진입 경로를 일관화",
      },
      {
        title: "트레일러 데이터가 일정하지 않은 문제",
        text: "우선순위 기반 fallback 로직으로 항상 재생 가능한 영상 선택",
      },
      {
        title: "시즌·에피소드 구조에서 기본 시즌 판단 문제",
        text: "season_number 조건 분기 처리로 정상 시즌 자동 선택",
      },
      {
        title: "탭 전환 시 불필요한 API 재호출 문제",
        text: "활성 탭 조건과 마지막 요청 id 비교로 중복 fetch 방지",
      },
    ],
    liveUrl: "https://new-netflix-one.vercel.app/",
    githubUrl: "https://github.com/miraidon9803-cloud/new-netflix",
  },
  {
    title: "가전인식 및 이상상태 검출을 위한 전력 모니터링 시스템",
    category: "python",
    description:
      "IoT 센서와 머신러닝을 활용한 스마트 전력 모니터링 시스템. 가전제품 인식 및 이상 전력 소비 감지 기능을 제공합니다.",
    fullDescription:
      "IoT 기반 전력 모니터링 시스템으로, 가전제품의 전력 사용 데이터를 실시간으로 수집·저장하고 웹에서 시각화합니다. 수집된 데이터를 바탕으로 전력 사용 패턴을 분석해 이상 징후를 감지하고, 사용자에게 알림과 함께 절감 방향을 제안합니다.",
    image:
      "https://images.unsplash.com/photo-1564164494009-3876b2d197f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG1vbml0b3JpbmclMjBlbGVjdHJpY2FsJTIwbWV0ZXJ8ZW58MXx8fHwxNzY3NDU3MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "IoT", "Machine Learning"],
    year: "2022",
    features: [
      {
        title: "서버 API 구축 및 DB 연동",
        desc: "Flask 기반 API 구현 MySQL에서 최신 측정값을 조회해 JSON 형태로 실시간 제공",
      },
      {
        title: "전력 통계/시각화 대시보드",
        desc: "전력 사용 흐름을 그래프·차트로 표현",
      },
      {
        title: "실시간 전력 데이터 수집·처리",
        desc: "IoT 센서 데이터 수신 및 전처리, 측정값(전류/전압 등) 관리",
      },
    ],
    liveUrl:
      "https://drive.google.com/drive/folders/1BGdaSvOjK8LM0akHyBw8NbbdYmQGhG6y",
    githubUrl: "https://github.com/miraidon9803-cloud/capstone",
  },
  {
    title: "BeautifulSoup을 이용한 코로나19 정보 조회 프로그램",
    category: "python",
    description:
      "Python BeautifulSoup을 활용한 웹 크롤링 기반 실시간 코로나19 정보 수집 및 조회 시스템입니다.",
    fullDescription:
      "BeautifulSoup 라이브러리를 활용하여 공공 데이터 사이트에서 실시간 코로나19 정보를 수집하고 분석하는 프로그램입니다. 지역별 확진자 수, 백신 접종 현황, 변이 바이러스 정보 등을 자동으로 크롤링하여 사용자에게 제공하며, 데이터 시각화를 통해 직관적으로 정보를 확인할 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZDE5JTIwZGF0YSUyMHN0YXRpc3RpY3N8ZW58MXx8fHwxNzY3NDU3MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "BeautifulSoup", "Web Scraping"],
    year: "2023",
    features: [
      {
        title: "실시간 코로나19 데이터 웹 크롤링",
        desc: "공공 데이터 사이트에서 자동 수집",
      },
      {
        title: "지역별 확진자 및 사망자 현황 조회",
        desc: "광역시도별 상세 통계",
      },
      {
        title: "백신 접종률 통계 수집",
        desc: "접종 현황 및 완료율 추적",
      },
      {
        title: "데이터 시각화 차트 및 그래프",
        desc: "Matplotlib를 통한 시각화",
      },
      {
        title: "일일 증감률 분석 및 추세 예측",
        desc: "시계열 분석 및 트렌드 파악",
      },
      {
        title: "자동 업데이트 스케줄러",
        desc: "정기적 데이터 갱신 자동화",
      },
    ],
    liveUrl:
      "https://drive.google.com/drive/folders/1LnvjvMgHO28n1mJOWagKc0fEZ6hDEJyw",
    githubUrl: "https://github.com/yourusername/covid19-tracker",
  },
];
