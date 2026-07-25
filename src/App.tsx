import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronDown,
  Code2,
  GraduationCap,
  BookOpen,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

// استيراد الصور
import coverSparkle from '/src/assets/Images/Cover_Sparklepng.png';
import coverMindGrid from '/src/assets/Images/Cover_Mind_Grid.png';
import welcomePage from '/src/assets/Images/WelcomePage.png';
import coverBankPro from '/src/assets/Images/Cover_BankPro.png';
import presentationTodo from '/src/assets/Images/Presentation_TO-DO_List.png';
import coverSmartMarket from '/src/assets/Images/Cover_SmartMarket.png';
import comingSoon from '/src/assets/Images/Coming_Soon_Project.png';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// ايقونة LinkedIn
const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  techTags: string[];
  langFilter: string[];
  typeFilter: string[];
  github: string;
  youtube?: string;
  image: string;
  gradient: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: 'coming-soon',
    title: 'Next Big Thing',
    shortDesc: 'A massive new project is currently in development.',
    features: [],
    techTags: ['Mystery'],
    langFilter: [],
    typeFilter: [],
    github: '',
    image: comingSoon,
    gradient: 'from-white/5 to-white/10',
    isComingSoon: true,
  },
  {
    id: 'sparkle',
    title: 'Sparkle',
    shortDesc: 'Premium Cleaning Management System built with .NET.',
    features: [
      'Client Management: Full lifecycle tracking.',
      'Order System: Carpet & Car cleaning modules.',
      'Smart Pricing: Dynamic calculation engine.',
      'Permissions: Role-based security.',
    ],
    techTags: ['C#', '.NET', 'WinForms', 'Guna2'],
    langFilter: ['csharp'],
    typeFilter: ['dotnet-framework'],
    github: 'https://github.com/7mee3d/Sparkle',
    youtube: 'https://www.youtube.com/watch?v=LC2jUTV6pjk',
    image: coverSparkle,
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'mindgrid',
    title: 'Mind Grid',
    shortDesc: 'A futuristic Tic-Tac-Toe experience with advanced UI/UX.',
    features: [
      'Visual Feedback: High-end animations.',
      'Smart Logic: Zero-latency win detection.',
      'Diamond Grid: Unique layout design.',
    ],
    techTags: ['C#', 'WinForms', 'UI Design'],
    langFilter: ['csharp'],
    typeFilter: ['dotnet-framework'],
    github: 'https://github.com/7mee3d/MindGrid',
    youtube: 'https://www.youtube.com/watch?v=WmiSqqFOceE',
    image: coverMindGrid,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'pizzlicious',
    title: 'Pizzlicious',
    shortDesc: 'Elegant Pizza Restaurant Management & Ordering system.',
    features: [
      'Custom Orders: Granular topping control.',
      'History: Text-based persistence.',
      'Price Engine: Real-time calculation.',
    ],
    techTags: ['C#', '.NET', 'File System'],
    langFilter: ['csharp'],
    typeFilter: ['dotnet-framework'],
    github: 'https://github.com/7mee3d/Pizzlicious',
    youtube: 'https://www.youtube.com/watch?v=eJkE0VAz6jA',
    image: welcomePage,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 'bankpro',
    title: 'BankPro',
    shortDesc: 'Core Banking Simulation focused on OOP and File I/O.',
    features: [
      'Transactions: Secure Transfer/Deposit.',
      'Exchange: Real-time currency logic.',
      'User Logs: Comprehensive activity tracking.',
    ],
    techTags: ['C++', 'OOP', 'File Handling'],
    langFilter: ['cpp'],
    typeFilter: ['console'],
    github: 'https://github.com/7mee3d/BankPro',
    image: coverBankPro,
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    id: 'momentum',
    title: 'Momentum',
    shortDesc: 'Minimalist, high-performance task management tool.',
    features: [
      'Task Logic: Duplicate prevention.',
      'Persistence: Automated file saving.',
      'Live Stats: Task counter engine.',
    ],
    techTags: ['C#', 'WinForms', 'UX'],
    langFilter: ['csharp'],
    typeFilter: ['dotnet-framework'],
    github: 'https://github.com/7mee3d/Momentum',
    image: presentationTodo,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'smartmarket',
    title: 'SmartMarket',
    shortDesc: 'Advanced supermarket inventory and POS simulation.',
    features: [
      'Inventory: Managerial dashboard.',
      'Receipts: Auto-generated invoices.',
      'Auto-Save: State persistence.',
    ],
    techTags: ['C++', 'OOP', 'Retail Systems'],
    langFilter: ['cpp'],
    typeFilter: ['console'],
    github: 'https://github.com/7mee3d/SmartMarket',
    image: coverSmartMarket,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-tighter group">
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all">
            AJ
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Home', 'About', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://github.com/7mee3d"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div className="mesh-gradient" />
      <div className="noise" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-8 inline-block">
            Software Engineer & Developer
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tight leading-[0.9] mb-8">
            CRAFTING <br />
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">SOLUTIONS</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            Ahmed Jehad — Junior at Palestine University. Building robust Desktop and System architectures with C# and C++.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/7mee3d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

const BentoAbout = () => {
  const cards = [
    {
      title: 'Current Focus',
      content: 'C# & .NET Desktop Architecture',
      icon: <Code2 className="text-violet-400" />,
      size: 'col-span-2 md:col-span-3',
    },
    {
      title: 'Education',
      content: 'Junior @UP Faculty of Software Engineering & AI',
      icon: <GraduationCap className="text-cyan-400" />,
      size: 'col-span-2 md:col-span-2',
    },
    {
      title: 'Philosophy',
      content: 'Passionate about using software to solve real-world problems.',
      icon: <Sparkles className="text-amber-400" />,
      size: 'col-span-2 md:col-span-2',
    },
    {
      title: 'Interests',
      content: 'Exploring AI & System Design',
      icon: <BookOpen className="text-rose-400" />,
      size: 'col-span-2 md:col-span-3',
    },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-5xl font-black mb-4">ABOUT <span className="text-violet-500">ME</span></h2>
            <div className="w-16 h-1 bg-violet-600 rounded-full" />
          </div>
          <p className="max-w-md text-gray-500 text-sm">
            I've been fascinated by technology since childhood. Building innovative tools gives me immense joy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`${card.size} glass rounded-3xl p-8 flex flex-col justify-between border-white/5 hover:border-violet-500/30 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-12">
                {card.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  {card.title}
                </h4>
                <p className="text-xl font-bold leading-tight">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) => {
  return (
    <motion.div
      layout
      onClick={() => !project.isComingSoon && onOpen(project)}
      className={`group relative glass-dark rounded-[2.5rem] overflow-hidden cursor-pointer border-white/5 hover:border-violet-500/50 transition-all duration-500 ${
        project.isComingSoon ? 'opacity-50 cursor-default' : ''
      }`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <Sparkles size={40} className="text-white/20" />
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          {!project.isComingSoon && <ArrowRight size={20} className="text-gray-600 group-hover:translate-x-1 group-hover:text-violet-400 transition-all" />}
        </div>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.shortDesc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techTags.map((t) => (
            <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

// دالة مساعدة لاستخراج ID الفيديو من رابط يوتيوب
const getYoutubeVideoId = (url: string) => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]+)/,
    /(?:youtu\.be\/)([\w-]+)/,
    /(?:youtube\.com\/embed\/)([\w-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const videoId = project.youtube ? getYoutubeVideoId(project.youtube) : null;
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
      <motion.div
        initial={{ y: 100, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 100, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0a0a10] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-black flex items-center justify-center">
          {project.youtube && videoId ? (
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title={`${project.title} - YouTube Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.image ? (
            <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No preview available
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
          <h3 className="text-4xl font-black mb-6">{project.title}</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">{project.shortDesc}</p>
          
          <div className="mb-8">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Features</h4>
            <div className="space-y-3">
              {project.features.map((f, i) => (
                <div key={i} className="flex gap-3 text-sm text-gray-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.techTags.map((t) => (
              <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs font-bold uppercase">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-white text-black text-center font-black rounded-2xl hover:bg-violet-500 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <GithubIcon size={18} /> GITHUB
              </a>
            )}
            {project.youtube && videoId && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-red-600/10 border border-red-500/20 text-red-500 text-center font-black rounded-2xl hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <YoutubeIcon size={18} /> DEMO
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const filtered = projects.filter(p => filter === 'all' || p.langFilter.includes(filter));

  return (
    <div className="bg-[#030308] text-white">
      <Navbar />
      <Hero />
      <BentoAbout />

      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-5xl font-black mb-4 tracking-tighter">PROJECTS</h2>
              <div className="w-16 h-1 bg-violet-600 rounded-full" />
            </div>
            
            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/5">
              {['all', 'csharp', 'cpp'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                    filter === f ? 'bg-white text-black' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'csharp' ? 'C#' : 'C++'}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} onOpen={setSelected} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Ahmed Jehad. Engineered with Passion.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/7mee3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-jehad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={22} />
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"
        />
      </div>
    </div>
  );
}