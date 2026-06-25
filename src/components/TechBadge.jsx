import React from 'react'
import { techIcons } from '../data/projects.js'
import ImgWithFallback from './ImgWithFallback.jsx'

export default function TechBadge({ tech }) {
  const t = techIcons[tech]
  if (!t) return null
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: t.bg, border: '2px solid rgba(255,255,255,0.12)' }}
      title={t.label}
    >
      <ImgWithFallback src={t.src} alt={t.label} className="w-5 h-5 object-contain" placeholderLabel={t.label.slice(0,2)} />
    </div>
  )
}
