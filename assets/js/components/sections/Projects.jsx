import React from 'react';
import { projects, projectMap } from '../projects';
import Container from '../shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

const Projects = ({ onProjectSelect, selectedProjectId }) => {
  if (selectedProjectId && projectMap[selectedProjectId]) {
    const ProjectComponent = projectMap[selectedProjectId];
    return (
      <Container>
        <div className="mb-8">
          <Button variant="ghost" onClick={() => onProjectSelect(null)} className="gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back
          </Button>
        </div>
        <ProjectComponent />
      </Container>
    );
  }

  return (
    <Container>
      <AnimatedSection>
        <div className="mb-12">
          <p className="code-label mb-2">// projects</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3 tracking-tight">
            Projects
          </h1>
          <p className="text-[15px] text-muted-foreground max-w-xl leading-relaxed">
            A selection of research, development, and contest-winning projects.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerDelay={0.06}>
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <Card
              spotlight
              className="cursor-pointer h-full flex flex-col"
              onClick={() => onProjectSelect(project.id)}
            >
              <CardHeader>
                <CardTitle className="text-sm">{project.title}</CardTitle>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">{project.description}</p>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-[10px]">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Container>
  );
};

export default Projects;
