import { X, ExternalLink, Github } from 'lucide-react';

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
    features?: string[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">{project.title}</h2>
              <p className="text-gray-500">{project.year}</p>
            </div>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-xl text-white mb-3">프로젝트 소개</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl text-white mb-3">주요 기능</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 pt-6 border-t border-zinc-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-black py-3 px-6 rounded-lg hover:bg-green-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  <span>라이브 사이트 보기</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-zinc-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  <span>GitHub 보기</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
