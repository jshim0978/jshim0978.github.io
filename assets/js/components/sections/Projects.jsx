import React from 'react';
import { projects, projectMap } from '../projects';
import Container from '../shared/Container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const Projects = ({ onProjectSelect, selectedProjectId }) => {
  if (selectedProjectId && projectMap[selectedProjectId]) {
    const ProjectComponent = projectMap[selectedProjectId];
    return (
      <Container>
        <div className="mb-8">
          <Button variant="ghost" onClick={() => onProjectSelect(null)}>
            <svg className="arrow-sm mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Projects
          </Button>
        </div>
        <ProjectComponent />
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4 font-heading tracking-tight">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A selection of my research, development, and contest-winning projects.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <Card key={project.id} className="group transition-all duration-300 ease-in-out">
            <div className="md:grid md:grid-cols-4 md:gap-8 items-center">
              <div className="md:col-span-3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
              <div className="p-6 md:p-0 md:pr-6">
                <Button onClick={() => onProjectSelect(project.id)} className="project-button" variant="outline">
                  View Project
                  <svg className="project-button-arrow ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Projects; 