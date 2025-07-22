import React from 'react';
import Container from '@/components/shared/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Home = ({ onNavigate }) => {
  return (
    <Container>
      <br/><br/>
      <div className="text-center mb-24 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 mx-auto mb-2">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-md border border-white dark:border-gray-800 ring-1 ring-primary/20 dark:ring-accent/20"
          />
          <div className="absolute inset-0 rounded-full bg-primary-gradient opacity-10" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4 tracking-tight text-center">
          Jungwoo Shim
        </h1>
        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto text-center">
          AI Researcher at ETRI | M.S. in Artificial Intelligence
        </p>
      </div>
      <br/><br/>
      <Card className="mb-24">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-heading mt-16">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            I am an AI Researcher at ETRI, passionate about pushing the boundaries of artificial intelligence. My research focuses on mitigating hallucinations in large language models through multi-stage prompt refinement. I thrive on transforming innovative ideas into practical, real-world solutions.
          </p>
        </CardContent>
      </Card>
      <br/><br/>
      <div className="mb-24 pt-24">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">Explore My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NavCard
            title="Projects"
            description="Explore my latest projects and research."
            icon="🚀"
            onClick={() => onNavigate && onNavigate('projects')}
          />
          <NavCard
            title="Experience"
            description="View my professional journey and education."
            icon="💼"
            onClick={() => onNavigate && onNavigate('experience')}
          />
          <NavCard
            title="Publications"
            description="See my research papers and patents."
            icon="📄"
            onClick={() => onNavigate && onNavigate('publications')}
          />
        </div>
      </div>
    </Container>
  );
};

const NavCard = ({ icon, title, description, onClick }) => (
  <Card
    className="text-center flex flex-col"
  >
    <CardHeader>
      <div className="text-4xl mb-4 mx-auto">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter>
      <Button onClick={onClick} className="w-full" variant="view">
        View
      </Button>
    </CardFooter>
  </Card>
);

export default Home; 