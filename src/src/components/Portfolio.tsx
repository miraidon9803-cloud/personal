import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: '쇼핑몰 플랫폼',
      category: 'web',
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
      category: 'web',
      description: '스트리밍 서비스 웹 애플리케이션. 동영상 재생, 사용자 인증, 콘텐츠 추천 기능을 포함합니다.',
      fullDescription: '넷플릭스 스타일의 OTT 스트리밍 플랫폼으로, 사용자가 영화와 드라마를 시청할 수 있는 완전한 웹 애플리케이션입니다. 반응형 디자인으로 모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 사용자 경험을 제공합니다.',
      image: 'https://images.unsplash.com/photo-1632469806239-da8bd28710a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB2aWRlbyUyMG90dCUyMG5ldGZsaXh8ZW58MXx8fHwxNzY2NTU4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'JavaScript', 'Firebase'],
      year: '2024',
      features: [
        '동영상 스트리밍 및 재생 컨트롤',
        '카테고리별 콘텐츠 분류',
        '개인화된 추천 시스템',
        '시청 기록 및 이어보기',
        '검색 및 필터 기능',
        '사용자 평점 및 리뷰 시스템',
      ],
      liveUrl: 'https://example-ott.com',
      githubUrl: 'https://github.com/yourusername/ott-platform',
    },
    {
      title: '치킨 주문 시스템',
      category: 'web',
      description: '온라인 치킨 주문 시스템. 메뉴 선택, 장바구니, 주문 관리 기능을 제공하는 반응형 웹사이트입니다.',
      fullDescription: '치킨 전문점을 위한 온라인 주문 시스템으로, 고객이 쉽고 빠르게 주문할 수 있는 직관적인 UI/UX를 제공합니다. 관리자 페이지를 통해 메뉴 관리와 주문 처리가 가능하며, 실시간 주문 알림 기능을 포함합니다.',
      image: 'https://images.unsplash.com/photo-1694853651800-3e9b4aa96a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBmb29kfGVufDF8fHx8MTc2NjU1ODI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Firebase'],
      year: '2024',
      features: [
        '메뉴 카테고리 및 상세 정보',
        '사이드 메뉴 및 옵션 선택',
        '장바구니 및 쿠폰 적용',
        '배달/포장 선택 기능',
        '실시간 주문 현황 확인',
        '관리자 대시보드',
      ],
      liveUrl: 'https://example-chicken.com',
      githubUrl: 'https://github.com/yourusername/chicken-order',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-white">Portfolio</h2>
          <p className="text-gray-400 text-lg mb-8">
            제가 작업한 프로젝트들을 소개합니다
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-green-500 text-black'
                    : 'bg-zinc-900 border border-zinc-800 text-gray-300 hover:border-green-500 hover:text-green-500'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button 
                      onClick={() => setSelectedProject(index)}
                      className="flex-1 bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-green-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View</span>
                    </button>
                    <button 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1 bg-zinc-800 text-white py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-full text-xs"
                    >
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