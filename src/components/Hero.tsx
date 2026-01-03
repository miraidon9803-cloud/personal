import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black">
      <div className="max-w-5xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm mb-6 text-gray-300">
              Web Developer & Designer
            </div>
            <h1 className="text-5xl lg:text-7xl mb-6 text-white">
              안녕하세요,
              <br />
              <span className="block mt-2">웹 개발자입니다</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              React와 TypeScript로 사용자 중심의
              <br />
              웹 애플리케이션을 만듭니다
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-colors"
              >
                프로젝트 보기
                <ArrowRight size={18} />
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-green-500 text-green-500 px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition-colors">
                이력서 다운로드
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 text-gray-400 hover:border-green-500 hover:bg-green-500 hover:text-black transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 text-gray-400 hover:border-green-500 hover:bg-green-500 hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 text-gray-400 hover:border-green-500 hover:bg-green-500 hover:text-black transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1765371513492-264506c3ad09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2NjU1OTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}