import './App.css'
import { useEffect, useState } from 'react'
import {
  siCss,
  siFlutter,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siSpringboot,
  siVuedotjs,
} from 'simple-icons'
import profilePhoto from './assets/PAS FOTO NAND_LATar biru.jpeg'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '4', label: 'Enterprise Systems' },
  { value: '3.44', label: 'GPA' },
]

const skills = [
  { name: 'Laravel', icon: siLaravel },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Python', icon: siPython },
  { name: 'Java', icon: siOpenjdk },
  { name: 'Spring Boot', icon: siSpringboot },
  { name: 'Vue.js', icon: siVuedotjs },
  { name: 'React.js', icon: siReact },
  { name: 'Flutter', icon: siFlutter },
  { name: 'PHP', icon: siPhp },
  { name: 'SQL / MySQL', icon: siMysql },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Git & GitHub', icon: siGithub },
  { name: 'HTML / CSS / JavaScript', icons: [siHtml5, siCss, siJavascript] },
  { name: 'Microsoft Office', mark: 'MS', tone: 'red' },
]

function SkillIcon({ skill }) {
  const icons = skill.icons || [skill.icon]

  if (!skill.icon && !skill.icons) {
    return <span className={`skill-mark ${skill.tone}`} aria-hidden="true">{skill.mark}</span>
  }

  return (
    <span className="skill-logos" aria-hidden="true">
      {icons.map((icon) => (
        <svg key={icon.title} viewBox="0 0 24 24" role="img" style={{ color: `#${icon.hex}` }}>
          <path d={icon.path} />
        </svg>
      ))}
    </span>
  )
}

const projects = [
  {
    title: 'Henkaten Digitalization System',
    category: 'Enterprise Web App',
    filter: 'Web',
    summary:
      'Platform Laravel untuk mengelola perubahan mesin, alokasi manpower, penjadwalan operasional, OTP, dan approval bertingkat.',
    tags: ['Laravel', 'MySQL', 'RBAC', 'OTP'],
    metric: 'Enterprise workflow',
  },
  {
    title: 'Inbound Inventory Monitoring',
    category: 'Logistics System',
    filter: 'Web',
    summary:
      'Sistem monitoring siklus inventori inbound, outbound, dan barang dalam proses dengan validasi multi-level dan database MySQL.',
    tags: ['Laravel', 'Eloquent ORM', 'RBAC', 'MySQL'],
    metric: 'Real-time tracking',
  },
  {
    title: 'AI Business Consultant',
    category: 'AI Web Platform',
    filter: 'AI',
    summary:
      'Aplikasi konsultasi UMKM dengan Next.js, Laravel REST API, PostgreSQL, AI summarization, dan predictive analytics.',
    tags: ['Next.js', 'Laravel API', 'PostgreSQL', 'AI'],
    metric: 'Predictive analytics',
  },
  {
    title: 'LearnWay Tutoring Platform',
    category: 'E-Learning Platform',
    filter: 'Web',
    summary:
      'Platform tutoring on-demand dengan sistem bidding harga, OTP authentication, dan backend Laravel API yang scalable.',
    tags: ['Next.js', 'Laravel API', 'PostgreSQL', 'Bidding'],
    metric: 'On-demand learning',
  },
  {
    title: 'Interactive LMS & Assessment',
    category: 'Learning Management',
    filter: 'Web',
    summary:
      'LMS berbasis Laravel 12 dan MySQL dengan modul berurutan, prerequisite workflow, tracking progres, dan penilaian otomatis.',
    tags: ['Laravel 12', 'MySQL', 'LMS', 'Assessment'],
    metric: 'Progress tracking',
  },
  {
    title: 'IoT SmartHome Automation',
    category: 'IoT System',
    filter: 'IoT & Mobile',
    summary:
      'Sistem smart home berbasis ESP32, MQTT, sensor DHT22, relay, fingerprint, dan dashboard web untuk monitoring jarak jauh.',
    tags: ['ESP32', 'MQTT', 'IoT', 'Dashboard'],
    metric: 'Live telemetry',
  },
  {
    title: 'Arcade Car Racing',
    category: 'Game Development',
    filter: 'Other',
    summary:
      'Game balap Unity dengan physics kendaraan, state management, lingkungan 3D, dan integrasi Logitech Steering Wheel.',
    tags: ['Unity', 'C#', '3D', 'Hardware API'],
    metric: 'Interactive 3D',
  },
  {
    title: 'Export / Import Logistics Platform',
    category: 'B2B Platform',
    filter: 'Web',
    summary:
      'Portal logistik B2B berbasis Next.js dan MySQL untuk tracking pengiriman serta pertukaran data aman antara tim dan klien.',
    tags: ['Next.js', 'MySQL', 'CSR', 'Multi-tenant'],
    metric: 'B2B logistics',
  },
  {
    title: 'Farm-to-Table Mobile App',
    category: 'Mobile Application',
    filter: 'IoT & Mobile',
    summary:
      'Aplikasi Flutter yang menghubungkan restoran dan petani melalui REST API, sinkronisasi order, inventori, dan Weather API.',
    tags: ['Flutter', 'Dart', 'MySQL', 'REST API'],
    metric: 'Supply chain',
  },
  {
    title: 'Music Genre Classification',
    category: 'Artificial Intelligence',
    filter: 'AI',
    summary:
      'Model klasifikasi genre musik menggunakan CNN-14 dan PANNs dengan fokus pada robustness terhadap audio bising dan terdistorsi.',
    tags: ['Python', 'Deep Learning', 'CNN-14', 'PANNs'],
    metric: 'Audio AI',
  },
]

const experience = [
  {
    period: 'Feb 2026 — Jun 2026',
    role: 'Machine Learning Laboratory Assistant',
    company: 'Institut Teknologi Nasional (Itenas) - Bandung',
    detail: 'Mengembangkan pipeline pembelajaran Machine Learning untuk pendidikan, membimbing implementasi Scikit-Learn, TensorFlow, dan PyTorch, serta membantu debugging dan tuning hyperparameter.',
  },
  {
    period: 'Nov 2025 — Des 2025',
    role: 'Fullstack Developer (Internship)',
    company: 'PT. Detpak Indonesia - Cikarang',
    detail: 'Membangun Warehouse Management System dengan Laravel 12, Eloquent ORM, RBAC, audit trail, approval matrix, dan PDF reporting engine.',
  },
  {
    period: 'Jun 2024 — Des 2024',
    role: 'Fullstack Web Developer (Internship)',
    company: 'PT Kayaba Indonesia (Astra Group) - Cikarang',
    detail: 'Mengembangkan dashboard QA, sistem Henkaten, modul penjadwalan resource, QC tracking, approval workflow, serta otomatisasi dokumen PDF untuk kebutuhan enterprise.',
  },
  {
    period: 'Oct 2023',
    role: 'Front End Developer',
    company: 'TOP 4 Hackathon - Bandung',
    detail: 'Mengerjakan UI/UX architecture, component-based design, wireframing, DOM manipulation, responsive web design, Git, dan rapid prototyping dalam tim lintas fungsi.',
  },
  {
    period: 'Jan 2025 — Oct 2025',
    role: 'Head of Talent and Interest Division',
    company: 'Himpunan Mahasiswa Informatika Itenas - Bandung',
    detail: 'Memimpin program pengembangan bakat, workshop, dan platform komunitas untuk mahasiswa Informatika.',
  },
  {
    period: 'Jun 2025',
    role: 'Head of Event Division',
    company: 'Waktu Itenas Bersantai - Bandung',
    detail: 'Memimpin perencanaan festival kampus, koordinasi lintas tim, rundown acara, vendor bazaar, dan pengelolaan anggaran proyek Rp100 juta.',
  },
  {
    period: 'Mar 2023',
    role: 'Head of Graduation Event Division',
    company: 'Himpunan Mahasiswa Informatika Itenas - Bandung',
    detail: 'Mengelola konsep, operasional, dan koordinasi logistik acara wisuda departemen.',
  },
]

const credentials = [
  {
    quote: 'Bachelor of Informatics Engineering, GPA 3.44.',
    name: 'Institut Teknologi Nasional (Itenas)',
    role: '2022 - 2026 | Bandung, Indonesia',
  },
  {
    quote: 'Natural Science graduate with final grade 84.',
    name: 'SMAN 1 Cikarang Selatan',
    role: '2019 - 2022 | Cikarang, Indonesia',
  },
  {
    quote: 'Fundamentals of Deep Learning.',
    name: 'NVIDIA Certification',
    role: 'Certification',
    documentUrl: '/certificates/nvidia-fundamentals-deep-learning.pdf',
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('All')

  useEffect(() => {
    const sections = ['about', 'work', 'experience', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter((project) => project.filter === projectFilter)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">AY</span>
          <span className="brand-copy">
            <span className="brand-name">Abdy Ananda Yunan</span>
            <span className="brand-role">Software Engineer</span>
          </span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`}>
          <a className={activeSection === 'about' ? 'is-active' : ''} href="#about" onClick={closeMenu}>About</a>
          <a className={activeSection === 'work' ? 'is-active' : ''} href="#work" onClick={closeMenu}>Work</a>
          <a className={activeSection === 'experience' ? 'is-active' : ''} href="#experience" onClick={closeMenu}>Experience</a>
          <a className={activeSection === 'contact' ? 'is-active' : ''} href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <a className="nav-cta" href="mailto:nandayunan52@gmail.com">
          Contact Me
        </a>
      </header>

      <main>
        <section className="hero section-spacing">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer • Fullstack Developer • AI Engineer</p>
            <h1>
              I build <span>reliable digital systems</span> for real-world problems.
            </h1>
            <p className="lead">
              Lulusan Teknik Informatika Itenas dengan pengalaman membangun aplikasi web
              responsif dan scalable menggunakan Laravel, Next.js, React, serta solusi AI.
              Saya menerjemahkan kebutuhan bisnis menjadi software yang aman dan dapat diandalkan.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#work">
                View Projects
              </a>
              <a className="secondary-btn" href="#experience">
                View Experience
              </a>
            </div>

            <div className="mini-meta">
              <span>Open to Software Engineering roles</span>
              <span>Bandung, Indonesia</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portfolio overview card">
            <div className="profile-card glass-card">
              <div className="badge-row">
                <span className="dot green" />
                <span className="dot amber" />
                <span className="dot red" />
              </div>

              <div className="card-panel">
                <div className="card-header">
                  <span className="small-label">Portfolio 2026</span>
                  <span className="chip">FULLSTACK</span>
                </div>

                <div className="avatar-wrap">
                  <img className="avatar" src={profilePhoto} alt="Foto profil Abdy Ananda Yunan" />
                </div>

                <div className="profile-info">
                  <h3>Abdy Ananda Yunan</h3>
                  <p>Software Engineer & AI Enthusiast</p>
                </div>

                <div className="metric-grid">
                  <div>
                    <strong>10+</strong>
                    <span>Digital Projects</span>
                  </div>
                  <div>
                    <strong>3+</strong>
                    <span>Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row section-spacing">
          {stats.map((item) => (
            <div className="stat-box" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="about section-spacing">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Software engineer yang mengubah kebutuhan bisnis menjadi solusi digital.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Saya adalah lulusan Teknik Informatika dari Institut Teknologi Nasional Bandung
                dengan pengalaman lebih dari tiga tahun di bidang web development dan software engineering.
              </p>
              <p>
                Saya berpengalaman mengembangkan solusi digital enterprise di PT Kayaba Indonesia
                (Astra Group), termasuk dashboard monitoring otomatis, sistem laboratorium terintegrasi,
                dan platform manajemen resource terpusat.
              </p>
            </div>

            <div className="info-panel glass-card">
              <h3>Focus Areas</h3>
              <ul>
                <li>Fullstack web application development</li>
                <li>Enterprise workflow and approval systems</li>
                <li>Machine Learning and AI applications</li>
                <li>Database architecture and secure APIs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="skills section-spacing">
          <div className="section-heading narrow">
            <p className="eyebrow">Technical Skills</p>
            <h2>Teknologi yang saya gunakan untuk membangun software yang kuat.</h2>
          </div>

          <div className="chip-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill.name}>
                <SkillIcon skill={skill} />
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="projects section-spacing">
          <div className="section-heading">
            <p className="eyebrow">Selected Projects</p>
            <h2>Proyek yang menunjukkan pengalaman saya dalam web, mobile, IoT, game, dan AI.</h2>
          </div>

          <div className="project-filters" aria-label="Filter projects">
            {['All', 'Web', 'AI', 'IoT & Mobile', 'Other'].map((filter) => (
              <button
                className={projectFilter === filter ? 'is-selected' : ''}
                type="button"
                key={filter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card glass-card" key={project.title}>
                <div className="project-visual">
                  <div className="project-window">
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-dot" />
                  </div>
                  <div className="visual-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.category}</span>
                    <strong>{project.metric}</strong>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="timeline section-spacing">
          <div className="section-heading narrow">
            <p className="eyebrow">Experience</p>
            <h2>Pengalaman profesional, organisasi, dan kontribusi teknis saya.</h2>
          </div>

          <div className="timeline-list">
            {experience.map((item) => (
              <div className="timeline-item glass-card" key={item.period}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials section-spacing">
          <div className="section-heading narrow">
            <p className="eyebrow">Education & Certification</p>
            <h2>Fondasi akademik dan sertifikasi yang mendukung perjalanan teknis saya.</h2>
          </div>

          <div className="testimonial-grid">
            {credentials.map((item) => (
              item.documentUrl ? (
                <a
                  className="testimonial-card credential-link glass-card"
                  href={item.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  key={item.name}
                >
                  <span className="credential-action">Open certificate ↗</span>
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </a>
              ) : (
                <blockquote className="testimonial-card glass-card" key={item.name}>
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              )
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer section-spacing">
        <div className="footer-card glass-card">
          <div>
            <p className="eyebrow">Let&apos;s connect</p>
            <h2>Terbuka untuk peluang Software Engineer, Web Developer, AI Engineer, dan Fullstack Developer.</h2>
          </div>

          <div className="contact-actions">
            <a className="contact-link primary-btn" href="mailto:nandayunan52@gmail.com">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 5.5h16v13H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>Email</span>
            </a>
            <a className="contact-link secondary-btn" href="https://www.linkedin.com/in/nanda-yunan-784a1025a" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.2 8.2A1.8 1.8 0 1 0 5.2 4.6a1.8 1.8 0 0 0 0 3.6ZM3.7 9.7h3v9.6h-3V9.7Zm4.8 0h2.9V11c.4-.8 1.4-1.6 3.2-1.6 3.4 0 4 2.2 4 5v4.9h-3v-4.4c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.5h-3V9.7h-.6Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a className="contact-link secondary-btn" href="https://github.com/Nandayunan" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7 1 .7 1.9v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a className="contact-link secondary-btn" href="https://www.instagram.com/nandudee/" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
