import React from 'react';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

const education = [
  {
    school: 'Korea University',
    department: 'Graduate School of Artificial Intelligence',
    degree: 'M.S. in Artificial Intelligence',
    period: 'Feb 2023 \u2013 Feb 2025',
    gpa: '4.21 / 4.5',
    thesis: 'Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models',
    advisor: 'Prof. Seong Whan Lee',
    location: 'Seoul, Korea',
  },
  {
    school: 'Chungnam National University',
    department: 'Department of Computer Science',
    degree: 'B.S. in Computer Science',
    period: 'Mar 2015 \u2013 Feb 2021',
    gpa: '3.18 / 4.5',
    thesis: 'Developing Safe UI for Android OS',
    advisor: 'Prof. Jin-su Jang',
    location: 'Daejeon, Korea',
  },
];

const experience = [
  {
    company: 'Electronics and Telecommunications Research Institute (ETRI)',
    role: 'AI Researcher',
    period: 'Jul 2025 \u2013 Present',
    location: 'Daejeon, Korea',
    highlights: [
      'Conducting research in artificial intelligence and machine learning',
      'Developing prompt optimization systems for on-device small LLMs (POaaS)',
      'Contributing to innovative AI solutions and technologies',
    ],
  },
  {
    company: 'Korea University \u2013 Pattern Recognition & Machine Learning Lab',
    role: 'Graduate Researcher',
    period: 'Feb 2023 \u2013 Feb 2025',
    location: 'Seoul, Korea',
    highlights: [
      'Researched LLM hallucination mitigation through curative/multi-stage prompt refinement (CPR)',
      'Published at IEEE SMC 2024 and FEVER@EACL 2026',
      'Filed patent for therapeutic prompt refinement methodology',
      'Developed LLM integration for GenAI Academy and COMA projects',
    ],
  },
  {
    company: 'Mobile Entropy',
    role: 'Web Developer',
    period: 'Feb 2021 \u2013 Jan 2023',
    location: 'Seoul, Korea',
    highlights: [
      'Led frontend development for gas company web services',
      'Integrated KakaoPay API for bill payments',
      'Built system monitoring with Prometheus & Grafana on Naver Cloud',
      'Developed IoT Smart Safety System with frontend and IoT logic',
    ],
  },
];

const cvPublications = [
  {
    title: 'POaaS: Minimal-Edit Prompt Optimization as a Service to Lift Accuracy and Cut Hallucinations on On-Device sLLMs',
    venue: 'FEVER Workshop at EACL 2026',
    year: 2026,
  },
  {
    title: 'CPR: Mitigating Large Language Model Hallucinations with Curative Prompt Refinement',
    venue: 'IEEE SMC 2024',
    year: 2024,
  },
  {
    title: 'Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models',
    venue: 'Pattern Recognition (Under Review)',
    year: 2024,
  },
];

const skills = {
  'Languages & Frameworks': ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'Django', 'Java', 'Spring Boot', 'JavaScript', 'React.js', 'Next.js', 'SQL'],
  'AI / ML': ['Large Language Models', 'Prompt Engineering', 'NLP', 'Information Retrieval', 'Fine-tuning', 'RAG'],
  'Tools & Cloud': ['Git', 'Linux', 'Docker', 'Naver Cloud', 'Prometheus', 'Grafana'],
};

const certifications = [
  'TensorFlow Developer Certificate',
  'Google Machine Learning Bootcamp (Completed)',
];

const languages = [
  { test: 'TOEIC', score: '980' },
  { test: 'TEPS', score: '556' },
];

const researchInterests = [
  'Large Language Models',
  'Prompt Optimization',
  'Hallucination Mitigation',
  'Generative AI',
  'Natural Language Processing',
  'Information Retrieval',
];

const SectionTitle = ({ children }) => (
  <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
    <span className="w-0.5 h-4 rounded-full bg-accent inline-block" />
    {children}
  </h2>
);

const CV = () => (
  <Container>
    <AnimatedSection>
      <div className="mb-12">
        <p className="code-label mb-2">// curriculum vitae</p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3 tracking-tight">
          Curriculum <span className="gradient-text">Vitae</span>
        </h1>
        <div className="flex items-center gap-3 flex-wrap text-xs text-muted-foreground font-mono mb-4">
          <span>right_rain@etri.re.kr</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span>jshim0978@gmail.com</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span>jshim0978.github.io</span>
        </div>
        <a
          href="/assets/%EC%8B%AC%EC%A0%95%EC%9A%B0_CV_202408.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Download PDF
        </a>
      </div>
    </AnimatedSection>

    <div className="max-w-3xl space-y-10">
      {/* Research Interests */}
      <AnimatedSection delay={0.05}>
        <SectionTitle>Research Interests</SectionTitle>
        <div className="flex flex-wrap gap-1.5">
          {researchInterests.map(interest => (
            <Badge key={interest} variant="secondary" className="text-[11px] font-mono">
              {interest}
            </Badge>
          ))}
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.1}>
        <SectionTitle>Education</SectionTitle>
        <StaggerContainer className="space-y-3" staggerDelay={0.08}>
          {education.map(edu => (
            <StaggerItem key={edu.school}>
              <Card spotlight>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                    <div>
                      <CardTitle className="text-sm">{edu.school}</CardTitle>
                      <p className="text-xs text-accent font-medium mt-0.5">{edu.degree}</p>
                      <p className="text-[11px] text-muted-foreground">{edu.department}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <Badge variant="outline" className="font-mono text-[10px]">{edu.period}</Badge>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">GPA: </span>
                      <span className="font-medium text-foreground">{edu.gpa}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-muted-foreground">Thesis: </span>
                      <span className="text-foreground">{edu.thesis}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-muted-foreground">Advisor: </span>
                      <span className="text-foreground">{edu.advisor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.15}>
        <SectionTitle>Professional Experience</SectionTitle>
        <StaggerContainer className="space-y-3" staggerDelay={0.08}>
          {experience.map(exp => (
            <StaggerItem key={exp.company}>
              <Card spotlight>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                    <div>
                      <CardTitle className="text-sm">{exp.company}</CardTitle>
                      <p className="text-xs text-accent font-medium mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <Badge variant="outline" className="font-mono text-[10px]">{exp.period}</Badge>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* Publications */}
      <AnimatedSection delay={0.2}>
        <SectionTitle>Selected Publications</SectionTitle>
        <StaggerContainer className="space-y-2" staggerDelay={0.06}>
          {cvPublications.map((pub, i) => (
            <StaggerItem key={pub.title}>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200/50 dark:border-slate-800/50">
                <span className="text-[10px] font-mono text-muted-foreground mt-0.5 tabular-nums">[{i + 1}]</span>
                <div>
                  <p className="text-xs font-medium text-foreground leading-snug">{pub.title}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">{pub.venue} ({pub.year})</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.25}>
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} spotlight>
              <CardHeader className="pb-2">
                <CardTitle className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {items.map(item => (
                    <Badge key={item} variant="secondary" className="text-[10px] font-mono">{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Certifications & Languages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <AnimatedSection delay={0.3}>
          <SectionTitle>Certifications</SectionTitle>
          <Card spotlight>
            <CardContent className="pt-5">
              <ul className="space-y-2">
                {certifications.map(cert => (
                  <li key={cert} className="text-xs text-muted-foreground flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <SectionTitle>Language Scores</SectionTitle>
          <Card spotlight>
            <CardContent className="pt-5">
              <div className="space-y-2.5">
                {languages.map(lang => (
                  <div key={lang.test} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">{lang.test}</span>
                    <span className="text-sm font-semibold text-foreground tabular-nums">{lang.score}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  </Container>
);

export default CV;
