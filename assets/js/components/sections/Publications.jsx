import React, { useState } from 'react';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

const publications = [
  {
    id: 'eacl-2026-poaas',
    type: 'Workshop',
    title: 'POaaS: Minimal-Edit Prompt Optimization as a Service to Lift Accuracy and Cut Hallucinations on On-Device sLLMs',
    authors: 'Jungwoo Shim, Dae Won Kim, Sun Wook Kim, Soo Young Kim, Myungcheol Lee, Jae-geun Cha, Hyunhwa Choi',
    venue: 'FEVER Workshop at EACL 2026',
    year: 2026,
    description: 'A lightweight prompt-optimization layer for on-device small LLMs that improves task accuracy and reduces hallucinations without expensive prompt search.',
    link: '/assets/EACL_2026_Accepted_Paper.pdf',
    linkLabel: 'PDF',
    bibtex: `@inproceedings{shim2026poaas,
  title={POaaS: Minimal-Edit Prompt Optimization as a Service to Lift Accuracy and Cut Hallucinations on On-Device sLLMs},
  author={Shim, Jungwoo and Kim, Dae Won and Kim, Sun Wook and Kim, Soo Young and Lee, Myungcheol and Cha, Jae-geun and Choi, Hyunhwa},
  booktitle={Proceedings of the FEVER Workshop at EACL 2026},
  year={2026}
}`,
  },
  {
    id: 'patent-2024',
    type: 'Patent',
    title: 'Method, Device, and Program for Reducing Hallucination Errors in Language Models through Therapeutic Prompt Refinement',
    authors: 'Jungwoo Shim et al.',
    venue: 'KR Application No. 10-2024-0102366',
    year: 2024,
    description: 'A novel methodology to decrease hallucination errors in large language models by refining prompts therapeutically.',
    bibtex: null,
  },
  {
    id: 'ieee-smc-2024',
    type: 'Conference',
    title: 'CPR: Mitigating Large Language Model Hallucinations with Curative Prompt Refinement',
    authors: 'Jung-Woo Shim, Yeong-Joon Ju, Ji-Hoon Park, Seong-Whan Lee',
    venue: 'IEEE SMC 2024',
    year: 2024,
    description: 'Introduces a new approach to lessen hallucinations in large language models using curative prompt refinement techniques.',
    image: '/images/publicationImages/CPR.png',
    imageAlt: 'CPR Paper Figure',
    link: '/files/\uD559\uC220\uB300\uD68C(1).pdf',
    linkLabel: 'PDF',
    bibtex: `@inproceedings{shim2024cpr,
  title={CPR: Mitigating Large Language Model Hallucinations with Curative Prompt Refinement},
  author={Shim, Jung-Woo and Ju, Yeong-Joon and Park, Ji-Hoon and Lee, Seong-Whan},
  booktitle={IEEE International Conference on Systems, Man, and Cybernetics (SMC)},
  year={2024}
}`,
  },
  {
    id: 'pattern-recognition-2024',
    type: 'Under Review',
    title: 'Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models',
    authors: 'Jung-Woo Shim et al.',
    venue: 'Pattern Recognition',
    year: 2024,
    description: 'A comprehensive study on multi-stage prompt refinement techniques for reducing hallucinations in large language models.',
    image: '/images/publicationImages/MPR.png',
    imageAlt: 'Multi-stage Prompt Refinement Paper Figure',
    link: '/files/\uAC8C\uC7AC\uB17C\uBB38(1).pdf',
    linkLabel: 'PDF',
    bibtex: `@article{shim2024multistage,
  title={Multi-stage Prompt Refinement for Mitigating Hallucinations in Large Language Models},
  author={Shim, Jung-Woo and others},
  journal={Pattern Recognition (Under Review)},
  year={2024}
}`,
  },
];

const yearGroups = publications.reduce((groups, pub) => {
  if (!groups[pub.year]) groups[pub.year] = [];
  groups[pub.year].push(pub);
  return groups;
}, {});

const sortedYears = Object.keys(yearGroups).sort((a, b) => b - a);

const CopyBibtex = ({ bibtex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!bibtex) return null;

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground transition-colors"
      title="Copy BibTeX"
    >
      {copied ? (
        <>
          <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          copied
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          cite
        </>
      )}
    </button>
  );
};

const Publications = () => (
  <Container>
    <AnimatedSection>
      <div className="mb-12">
        <p className="code-label mb-2">// publications & patents</p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3 tracking-tight">
          Publications <span className="text-muted-foreground">&</span> Patents
        </h1>
        <p className="text-[15px] text-muted-foreground max-w-xl leading-relaxed">
          Research contributions including conference papers, journal submissions, and patents.
        </p>
      </div>
    </AnimatedSection>

    <div className="space-y-10">
      {sortedYears.map((year) => (
        <div key={year}>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-foreground font-mono">{year}</span>
              <div className="h-px flex-1 bg-slate-200/80 dark:bg-slate-800" />
            </div>
          </AnimatedSection>

          <StaggerContainer className="space-y-3" staggerDelay={0.08}>
            {yearGroups[year].map(pub => (
              <StaggerItem key={pub.id}>
                <Card spotlight className="overflow-hidden">
                  <div className={`grid grid-cols-1 ${pub.image ? 'md:grid-cols-4' : ''}`}>
                    {pub.image && (
                      <div className="md:col-span-1">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full min-h-[120px]">
                          <img src={pub.image} alt={pub.imageAlt || pub.title} className="w-full h-full object-cover" />
                        </a>
                      </div>
                    )}

                    <div className={pub.image ? "md:col-span-3" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Badge variant="outline" className="font-mono text-[10px]">{pub.type}</Badge>
                        </div>
                        <CardTitle className="text-sm leading-snug">{pub.title}</CardTitle>
                        {pub.authors && (
                          <p className="text-[11px] text-muted-foreground mt-1 font-mono">{pub.authors}</p>
                        )}
                        <p className="text-[11px] text-muted-foreground font-mono">{pub.venue}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{pub.description}</p>
                        <div className="flex items-center gap-2">
                          {pub.link && (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                              {pub.linkLabel || 'PDF'}
                            </a>
                          )}
                          <CopyBibtex bibtex={pub.bibtex} />
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      ))}
    </div>
  </Container>
);

export default Publications;
