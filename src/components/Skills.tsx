import { useState } from 'react';
import '../styles/skills.css';

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: '컴포넌트 기반 UI 개발',
      projects: ['쇼핑몰 플랫폼', 'OTT 스트리밍 플랫폼'],
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: '모던 JavaScript ES6+',
      projects: ['OTT 스트리밍 플랫폼'],
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: '타입 안정성을 갖춘 개발',
      projects: ['쇼핑몰 플랫폼'],
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: '데이터 처리 및 백엔드 개발',
      projects: ['전력 모니터링 시스템', '코로나19 정보 조회'],
    },
    {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      description: '백엔드 서비스 및 데이터베이스',
      projects: ['쇼핑몰 플랫폼', 'OTT 스트리밍 플랫폼'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>전문성을 갖춘 기술 스택</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`skill-card-front ${hoveredSkill === skill.name ? 'hidden' : ''}`}>
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
              
              <div className={`skill-card-back ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                <h3 className="skill-title">사용된 프로젝트</h3>
                <ul className="skill-projects">
                  {skill.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}