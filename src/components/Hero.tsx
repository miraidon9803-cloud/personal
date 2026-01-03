import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/hero.css';

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-greeting">
          Web Developer & Designer
        </div>
        <h1 className="hero-title">
          안녕하세요,
          <br />
          웹 개발자입니다
        </h1>
        <p className="hero-subtitle">
          React와 TypeScript로 사용자 중심의
          <br />
          웹 애플리케이션을 만듭니다
        </p>
        
        <div className="hero-buttons">
          <button
            onClick={scrollToPortfolio}
            className="hero-primary-button"
          >
            프로젝트 보기
            <ArrowRight size={18} />
          </button>
          <button className="hero-secondary-button">
            이력서 다운로드
          </button>
        </div>
      </div>
    </section>
  );
}
