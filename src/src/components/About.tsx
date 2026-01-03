import { Code2, Palette, Lightbulb, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Code2 size={24} />,
      title: '클린 코드',
      description: '유지보수 가능하고 확장 가능한 코드 작성',
    },
    {
      icon: <Palette size={24} />,
      title: '디자인 감각',
      description: '사용자 경험을 고려한 인터페이스 구현',
    },
    {
      icon: <Lightbulb size={24} />,
      title: '문제 해결',
      description: '창의적이고 효율적인 솔루션 제시',
    },
    {
      icon: <Users size={24} />,
      title: '협업',
      description: '팀과의 원활한 커뮤니케이션',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                안녕하세요. 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              </p>
              <p>
                현대적인 웹 기술과 최신 프레임워크를 활용하여 직관적이고 반응성 높은
                웹 애플리케이션을 개발합니다. 코드의 품질과 성능 최적화에 관심이 많으며,
                사용자들이 편리하게 사용할 수 있는 서비스를 만드는 것을 목표로 합니다.
              </p>
              <p>
                새로운 기술을 배우고 적용하는 것에 열정을 가지고 있으며,
                항상 더 나은 코드, 더 나은 사용자 경험을 위해 노력하고 있습니다.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:shadow-lg hover:shadow-green-500/10 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-green-500 text-black rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg mb-2 text-white">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
