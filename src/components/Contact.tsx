import { Mail, Phone, Github, Linkedin } from "lucide-react";
import "../styles/contact.css";

export function Contact() {
  const contacts = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "miraidon9803@gmail.com",
      action: "mailto:miraidon9803@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "010-3437-0351",
      action: "tel:010-3437-0351",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/miraidon9803-cloud",
      action: "https://github.com/miraidon9803-cloud",
    },
    {
      icon: <Linkedin size={24} />,
      title: "준비중입니다",
      value: "",
      action: "",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact</h2>
          <p>프로젝트 문의나 협업 제안을 기다립니다</p>
        </div>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-wrapper">{contact.icon}</div>
              <h3 className="contact-title">{contact.title}</h3>
              <p className="contact-value">{contact.value}</p>
              <a href={contact.action} className="contact-button">
                연락하기
              </a>
            </div>
          ))}
        </div>

        <div className="contact-footer">
          <p>© 2026 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
