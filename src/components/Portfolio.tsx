import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import '../styles/portfolio.css';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: '쇼핑몰 플랫폼',
      category: 'react',
      description: 'React와 Firebase를 활용한 전자상거래 플랫폼. 상품 관리, 장바구니, 결제 시스템을 구현했습니다.',
      fullDescription: '현대적인 전자상거래 플랫폼으로, 사용자 친화적인 인터페이스와 안정적인 결제 시스템을 제공합니다. Firebase를 백엔드로 활용하여 실시간 데이터 동기화와 사용자 인증을 구현했으며, React와 TypeScript로 유지보수가 용이한 코드베이스를 구축했습니다.',
      image: 'https://images.unsplash.com/photo-1558234200-3efd43232f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzY2NTU4Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Firebase'],
      year: '2024',
      features: [
        '사용자 인증 및 프로필 관리',
        '상품 검색 및 필터링 기능',
        '장바구니 및 위시리스트',
        '실시간 재고 관리',
        '결제 시스템 통합',
        '주문 내역 및 배송 추적',
      ],
      liveUrl: 'https://example-shop.com',
      githubUrl: 'https://github.com/yourusername/shopping-mall',
    },
    {
      title: 'OTT 스트리밍 플랫폼',
      category: 'react',
      description: '스트리밍 서비스 웹 애플리케이션. 동영상 재생, 사용자 인증, 콘텐츠 추천 기능을 포함합니다.',
      fullDescription: '넷플릭스 스타일의 OTT 스트리밍 플랫폼으로, 사용자가 영화와 드라마를 시청할 수 있는 완전한 웹 애플리케이션입니다. 반응형 디자인으로 모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 사용자 경험을 제공합니다.',
      image: 'https://images.unsplash.com/photo-1632469806239-da8bd28710a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB2aWRlbyUyMG90dCUyMG5ldGZsaXh8ZW58MXx8fHwxNzY2NTU4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'JavaScript', 'Firebase'],
      year: '2024',
      features: [
        '동영상 스트리밍 및 재생 컨트롤',
        '카테고리별 콘텐츠 분류',
        '개인화된 추천 시스템',
        '시청 록 및 이어보기',
        '검색 및 필터 기능',
        '사용자 평점 및 리뷰 시스템',
      ],
      liveUrl: 'https://example-ott.com',
      githubUrl: 'https://github.com/yourusername/ott-platform',
    },
    {
      title: '가전인식 및 이상상태 검출을 위한 전력 모니터링 시스템',
      category: 'python',
      description: 'IoT 센서와 머신러닝을 활용한 스마트 전력 모니터링 시스템. 가전제품 인식 및 이상 전력 소비 감지 기능을 제공합니다.',
      fullDescription: 'IoT 기반 전력 모니터링 시스템으로, 실시간으로 가전제품의 전력 사용량을 모니터링하고 머신러닝 알고리즘을 통해 각 가전제품을 자동으로 인식합니다. 이상 전력 소비 패턴을 감지하여 사용자에게 알림을 제공하며, 전력 사용 통계와 절감 방안을 제안합니다.',
      image: 'https://images.unsplash.com/photo-1564164494009-3876b2d197f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG1vbml0b3JpbmclMjBlbGVjdHJpY2FsJTIwbWV0ZXJ8ZW58MXx8fHwxNzY3NDU3MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'IoT', 'Machine Learning'],
      year: '2023',
      features: [
        'IoT 센서를 통한 실시간 전력 데이터 수집',
        '머신러닝 기반 가전제품 자동 인식',
        '이상 전력 소비 패턴 감지 및 알림',
        '전력 사용 통계 및 시각화 대시보드',
        '전력 절감 방안 추천 시스템',
        '사용자별 맞춤형 리포트 생성',
      ],
      liveUrl: 'https://example-power-monitor.com',
      githubUrl: 'https://github.com/yourusername/power-monitoring',
    },
    {
      title: 'BeautifulSoup을 이용한 코로나19 정보 조회 프로그램',
      category: 'python',
      description: 'Python BeautifulSoup을 활용한 웹 크롤링 기반 실시간 코로나19 정보 수집 및 조회 시스템입니다.',
      fullDescription: 'BeautifulSoup 라이브러리를 활용하여 공공 데이터 사이트에서 실시간 코로나19 정보를 수집하고 분석하는 프로그램입니다. 지역별 확진자 수, 백신 접종 현황, 변이 바이러스 정보 등을 자동으로 크롤링하여 사용자에게 제공하며, 데이터 시각화를 통해 직관적으로 정보를 확인할 수 있습니다.',
      image: 'https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZDE5JTIwZGF0YSUyMHN0YXRpc3RpY3N8ZW58MXx8fHwxNzY3NDU3MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'BeautifulSoup', 'Web Scraping'],
      year: '2023',
      features: [
        '실시간 코로나19 데이터 웹 크롤링',
        '지역별 확진자 및 사망자 현황 조회',
        '백신 접종률 통계 수집',
        '데이터 시각화 차트 및 그래프',
        '일일 증감률 분석 및 추세 예측',
        '자동 업데이트 스케줄러',
      ],
      liveUrl: 'https://example-covid19-tracker.com',
      githubUrl: 'https://github.com/yourusername/covid19-tracker',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React Apps' },
    { id: 'python', label: 'Python Apps' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Portfolio</h2>
          <p className="portfolio-subtitle">
            제가 작업한 프로젝트들을 소개합니다
          </p>

          {/* Filters */}
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`portfolio-filter ${activeFilter === filter.id ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button 
                      onClick={() => setSelectedProject(index)}
                      className="project-view-button"
                    >
                      <ExternalLink size={16} />
                      <span>View</span>
                    </button>
                    <button 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="project-code-button"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-card-content">
                <div className="project-card-header">
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-card-description">
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </section>
  );
}
