import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery',  label: 'Gallery'  },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const cls = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-150 ${isActive ? 'text-[#CCFF00]' : 'text-white/75 hover:text-white'}`

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        {/* Desktop pill */}
        <ul className="hidden md:flex items-center gap-10 pointer-events-auto">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={cls}>{label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <div className="md:hidden flex w-full justify-end pointer-events-auto">
          <button onClick={() => setOpen(o => !o)} className="text-white p-2" aria-label="menu">
            {open
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0A0A0A]/96 flex flex-col items-center justify-center gap-10">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display font-black text-4xl uppercase tracking-wider transition-colors ${isActive ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'}`
              }>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  )
}
