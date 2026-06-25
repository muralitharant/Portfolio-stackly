// All banner images are in /public/assets/ – served at /assets/...
export const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    type: 'Frontend',
    banner: '/assets/banner-portfolio.png',   // image 7.png – Portfolio homepage screenshot
    description: 'Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.',
    longDescription: 'This project is a portfolio website developed using React.js. The website is designed to showcase the user\'s skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'Responsive Design', desc: 'Designed to be responsive, ensuring a seamless experience across various devices and screen sizes.' },
      { title: 'Modern UI/UX', desc: 'Features a modern and clean user interface with a consistent colour scheme and typography throughout.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    type: 'Full Stack',
    banner: '/assets/banner-weather.png',     // Weather-banner-1.png
    description: 'Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.',
    longDescription: 'A full-stack weather application that uses a NodeJS/Express backend to fetch real-time weather data and presents it through a React/Handlebars frontend.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'Real-time Data', desc: 'Fetches live weather data from external APIs and updates the UI instantly.' },
      { title: 'Location Search', desc: 'Search for any city worldwide and get instant weather updates.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 'cred-clone',
    title: 'Cred Clone',
    type: 'Frontend',
    banner: '/assets/banner-cred.png',        // 2560x1600-2.png – CRED UI
    description: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    longDescription: 'A faithful recreation of CRED\'s landing page built with ReactJS, demonstrating pixel-perfect implementation and attention to UI/UX detail.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'Pixel Perfect', desc: 'Matches the original design with precise colours, typography and spacing.' },
      { title: 'Responsive Layout', desc: 'Adapts seamlessly across all screen sizes from mobile to desktop.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 'user-auth',
    title: 'User Authentication syst....',
    type: 'Full Stack',
    banner: '/assets/banner-auth.png',        // 2560x1600-7.png – Metrohm Login UI
    description: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    longDescription: 'A complete user authentication system with login, registration, password reset, and secure session management using JWT tokens.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'Secure Auth', desc: 'JWT-based authentication with bcrypt password hashing for maximum security.' },
      { title: 'Session Management', desc: 'Persistent sessions with refresh token rotation and automatic expiry.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    type: 'Frontend',
    banner: '/assets/banner-todo.png',        // 2560x1600-8.png – orange dark WIP screen
    description: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    longDescription: 'A clean and functional todo list application with full CRUD operations, filters, and local persistence.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'CRUD Operations', desc: 'Create, read, update and delete tasks effortlessly.' },
      { title: 'Smart Filters', desc: 'Filter tasks by status: all, active, or completed.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 'qr-scanner',
    title: 'QR Scanner',
    type: 'Frontend',
    banner: '/assets/banner-qr.png',          // 2560x1600-9.png – QR Code Generator UI
    description: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    longDescription: 'A browser-based QR code scanner that uses the device camera via WebRTC with instant real-time decoding and result display.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'Camera Access', desc: 'Uses WebRTC to access the device camera for real-time scanning.' },
      { title: 'Instant Decode', desc: 'Decodes QR codes in real-time without any server-side calls.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 'playlist-generator',
    title: 'Playlist Generator',
    type: 'Frontend',
    banner: '/assets/banner-playlist.png',    // 2560x1600-11.png – Spotify Playlist Generator
    description: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    longDescription: 'An AI-powered playlist generator that creates personalised playlists based on your mood and preferences, with Spotify integration.',
    tech: ['react', 'js', 'css', 'figma'],
    features: [
      { title: 'Mood-based Playlists', desc: 'Select your mood and get a perfectly curated playlist instantly.' },
      { title: 'Spotify Integration', desc: 'Connect with Spotify to save and play generated playlists directly.' },
    ],
    demo: '#', github: '#',
  },
]

// Tech stack badge data — using devicon CDN SVGs
export const techIcons = {
  react: { label: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          bg: '#0D2137' },
  js:    { label: 'JS',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', bg: '#1A1700' },
  css:   { label: 'CSS',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             bg: '#0A1230' },
  figma: { label: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',           bg: '#2A0E07' },
}

// Gallery — ordered to match the Figma Project Page Layout reference
// type values: illustration | sports | anime | poster | 3d | music | art
export const galleryItems = [
  { id: 1,  src: '/assets/g-dr-strange.png',   label: 'Dr Strange',          type: 'illustration', tall: true  },
  { id: 2,  src: '/assets/g-bayern.png',        label: 'Bayern Munich Kit',   type: 'sports',       tall: true  },
  { id: 3,  src: '/assets/g-juventus.png',      label: 'Juventus Kit',        type: 'sports',       tall: true  },
  { id: 4,  src: '/assets/g-statue.png',        label: 'Statue Edit',         type: 'illustration', tall: true  },
  { id: 5,  src: '/assets/g-creature.png',      label: 'Grad Map Art',        type: 'illustration', tall: false },
  { id: 6,  src: '/assets/g-psg.png',           label: 'PSG Jersey',          type: 'sports',       tall: false },
  { id: 7,  src: '/assets/g-still-we-rise.png', label: 'Still We Rise',       type: 'poster',       tall: true  },
  { id: 8,  src: '/assets/g-chelsea.png',       label: 'United 2nd Kit',      type: 'sports',       tall: true  },
  { id: 9,  src: '/assets/g-kakashi.png',       label: 'Kakashi',             type: 'anime',        tall: true  },
  { id: 10, src: '/assets/g-harvey.png',        label: 'Harvey',              type: 'illustration', tall: true  },
  { id: 11, src: '/assets/g-f1.png',            label: 'F1 Car',              type: 'art',          tall: false },
  { id: 12, src: '/assets/g-render1.png',       label: '3D Room',             type: '3d',           tall: false },
  { id: 13, src: '/assets/g-render2.png',       label: '3D Render',           type: '3d',           tall: false },
  { id: 14, src: '/assets/g-marshmello.png',    label: 'Marshmello',          type: 'music',        tall: false },
  { id: 15, src: '/assets/g-ronaldo.png',       label: 'Ronaldo',             type: 'sports',       tall: true  },
  { id: 16, src: '/assets/g-ten-hag.png',       label: 'Ten Hag Edit',        type: 'illustration', tall: true  },
  { id: 17, src: '/assets/g-united-kit.png',    label: 'United Kit',          type: 'sports',       tall: true  },
  { id: 18, src: '/assets/g-cap.png',           label: 'Captain America',     type: 'illustration', tall: true  },
  { id: 19, src: '/assets/g-ironman.png',       label: 'Iron Man',            type: 'illustration', tall: false },
  { id: 20, src: '/assets/g-thanos.png',        label: 'Thanos',              type: 'illustration', tall: true  },
  { id: 21, src: '/assets/g-barca.png',         label: 'Barca Concept',       type: 'sports',       tall: true  },
  { id: 22, src: '/assets/g-alan-walker.png',   label: 'Alan Walker',         type: 'music',        tall: false },
  { id: 23, src: '/assets/g-monster.png',       label: 'Monster',             type: 'poster',       tall: false },
  { id: 24, src: '/assets/g-vineeth.png',       label: 'Vineeth',             type: 'illustration', tall: false },
  { id: 25, src: '/assets/g-image5.png',        label: 'Weather App',         type: 'art',          tall: false },
]
