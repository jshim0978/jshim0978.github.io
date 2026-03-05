import React from 'react';
import { experiences, experienceMap } from '@/components/experiences';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

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
          <p className="text-[15px] text-muted-foreground max-w-xl leading-relaxed">
            My professional journey and academic background in AI and Computer Science.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerDelay={0.08}>
        {experiences.map((exp) => (
          <StaggerItem key={exp.id}>
            <Card
              spotlight
              className="cursor-pointer h-full flex flex-col"
              onClick={() => onExperienceSelect(exp.id)}
            >
              <CardHeader>
                <CardTitle className="text-sm">{exp.title}</CardTitle>
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
