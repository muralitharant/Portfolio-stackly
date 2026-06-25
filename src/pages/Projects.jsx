import React from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-20 pb-16">
      <div className="px-6 md:px-10">
        <div className="w-full bg-[#111827] rounded-2xl py-10 text-center mb-8">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white">PROJECTS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </main>
  )
}
