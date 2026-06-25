import React from 'react'
import { Link } from 'react-router-dom'
import ImgWithFallback from './ImgWithFallback.jsx'
import TechBadge from './TechBadge.jsx'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card group block bg-[#111827] rounded-xl overflow-hidden hover:ring-1 hover:ring-[#CCFF00]/40 transition-all duration-300"
    >
      {/* Banner */}
      <div className="relative h-44 overflow-hidden">
        <ImgWithFallback
          src={project.banner}
          alt={project.title}
          className="w-full h-full object-cover"
          placeholderLabel={project.title}
        />
        <div className="card-overlay absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white text-xs font-semibold tracking-widest uppercase border border-white/40 px-4 py-1.5 rounded-full">
            View Project
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-white font-bold text-base leading-snug">{project.title}</h3>
        <p className="text-[#CCFF00] text-xs font-semibold mt-0.5 mb-2">{project.type}</p>
        <p className="text-white/50 text-xs leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {project.tech.map(t => <TechBadge key={t} tech={t} />)}
        </div>
      </div>
    </Link>
  )
}
