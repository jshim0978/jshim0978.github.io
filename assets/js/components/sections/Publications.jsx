import React from 'react';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const publications = [
  {
    id: 'patent-2024',
    type: 'Patent',
    title: 'Method, Device, and Program for Reducing Hallucination Errors in Language Models through Therapeutic Prompt Refinement',
    subTitle: 'KR Application No. 10-2024-0102366 · Filed: August 1, 2024',
    year: 2024,
    description: 'Developed a novel methodology to decrease hallucination errors in large language models by refining prompts therapeutically.'
  },
  {
    id: 'ieee-smc-2024',
    type: 'Conference Paper',
    title: 'CPR: Mitigating Large Language Model Hallucinations with Curative Prompt Refinement',
    subTitle: 'Accepted at IEEE International Conference on Systems, Man, and Cybernetics (SMC 2024)',
    year: 2024,
    description: 'This paper introduces a new approach to lessen hallucinations in large language models using curative prompt refinement techniques.',
    image: '/images/publicationImages/CPR.png',
    imageAlt: 'CPR Paper Figure',
    link: '/files/학술대회(1).pdf',
    linkLabel: 'View Paper (PDF)'
  },
  {
    id: 'pattern-recognition-2024',
    type: 'Journal Submission',
    title: 'Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models',
    subTitle: 'Submitted to Pattern Recognition (Under Review)',
    year: 2024,
    description: 'A comprehensive study on multi-stage prompt refinement techniques for reducing hallucinations in large language models.',
    image: '/images/publicationImages/MPR.png',
    imageAlt: 'Multi-stage Prompt Refinement Paper Figure',
    link: '/files/게재논문(1).pdf',
    linkLabel: 'View Paper (PDF)'
  },
];

const Publications = () => (
  <Container>
    <div className="mb-16 text-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4 font-heading tracking-tight">
        Publications & Patents
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        My research contributions, including conference papers, journal submissions, and patents.
      </p>
    </div>

    <div className="space-y-8">
      {publications.map(pub => (
        <Card key={pub.id} className="overflow-hidden hover:shadow-xl hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pub.image && (
              <div className="md:col-span-1">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img src={pub.image} alt={pub.imageAlt || pub.title} className="w-full h-full object-cover" />
                </a>
              </div>
            )}
            
            <div className={pub.image ? "md:col-span-2" : "md:col-span-3"}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Badge variant="secondary">{pub.type}</Badge>
                  <span className="text-sm text-muted-foreground">{pub.year}</span>
                </div>
                <CardTitle>{pub.title}</CardTitle>
                <CardDescription className="pt-2">{pub.subTitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pub.description}</p>
                {pub.link && (
                  <Button asChild variant="link" className="p-0 h-auto text-sm inline-flex items-center gap-1.5">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-primary dark:text-accent hover:underline gap-1"
                    >
                      {pub.linkLabel || 'View PDF'}
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                  </Button>
                )}
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Container>
);

export default Publications; 