import React from 'react';
import { experiences, experienceMap } from '@/components/experiences';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

const experienceVisuals = {
  etri: {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
    color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/30',
    subtitle: 'AI Researcher | Jul 2025 - Present',
  },
  'korea-univ': {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
    color: 'text-violet-500 bg-violet-50 dark:bg-violet-950/30',
    subtitle: 'M.S. in AI | Feb 2023 - Feb 2025',
  },
  'mobile-entropy': {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
    subtitle: 'Web Developer | Feb 2021 - Jan 2023',
  },
  cnu: {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>,
    color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/30',
    subtitle: 'B.S. in Computer Science | Mar 2015 - Feb 2021',
  },
};

const Experience = ({ onExperienceSelect, selectedExperienceId }) => {
  if (selectedExperienceId && experienceMap[selectedExperienceId]) {
    const ExperienceComponent = experienceMap[selectedExperienceId];
    return (
      <Container>
        <div className="mb-8">
          <Button variant="ghost" onClick={() => onExperienceSelect(null)} className="gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back
          </Button>
        </div>
        <ExperienceComponent />
      </Container>
    );
  }

  return (
    <Container>
      <AnimatedSection>
        <div className="mb-12">
          <p className="code-label mb-2">// experience & education</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3 tracking-tight">
            Experience <span className="text-muted-foreground">&</span> Education
          </h1>
          <p className="text-[15px] sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            My professional journey and academic background in AI and Computer Science.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
        {experiences.map((exp) => (
          <StaggerItem key={exp.id}>
            <Card
              spotlight
              className="cursor-pointer h-full flex flex-col"
              onClick={() => onExperienceSelect(exp.id)}
            >
              <CardHeader>
                {experienceVisuals[exp.id] && (
                  <div className={`p-2.5 rounded-xl w-fit mb-3 ${experienceVisuals[exp.id].color}`}>
                    {experienceVisuals[exp.id].icon}
                  </div>
                )}
                <CardTitle className="text-sm">{exp.title}</CardTitle>
                {experienceVisuals[exp.id] && (
                  <p className="text-[11px] text-muted-foreground font-mono mt-1">{experienceVisuals[exp.id].subtitle}</p>
                )}
                <Badge variant="secondary" className="w-fit mt-2 text-[10px] font-mono">
                  {exp.id.includes('univ') || exp.id === 'cnu' || exp.id === 'korea-univ' ? 'Education' : 'Professional'}
                </Badge>
              </CardHeader>
              <CardContent className="mt-auto pt-2">
                <button
                  onClick={(e) => { e.stopPropagation(); onExperienceSelect(exp.id); }}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-1"
                >
                  View Details
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Container>
  );
};

export default Experience;
