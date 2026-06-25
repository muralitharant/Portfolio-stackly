import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3500)
    }, 800)
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-20 pb-16">
      <div className="px-6 md:px-10">

        {/* Header */}
        <div className="w-full bg-[#111827] rounded-2xl py-10 text-center mb-8">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white">CONTACT</h1>
        </div>

        {/* Lime card - full width */}
        <div className="w-full bg-[#CCFF00] rounded-2xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-black leading-tight mb-4">
                Get in Touch
              </h2>
              <p className="text-black/70 text-sm leading-relaxed">
                If you are interested in my work or want to provide feedback about this website,
                I am open to exchanging ideas .
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
              <div>
                <label className="block text-black font-semibold text-sm mb-1.5">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  className="w-full bg-white rounded-lg px-4 py-3 text-black text-sm outline-none focus:ring-2 focus:ring-black/25 transition-all" />
              </div>
              <div>
                <label className="block text-black font-semibold text-sm mb-1.5">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required
                  className="w-full bg-white rounded-lg px-4 py-3 text-black text-sm outline-none focus:ring-2 focus:ring-black/25 transition-all" />
              </div>
              <div>
                <label className="block text-black font-semibold text-sm mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                  className="w-full bg-white rounded-lg px-4 py-3 text-black text-sm outline-none focus:ring-2 focus:ring-black/25 transition-all resize-none" />
              </div>
              <button type="submit" disabled={status === 'loading'}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all disabled:opacity-60 ${
                  status === 'sent' ? 'bg-green-600 text-white' : 'bg-[#111] text-white hover:bg-black'
                }`}>
                {status === 'loading' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  )
}
