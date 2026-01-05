import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import "../styles/portfolio.css";
import { project } from "../data/projects";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projects = project;

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React Apps" },
    { id: "python", label: "Python Apps" },
  ];

  const filteredProjects =
    activeFilter === "all"
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
                className={`portfolio-filter ${
                  activeFilter === filter.id ? "active" : ""
                }`}
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
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="project-code-button"
                    >
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
