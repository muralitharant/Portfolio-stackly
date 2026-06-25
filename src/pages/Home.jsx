import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import ImgWithFallback from '../components/ImgWithFallback.jsx'

const BG_ROWS = ['DESIGNER UI', 'DEVELOPER', 'FRONT END']

export default function Home() {
  const recent = projects.slice(0, 3)

  return (
    <main className="bg-[#0A0A0A] min-h-screen">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden">
          {BG_ROWS.map((text, i) => (
            <div key={i} className="overflow-hidden">
              <div className={`inline-flex whitespace-nowrap ${i % 2 === 0 ? 'marquee-fwd' : 'marquee-rev'}`}>
                {Array.from({ length: 8 }).map((_, j) => (
                  <span key={j} className="font-display font-black uppercase px-6 inline-block"
                    style={{ fontSize: 'clamp(48px, 9.5vw, 115px)', color: 'rgba(255,255,255,0.055)', lineHeight: 1.05 }}>
                    {text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 fade-up">
          <p className="font-display font-semibold text-base md:text-lg tracking-[0.25em] text-white/65 uppercase mb-1">
            Hey There I'm
          </p>
          <h1 className="font-display font-black uppercase leading-none"
            style={{ fontSize: 'clamp(88px, 21vw, 210px)', color: '#CCFF00', lineHeight: 0.88 }}>
            RAHUL
          </h1>
          <p className="text-white/55 text-sm mt-5 tracking-wide leading-relaxed">
            Currently Studying Computer Science<br />and Engineering
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:ring-1 hover:ring-[#CCFF00]/60 transition-all overflow-hidden">
              <ImgWithFallback src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 object-contain" placeholderLabel="in" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:ring-1 hover:ring-[#CCFF00]/60 transition-all overflow-hidden">
              <ImgWithFallback src="/assets/github.png" alt="GitHub" className="w-6 h-6 object-contain" placeholderLabel="gh" />
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section className="px-6 md:px-10 py-10">
        <div className="w-full bg-[#CCFF00] rounded-2xl px-10 md:px-16 py-10">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-black text-center mb-6 tracking-tight">
            About
          </h2>
          <p className="text-black/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Hi there! I'm Rahul, a third-year Computer Science student at SRM Institute with a passion for crafting
            user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with
            expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration
            and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and
            exploring music. Let's connect and bring your digital visions to life
          </p>
          <div className="mt-6 flex justify-end max-w-3xl mx-auto">
            <Link to="/about"
              className="inline-flex items-center gap-1 bg-[#111] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-black transition-colors">
              More...
            </Link>
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ──────────────────── */}
      <section className="px-6 md:px-10 py-6 pb-14">
        <div className="w-full">
          <div className="flex items-center justify-between mb-7">
            <h2 className="font-display font-black text-2xl md:text-3xl text-white tracking-wide">
              Recent Projects
            </h2>
            <Link to="/projects" className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-1">
              See all <span className="text-[#CCFF00] ml-1">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recent.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────── */}
      <section className="px-6 md:px-10 pb-14">
        <div className="w-full bg-[#CCFF00] rounded-2xl px-10 md:px-14 py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-black leading-none mb-3">
              Get in Touch
            </h2>
            <p className="text-black/70 text-sm leading-relaxed max-w-xs">
              If you are interested in my work or want to provide feedback about this website,
              I am open to exchanging ideas .
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-2">
              <span className="text-black/60 text-xs font-medium mr-1">Follow me on</span>
              {['◎','▶','Bē','in','⌥'].map((icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center text-black text-xs font-bold hover:bg-black/25 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-black/75 transition-colors">
              Contact Me ✈
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
