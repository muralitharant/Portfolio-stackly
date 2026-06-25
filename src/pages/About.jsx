import React from 'react'
import ImgWithFallback from '../components/ImgWithFallback.jsx'

const skills = [
  { name: 'Node.js',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'CSS3',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'C++',          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Premiere Pro', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg' },
  { name: 'React',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Figma',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'MySQL',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Qt',           src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' },
]
const socials = ['◎','▶','Bē','in','⌥']

export default function About() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-20 pb-16">
      <div className="px-6 md:px-10">

        {/* Header */}
        <div className="w-full bg-[#111827] rounded-2xl py-10 text-center mb-6">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white">ABOUT</h1>
        </div>

        {/* Bio card */}
        <div className="w-full bg-[#111827] rounded-2xl p-8 md:p-12 mb-6">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <ImgWithFallback
                src="/assets/profile.png"
                alt="Rahul"
                className="w-80 md:w-70 rounded-xl object-cover"
                style={{ height: '280px' }}
                placeholderLabel="Rahul's Photo"
              />
            </div>
            <div className="flex-1 text-sm md:text-base leading-relaxed text-white/80 space-y-3">
              <p>
                I'm a Computer Science student at{' '}
                <span className="text-[#CCFF00]">SRM Institute of Science and Technology</span>. My passion
                lies in building user-friendly solutions that enhance overall user experiences. I am currently
                focused on{' '}
                <span className="text-[#CCFF00]">React Native, Expo, Firebase, and React</span>, leveraging
                these technologies to create responsive and functional applications. One of my ongoing projects
                is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs.
                The app will soon be published on the{' '}
                <span className="text-[#CCFF00]">Play Store and App Store</span>, and it incorporates AI-driven
                features to guide users through the adoption process. In addition to app development, I've led
                the design and development of platforms like the GitHub Community SRM website. I've also organised
                and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design.
                I thrive in{' '}
                <span className="text-[#CCFF00]">Agile Scrum environments</span> and believe collaboration and
                teamwork are essential to delivering successful projects. So, whether you're{' '}
                <span className="text-[#CCFF00]">
                  looking for a dedicated developer, a creative designer, or a collaborative team member
                </span>
                , I'm here to help bring ideas to life. Let's connect and create innovative solutions together!
              </p>
              <div className="pt-2">
                <a href="#"
                  className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#b8e600] transition-colors">
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills + Socials */}
        <div className="w-full bg-[#111827] rounded-2xl px-8 md:px-12 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-base mb-4">Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map(s => (
                <div key={s.name} title={s.name}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#CCFF00]/40 transition-colors">
                  <ImgWithFallback src={s.src} alt={s.name} className="w-6 h-6 object-contain" placeholderLabel={s.name.slice(0,2)} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((icon, i) => (
              <a key={i} href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 font-bold text-sm hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
