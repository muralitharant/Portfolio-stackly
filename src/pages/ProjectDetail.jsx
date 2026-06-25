import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ImgWithFallback from '../components/ImgWithFallback.jsx'
import TechBadge from '../components/TechBadge.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id) ?? projects[0]

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-20 pb-16">
      <div className="px-6 md:px-10">

        <Link to="/projects"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 bg-[#111827] px-4 py-2 rounded-lg transition-colors">
          ← Back
        </Link>

        {/* Top card */}
        <div className="w-full bg-[#111827] rounded-2xl overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[55%] flex-shrink-0">
              <ImgWithFallback
                src={project.banner}
                alt={project.title}
                className="w-full object-cover"
                style={{ height: '320px' }}
                placeholderLabel={project.title}
              />
            </div>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-white font-bold text-2xl md:text-3xl leading-tight">{project.title}</h1>
              <p className="text-[#CCFF00] text-sm font-semibold mt-1 mb-4">{project.type}</p>
              <p className="text-white/70 text-sm leading-relaxed">{project.longDescription}</p>
              <div className="mt-5">
                <p className="text-white font-bold text-sm mb-3">Tech Stack</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tech.map(t => <TechBadge key={t} tech={t} />)}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href={project.demo}
                  className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#b8e600] transition-colors">
                  🔗 Demo
                </a>
                <a href={project.github}
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-5 py-2.5 rounded-lg border border-white/15 hover:bg-white/15 transition-colors">
                  ⌥ GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="w-full bg-[#111827] rounded-2xl p-8 md:p-12">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-[#CCFF00] mb-6">Main Features</h2>
          <ul className="space-y-5">
            {project.features.map(f => (
              <li key={f.title}>
                <p className="text-white font-bold text-sm">• {f.title}:</p>
                <p className="text-white/60 text-sm leading-relaxed mt-1 ml-4">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  )
}
