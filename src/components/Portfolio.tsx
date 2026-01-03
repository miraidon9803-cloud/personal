import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: '쇼핑몰 플랫폼',
      category: 'web',
      description: 'React와 Firebase를 활용한 전자상거래 플랫폼. 상품 관리, 장바구니, 결제 시스템을 구현했습니다.',
      image: 'https://images.unsplash.com/photo-1558234200-3efd43232f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzY2NTU4Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Firebase'],
      year: '2024',
    },
    {
      title: 'OTT 스트리밍 플랫폼',
      category: 'web',
      description: '스트리밍 서비스 웹 애플리케이션. 동영상 재생, 사용자 인증, 콘텐츠 추천 기능을 포함합니다.',
      image: 'https://images.unsplash.com/photo-1632469806239-da8bd28710a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB2aWRlbyUyMG90dCUyMG5ldGZsaXh8ZW58MXx8fHwxNzY2NTU4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'JavaScript', 'Firebase'],
      year: '2024',
    },
    {
      title: '치킨 주문 시스템',
      category: 'web',
      description: '온라인 치킨 주문 시스템. 메뉴 선택, 장바구니, 주문 관리 기능을 제공하는 반응형 웹사이트입니다.',
      image: 'https://images.unsplash.com/photo-1694853651800-3e9b4aa96a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBmb29kfGVufDF8fHx8MTc2NjU1ODI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Firebase'],
      year: '2024',
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
                    <button className="flex-1 bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-green-400 transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">View</span>
                    </button>
                    <button className="flex-1 bg-zinc-800 text-white py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
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
    </section>
  );
}