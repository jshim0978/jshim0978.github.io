import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import AnimatedSection from '@/components/shared/AnimatedSection';

const roles = [
  'AI Researcher',
  'NLP & LLM Specialist',
  'Full-Stack Developer',
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/jshim0978',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jungwoo-shim-073100240/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:right_rain@etri.re.kr',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
];

const TypingRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-pulse ml-px">|</span>
    </span>
  );
};

const newsItems = [
  { date: 'Mar 2026', text: 'POaaS paper published at FEVER Workshop @ EACL 2026' },
  { date: 'Jul 2025', text: 'Joined ETRI as AI Researcher' },
  { date: 'Feb 2025', text: 'Completed M.S. in AI at Korea University' },
  { date: 'Oct 2024', text: 'CPR paper presented at IEEE SMC 2024' },
  { date: 'Sep 2024', text: 'Filed patent for therapeutic prompt refinement methodology' },
];

const Home = ({ onNavigate }) => {
  return (
    <Container>
      {/* Hero */}
      <div className="dot-grid glow-bg min-h-[65vh] flex flex-col items-center justify-center text-center py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <span className="status-badge">
              <span className="pulse-dot" />
              Open to Collaboration
            </span>
          </div>

          <div className="mb-6">
            <img
              src="/images/profile.jpg"
              alt="Jungwoo Shim"
              className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white dark:border-slate-800 shadow-lg ring-2 ring-accent/20"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight leading-[1.1]">
            심정우 | Jungwoo Shim
          </h1>

          <div className="text-lg sm:text-xl mb-6 h-7">
            <TypingRole />
          </div>

          <p className="text-[15px] sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            AI Researcher at ETRI specializing in mitigating LLM hallucinations
            through multi-stage prompt refinement. Building practical AI systems
            that bridge research and real-world impact.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <AnimatedSection delay={0.1}>
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-20 -mt-4">
          {[
            { label: 'Publications', value: '4+', color: 'text-sky-500' },
            { label: 'Years Exp', value: '4+', color: 'text-violet-500' },
            { label: 'Projects', value: '15+', color: 'text-emerald-500' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection delay={0.15}>
        <div className="mb-20 max-w-3xl mx-auto">
          <p className="code-label mb-3">// about</p>
          <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            I am an AI Researcher at ETRI (Electronics and Telecommunications Research Institute),
            focusing on AI semiconductor cloud platforms and LLM benchmarking.
            I completed my M.S. in Artificial Intelligence from Korea University,
            where my research on mitigating LLM hallucinations through multi-stage
            prompt refinement was published at IEEE SMC 2024 and FEVER@EACL 2026.
            I combine strong foundations in computer science with hands-on experience
            in Python, PyTorch, React.js, and cloud infrastructure to build practical AI systems.
          </p>
        </div>
      </AnimatedSection>

      {/* Recent News */}
      <AnimatedSection delay={0.2}>
        <div className="mb-20 max-w-3xl mx-auto">
          <p className="code-label mb-3">// recent news</p>
          <div className="space-y-0">
            {newsItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-2.5 border-b border-slate-200/50 dark:border-slate-800/50 last:border-0"
              >
                <span className="text-[11px] font-mono text-accent whitespace-nowrap mt-0.5 min-w-[70px]">
                  {item.date}
                </span>
                <span className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Bento Navigation Grid */}
      <AnimatedSection delay={0.25}>
        <p className="code-label mb-4 text-center">// explore</p>
        <div className="bento-grid mb-16">
          <BentoCard
            title="Projects"
            description="Research, engineering, and contest-winning projects."
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            colSpan="col-span-2"
            rowSpan="row-span-2"
            onClick={() => onNavigate && onNavigate('projects')}
          />
          <BentoCard
            title="Experience"
            description="ETRI, Korea University, Mobile Entropy, CNU."
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            onClick={() => onNavigate && onNavigate('experience')}
          />
          <BentoCard
            title="Publications"
            description="Conference papers, patents."
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
            onClick={() => onNavigate && onNavigate('publications')}
          />
          <BentoCard
            title="Blog"
            description="Technical writing on AI research and prompt engineering."
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
            onClick={() => onNavigate && onNavigate('blog')}
          />
          <BentoCard
            title="CV"
            description="Education, skills, certifications."
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
            onClick={() => onNavigate && onNavigate('cv')}
          />
        </div>
      </AnimatedSection>
    </Container>
  );
};

const BentoCard = ({ title, description, icon, colSpan = '', rowSpan = '', onClick }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className={`glass-card rounded-xl p-6 cursor-pointer group ${colSpan} ${rowSpan} flex flex-col justify-between`}
    onClick={onClick}
  >
    <div>
      <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 w-fit mb-4 text-muted-foreground group-hover:text-foreground transition-colors duration-150">
        {icon}
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
    <div className="mt-3 flex items-center text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150">
      Explore
      <svg className="w-3 h-3 ml-1 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </div>
  </motion.div>
);

export default Home;
