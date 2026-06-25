import React from 'react'
import ImgWithFallback from './ImgWithFallback.jsx'

export default function Footer() {
  return (
    <footer className="bg-[#111827] px-6 md:px-10 py-10 mt-0">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <ImgWithFallback
          src="/assets/logo.png"
          alt="Logo"
          className="h-16 w-auto object-contain"
          placeholderLabel="Logo"
        />
        <div className="text-right">
          <p className="font-display font-black text-2xl md:text-3xl leading-tight">
            <span className="text-white/35">Designing the </span>
            <span className="text-white italic">extraordinary</span>
          </p>
          <p className="font-display font-black text-2xl md:text-3xl leading-tight">
            <span className="text-white/35">one </span>
            <span className="text-[#CCFF00] italic">pixel</span>
            <span className="text-white/35"> at a time.</span>
          </p>
          <p className="text-white/25 text-xs mt-2">Portfolio v2.3 © 2024 Rahul</p>
        </div>
      </div>
    </footer>
  )
}
