import { Mail, Phone, Github } from "lucide-react";
import "../styles/about.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left - Image */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src="/images/personal.jpg" alt="Profile" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <h2>About Me</h2>
            <p className="about-subtitle">프론트엔드 개발자</p>

            <div className="about-description">
              <p>
                안녕하세요. 사용자 경험을 최우선으로 고민하는 프론트엔드
                개발자입니다.
              </p>
              <p>
                현대적인 웹 기술과 최신 프레임워크를 기반으로 직관적이고 반응성
                높은 웹 애플리케이션을 개발하고 있습니다.
              </p>
              <p>
                코드의 가독성과 유지보수성을 중요하게 생각하며, 성능 최적화를
                통해 사용자가 불편함 없이 서비스를 이용할 수 있도록 노력합니다.
                새로운 기술을 배우고 실제 프로젝트에 적용하는 과정에서 성장하는
                것을 즐기며, 더 나은 코드와 더 나은 사용자 경험을 만들기 위해
                꾸준히 고민합니다.
              </p>
            </div>

            <div className="about-info">
              <div className="about-info-item">
                <Mail size={20} />
                <a href="mailto:your.email@example.com">
                  miraidon9803@gmail.com
                </a>
              </div>
              <div className="about-info-item">
                <Phone size={20} />
                <span>010-3437-0351</span>
              </div>
              <div className="about-info-item">
                <Github size={20} />
                <a
                  href="https://github.com/miraidon9803-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/miraidon9803-cloud
                </a>
              </div>
              {/* <div className="about-info-item">
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourusername
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
