import { X, ExternalLink, CheckCircle, Github } from "lucide-react";
import "../styles/project-modal.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    year: string;
    fullDescription?: string;
    liveUrl?: string;
    githubUrl?: string;
    features?: { title: string; desc: string }[];
    active?: { title: string; text: string }[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="modal-close-button">
            <X size={20} />
          </button>

          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />

          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-content">
          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">프로젝트 소개</h3>
            <p className="modal-description">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Features */}

          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">주요 기능</h3>
              <div className="modal-features">
                {project.features.map((feature, index) => (
                  <div key={index} className="modal-feature">
                    <CheckCircle size={16} />
                    <div className="feature-content">
                      <p className="feature-title">{feature.title}</p>
                      <p className="feature-desc">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* active */}
          {project.active && project.active.length > 0 && (
            <div className="modal-active-section">
              <h3 className="modal-active-title">기술적 고민 & 해결</h3>
              <div className="modal-actives">
                {project.active.map((active, index) => (
                  <div key={index} className="modal-active">
                    <CheckCircle size={16} />
                    <div className="active-content">
                      <p className="active-title">{active.title}</p>
                      <p className="active-text">{active.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="modal-section">
            <div className="modal-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-primary-link"
                >
                  <ExternalLink size={20} />
                  <span>라이브 사이트</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-secondary-link"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
