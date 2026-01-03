import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'your.email@example.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+82 10-1234-5678',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Seoul, South Korea',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-white">Contact</h2>
          <p className="text-gray-400 text-lg">
            프로젝트 문의나 협업 제안을 기다립니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6 text-white">연락처 정보</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-black rounded-lg flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8">
              <h4 className="text-xl mb-4 text-white">함께 일하고 싶으신가요?</h4>
              <p className="text-gray-400 mb-6">
                새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶습니다.
                언제든 연락 주세요!
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors text-sm"
                >
                  이력서 다운로드
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl mb-6 text-white">메시지 보내기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-none"
                  placeholder="프로젝트에 대해 자세히 알려주세요..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-black py-3 px-6 rounded-lg hover:bg-green-400 transition-colors inline-flex items-center justify-center gap-2"
              >
                메시지 전송
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-zinc-800 text-center text-gray-500">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
