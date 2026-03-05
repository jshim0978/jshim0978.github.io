import React, { useState, useMemo } from 'react';
import { projects, projectMap } from '../projects';
import Container from '../shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

const projectImages = {
  'jb-smartsafety': '/images/projectImages/JB_SSS.png',
  'monitoring-system': '/images/projectImages/MonitoringSystem.png',
  'opengiro': '/images/projectImages/OpenGiro.png',
  'kakaopay-sandbox': '/images/projectImages/Smart_Sandbox.png',
  'poaas': '/images/publicationImages/POaaS.png',
  'mpr-saas': '/images/publicationImages/MPR.png',
  'rusure': '/images/publicationImages/CPR.png',
};

const Projects = ({ onProjectSelect, selectedProjectId }) => {
  const [selectedTags, setSelectedTags] = useState(new Set());

  const allTags = useMemo(() => {
    const tagSet = new Set();
    projects.forEach(p => p.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.size === 0) return projects;
    return projects.filter(p => p.tags.some(t => selectedTags.has(t)));
  }, [selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

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
        <div className="mb-8">
          <p className="code-label mb-2">// projects</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3 tracking-tight">
            Projects
          </h1>
          <p className="text-[15px] sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            A selection of research, development, and contest-winning projects.
          </p>
        </div>

        {/* Tag filter bar */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedTags(new Set())}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 ${
              selectedTags.size === 0
                ? 'bg-foreground text-background'
                : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors duration-150 ${
                selectedTags.has(tag)
                  ? 'bg-accent text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground'
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.size > 0 && (
            <span className="text-xs text-muted-foreground ml-2">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
        {filteredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <Card
              spotlight
              className={`cursor-pointer h-full flex flex-col overflow-hidden ${!projectImages[project.id] ? 'border-l-2 border-l-accent/30' : ''}`}
              onClick={() => onProjectSelect(project.id)}
            >
              {projectImages[project.id] && (
                <div className="h-32 overflow-hidden bg-slate-100 dark:bg-slate-800/50">
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
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
