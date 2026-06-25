import React, { useState } from 'react'
import { galleryItems } from '../data/projects.js'
import ImgWithFallback from '../components/ImgWithFallback.jsx'

const FILTERS = ['All', 'illustration', 'sports', 'anime', 'poster', '3d', 'music', 'art']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.type === filter)

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-20 pb-16">
      <div className="px-6 md:px-10">

        <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-white mb-4">Gallery</h1>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`capitalize text-xs font-semibold px-4 py-1.5 rounded-full transition-colors ${
                filter === f
                  ? 'bg-[#CCFF00] text-black'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-white/25'
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* CSS masonry - full width with tight gap */}
        <div style={{ columns: '5 180px', columnGap: '8px' }}>
          {filtered.map(item => <GalleryItem key={item.id} item={item} />)}
        </div>

      </div>
    </main>
  )
}

function GalleryItem({ item }) {
  return (
    <div
      className="group relative rounded-lg overflow-hidden mb-2 cursor-pointer break-inside-avoid"
      style={{ height: item.tall ? 230 : 145 }}
    >
      <ImgWithFallback
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover"
        placeholderLabel={item.label}
      />
      <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
        <p className="text-white text-xs font-medium">{item.label}</p>
      </div>
      <div className="absolute bottom-2 right-2 opacity-30 pointer-events-none">
        <svg width="16" height="11" viewBox="0 0 80 55" fill="none">
          <polyline points="42,4 28,27 42,51" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="58,4 44,27 58,51" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="74,4 60,27 74,51" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
