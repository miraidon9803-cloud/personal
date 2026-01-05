export const project = [
  {
    title: "쇼핑몰 플랫폼",
    category: "react",
    description:
      "React와 Firebase를 활용한 전자상거래 플랫폼으로 상품 탐색부터 결제까지의 쇼핑 흐름을 프론트엔드 중심으로 설계했습니다.",
    fullDescription:
      "실제 쇼핑몰 사용 흐름을 기준으로 설계한 전자상거래 플랫폼입니다. 상품 탐색부터 장바구니, 결제까지의 사용자 경험을 중심으로 컴포넌트 구조와 상태 관리를 설계했습니다. Firebase를 백엔드로 활용해 인증과 실시간 데이터 동기화를 구현했으며, React와 TypeScript 기반으로 확장성과 유지보수를 고려한 프론트엔드 코드베이스를 구축했습니다.",
    image:
      "https://images.unsplash.com/photo-1558234200-3efd43232f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzY2NTU4Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Firebase"],
    year: "2025",
    features: [
      {
        title: "사용자 인증 및 프로필 관리",
        desc: "Firebase Auth 기반 로그인/회원가입 및 사용자 상태 유지",
      },
      {
        title: "상품 검색 및 필터링 기능",
        desc: "카테고리 및 조건별 상품 탐색 UI 구현",
      },
      {
        title: "장바구니 및 위시리스트",
        desc: "페이지 이동 시에도 유지되는 전역 상태 관리",
      },
      {
        title: "결제 시스템 통합",
        desc: "결제 흐름 UI 설계 및 예외 상황 처리",
      },
    ],
    active: [
      {
        title: "장바구니 상태를 페이지 전환 시에도 유지해야 하는 문제",
        text: "전역 상태 관리를 적용해 사용자 경험 개선",
      },
      {
        title: "실시간 데이터 구독으로 인한 불필요한 렌더링 문제",
        text: "필요한 데이터만 구독하도록 구조 개선",
      },
    ],

    liveUrl: "https://jackson-chameleon.vercel.app/",
    githubUrl: "https://github.com/yourusername/shopping-mall",
  },
  {
    title: "OTT 스트리밍 플랫폼",
    category: "react",
    description:
      "스트리밍 서비스 웹 애플리케이션. 동영상 재생, 사용자 인증, 콘텐츠 추천 기능을 포함합니다.",
    fullDescription:
      "넷플릭스 스타일의 OTT 스트리밍 플랫폼으로, 사용자가 영화와 드라마를 시청할 수 있는 완전한 웹 애플리케이션입니다. 반응형 디자인으로 모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 사용자 경험을 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1632469806239-da8bd28710a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB2aWRlbyUyMG90dCUyMG5ldGZsaXh8ZW58MXx8fHwxNzY2NTU4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "JavaScript", "Firebase"],
    year: "2024",
    features: [
      {
        title: "동영상 스트리밍 및 재생 컨트롤",
        desc: "HTML5 비디오 플레이어 통합",
      },
      {
        title: "카테고리별 콘텐츠 분류",
        desc: "장르별 콘텐츠 탐색 기능",
      },
      {
        title: "개인화된 추천 시스템",
        desc: "사용자 시청 이력 기반 추천",
      },
      {
        title: "시청 록 및 이어보기",
        desc: "마지막 시청 시점부터 재생",
      },
      {
        title: "검색 및 필터 기능",
        desc: "제목, 배우, 장르 기반 검색",
      },
      {
        title: "사용자 평점 및 리뷰 시스템",
        desc: "콘텐츠 평가 및 리뷰 작성",
      },
    ],
    liveUrl: "https://example-ott.com",
    githubUrl: "https://github.com/yourusername/ott-platform",
  },
  {
    title: "가전인식 및 이상상태 검출을 위한 전력 모니터링 시스템",
    category: "python",
    description:
      "IoT 센서와 머신러닝을 활용한 스마트 전력 모니터링 시스템. 가전제품 인식 및 이상 전력 소비 감지 기능을 제공합니다.",
    fullDescription:
      "IoT 기반 전력 모니터링 시스템으로, 실시간으로 가전제품의 전력 사용량을 모니터링하고 머신러닝 알고리즘을 통해 각 가전제품을 자동으로 인식합니다. 이상 전력 소비 패턴을 감지하여 사용자에게 알림을 제공하며, 전력 사용 통계와 절감 방안을 제안합니다.",
    image:
      "https://images.unsplash.com/photo-1564164494009-3876b2d197f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG1vbml0b3JpbmclMjBlbGVjdHJpY2FsJTIwbWV0ZXJ8ZW58MXx8fHwxNzY3NDU3MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "IoT", "Machine Learning"],
    year: "2023",
    features: [
      {
        title: "IoT 센서를 통한 실시간 전력 데이터 수집",
        desc: "센서에서 데이터 수신 및 처리",
      },
      {
        title: "머신러닝 기반 가전제품 자동 인식",
        desc: "훈련된 모델을 통한 기기 식별",
      },
      {
        title: "이상 전력 소비 패턴 감지 및 알림",
        desc: "비정상 사용량 자동 감지",
      },
      {
        title: "전력 사용 통계 및 시각화 대시보드",
        desc: "그래프 및 차트로 데이터 표현",
      },
      {
        title: "전력 절감 방안 추천 시스템",
        desc: "사용 패턴 분석 기반 절감 제안",
      },
      {
        title: "사용자별 맞춤형 리포트 생성",
        desc: "월별 상세 전력 사용 보고서",
      },
    ],
    liveUrl: "https://example-power-monitor.com",
    githubUrl: "https://github.com/yourusername/power-monitoring",
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
    liveUrl: "https://example-covid19-tracker.com",
    githubUrl: "https://github.com/yourusername/covid19-tracker",
  },
];
