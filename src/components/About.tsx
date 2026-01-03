import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import '../styles/about.css';

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left - Image */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc0NTgwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <h2>About Me</h2>
            <p className="about-subtitle">프론트엔드 개발자</p>
            
            <div className="about-description">
              <p>
                안녕하세요. 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              </p>
              <p>
                현대적인 웹 기술과 최신 프레임워크를 활용하여 직관적이고 반응성 높은
                웹 애플리케션을 개발합니다. 코드의 품질과 성능 최적화에 관심이 많으며,
                사용자들이 편리하게 사용할 수 있는 서비스를 만드는 것을 목표로 합니다.
              </p>
              <p>
                새로운 기술을 배우고 적용하는 것에 열정을 가지고 있으며,
                항상 더 나은 코드, 더 나은 사용자 경험을 위해 노력하고 있습니다.
              </p>
            </div>

            <div className="about-info">
              <div className="about-info-item">
                <Mail size={20} />
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="about-info-item">
                <Phone size={20} />
                <span>010-1234-5678</span>
              </div>
              <div className="about-info-item">
                <Github size={20} />
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
              <div className="about-info-item">
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
