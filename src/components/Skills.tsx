import { useEffect, useState } from "react";
import "../styles/skills.css";
import { skill } from "../data/skill";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

type Skill = {
  name: string;
  icon: string;
  description: string;
  projects: string[];
};

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const skills: Skill[] = skill;

  const toggle = (name: string) =>
    setActiveSkill((prev) => (prev === name ? null : name));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1308px)");
    const update = () => setIsMobile(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  const Card = (skill: Skill) => {
    const isActive = activeSkill === skill.name;

    return (
      <button
        type="button"
        className={`skill-card ${isActive ? "is-active" : ""}`}
        onClick={() => toggle(skill.name)}
        onMouseEnter={() => setActiveSkill(skill.name)}
        onMouseLeave={() => setActiveSkill(null)}
        onFocus={() => setActiveSkill(skill.name)}
        onBlur={() => setActiveSkill(null)}
        aria-pressed={isActive}
      >
        <div className={`skill-card-front ${isActive ? "hidden" : ""}`}>
          <div className="skill-icon-wrapper">
            <img src={skill.icon} alt={`${skill.name} 아이콘`} />
          </div>
          <h3 className="skill-title">{skill.name}</h3>
          <p className="skill-description">{skill.description}</p>
        </div>

        <div className={`skill-card-back ${isActive ? "visible" : ""}`}>
          <h3 className="skill-title">사용된 프로젝트</h3>
          <ul className="skill-projects">
            {skill.projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>
      </button>
    );
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>전문성을 갖춘 기술 스택</p>
        </div>

        {/* ✅ PC: grid / 모바일: swiper */}
        {!isMobile ? (
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name}>{Card(s)}</div>
            ))}
          </div>
        ) : (
          <Swiper
            className="skills-swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={2}
            slidesPerGroup={2}
            breakpoints={{
              1024: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 16 },
              360: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 12 },
            }}
          >
            {skills.map((s) => (
              <SwiperSlide key={s.name}>{Card(s)}</SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
