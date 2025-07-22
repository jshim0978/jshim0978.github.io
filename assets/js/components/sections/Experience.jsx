import React from 'react';
import { experiences, experienceMap } from '@/components/experiences';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Experience = ({ onExperienceSelect, selectedExperienceId }) => {
  if (selectedExperienceId && experienceMap[selectedExperienceId]) {
    const ExperienceComponent = experienceMap[selectedExperienceId];
    return (
      <Container>
        <div className="mb-8">
          <Button variant="ghost" onClick={() => onExperienceSelect(null)}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Experience & Education
          </Button>
        </div>
        <ExperienceComponent />
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4 font-heading tracking-tight">
          Experience & Education
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          My professional journey and academic background in the field of AI and Computer Science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className="group flex flex-col justify-between"
          >
            <CardHeader className="text-center">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center justify-center">
              <p className="text-muted-foreground">
                {exp.id.includes('Univ') ? 'Education' : 'Professional Experience'}
              </p>
            </CardContent>
            <div className="p-6">
              <Button onClick={() => onExperienceSelect(exp.id)} className="w-full" variant="outline">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Experience; 