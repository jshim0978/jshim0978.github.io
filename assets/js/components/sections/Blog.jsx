import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';

const blogPosts = [
  {
    id: 'poaas-hallucinations',
    title: 'How POaaS Reduces Hallucinations on Small LLMs',
    date: 'Mar 2026',
    summary: 'An overview of our Prompt Optimization as a Service approach, which applies minimal-edit prompt refinement to lift accuracy and cut hallucinations on on-device small language models.',
    tags: ['LLM', 'Hallucination', 'Prompt Optimization', 'On-Device AI'],
    content: `
## The Problem

On-device small language models (sLLMs) are becoming increasingly important for privacy-preserving, low-latency AI applications. However, they suffer disproportionately from hallucinations compared to their larger counterparts. The root cause is straightforward: smaller models have less capacity to store and retrieve factual knowledge, making them more prone to generating plausible-sounding but incorrect information.

## Our Approach: POaaS

Prompt Optimization as a Service (POaaS) addresses this by applying **minimal-edit prompt refinement** — rather than rewriting entire prompts, we make surgical modifications that guide the model toward more faithful outputs.

The key insight is that small edits to prompts can yield outsized improvements in output quality. By analyzing failure patterns across sLLM responses, we identify specific prompt structures that trigger hallucinations and develop targeted fixes.

### How It Works

1. **Analyze** — We collect response patterns where sLLMs hallucinate and identify common prompt-level triggers.
2. **Refine** — We apply minimal edits to prompts: adding constraints, reformulating ambiguous queries, and inserting grounding context.
3. **Validate** — Each refined prompt is tested against a hallucination detection pipeline to measure improvement.
4. **Deploy** — Validated refinements are served as an API, enabling any application to benefit from optimized prompts without model changes.

## Key Results

Our experiments show that POaaS can significantly reduce hallucination rates on models like Phi-3-mini and Gemma-2B while requiring zero changes to model weights. This makes it practical for deployment scenarios where model fine-tuning is not feasible.

The paper was published at the FEVER Workshop at EACL 2026. Check the [Publications](#/publications) section for the full paper.
    `.trim(),
  },
  {
    id: 'lessons-eacl-2026',
    title: 'Lessons from Publishing at EACL 2026',
    date: 'Feb 2026',
    summary: 'Reflections on the process of getting a paper accepted at a top NLP venue — from initial idea to camera-ready submission.',
    tags: ['Research', 'Academic Writing', 'NLP'],
    content: `
## The Journey

Getting a paper accepted at a major NLP conference is a marathon, not a sprint. Here are my takeaways from the process of submitting to the FEVER Workshop at EACL 2026.

### Start with a Clear Problem Statement

The strongest feedback from reviewers consistently pointed to clarity of the problem definition. Before diving into methods, spend time precisely articulating:
- What gap exists in current approaches?
- Why does this matter practically?
- What would a good solution look like?

### Iterate on Experiments Early

We went through several rounds of experimental design before finding the right evaluation setup. The key lesson: **run small-scale experiments early** to validate your approach before committing to expensive full-scale evaluations.

### Writing is Rewriting

Our paper went through roughly 15 drafts. The first few were about getting ideas on paper. The middle drafts were about tightening the narrative. The final drafts were about precision — every sentence earning its place.

### Reviewer Feedback is Gold

Even negative reviews contain valuable insights. One reviewer's concern about our evaluation metrics led us to add an analysis that actually strengthened the paper considerably.

## Advice for First-Time Authors

1. **Read recent papers in your target venue** — understand the expected format, depth, and style.
2. **Get feedback early and often** — don't wait until the deadline to share drafts.
3. **Be honest about limitations** — reviewers respect intellectual honesty more than overclaiming.
4. **Budget time for camera-ready revisions** — the work isn't done at acceptance.
    `.trim(),
  },
  {
    id: 'prompt-engineering-tips',
    title: 'Prompt Engineering Tips for On-Device Models',
    date: 'Jan 2026',
    summary: 'Practical techniques for getting the best results from small language models running on edge devices.',
    tags: ['Prompt Engineering', 'On-Device AI', 'LLM', 'Tutorial'],
    content: `
## Why On-Device Models Need Different Prompts

Prompts optimized for GPT-4 or Claude often fail when used with smaller models (1-7B parameters). The reason: smaller models have narrower attention windows, less world knowledge, and are more sensitive to prompt formatting.

Here are practical techniques I've found effective through my research.

## Technique 1: Be Explicit, Not Implicit

Large models can infer intent from context. Small models need explicit instructions.

**Instead of:** "Summarize this article"

**Use:** "Read the following article. Write a 3-sentence summary that covers: (1) the main topic, (2) the key finding, and (3) why it matters."

## Technique 2: Constrain the Output Format

Small models benefit enormously from output format constraints:

- Specify exact output structure (JSON, numbered list, etc.)
- Set maximum length limits
- Provide a template when possible

## Technique 3: Break Complex Tasks into Steps

Rather than asking for a complex analysis in one shot, chain simple prompts:

1. First prompt: Extract key facts
2. Second prompt: Analyze relationships between facts
3. Third prompt: Generate final output

## Technique 4: Add Grounding Context

Small models hallucinate more when they need to rely on parametric knowledge. Always provide relevant context in the prompt rather than assuming the model "knows" facts.

## Technique 5: Test with Edge Cases

Small models fail in unexpected ways. Always test your prompts with:
- Very short inputs
- Very long inputs
- Ambiguous queries
- Out-of-domain content

These techniques form the foundation of our POaaS approach. For more details, see our [EACL 2026 paper](#/publications).
    `.trim(),
  },
];

const tagColors = {
  'LLM': 'border-l-sky-500',
  'Research': 'border-l-violet-500',
  'Prompt Engineering': 'border-l-emerald-500',
  'Tutorial': 'border-l-amber-500',
};

const allTags = [...new Set(blogPosts.flatMap(p => p.tags))].sort();

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  const filteredPosts = activeTag
    ? blogPosts.filter(p => p.tags.includes(activeTag))
    : blogPosts;

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <Container>
        <AnimatedSection>
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </button>

          <p className="code-label mb-2">// blog</p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
            <div className="flex flex-wrap gap-1">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-[10px] font-mono">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="prose-custom max-w-3xl">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-lg font-semibold text-foreground mt-8 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-base font-semibold text-foreground mt-6 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return (
                  <div key={i} className="flex items-start gap-2 ml-4 my-1">
                    <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{line.replace('- ', '')}</span>
                  </div>
                );
              }
              if (/^\d+\.\s/.test(line)) {
                const num = line.match(/^(\d+)\./)[1];
                const text = line.replace(/^\d+\.\s/, '');
                return (
                  <div key={i} className="flex items-start gap-2 ml-4 my-1">
                    <span className="text-xs font-mono text-accent mt-0.5 shrink-0">{num}.</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{renderInlineMarkdown(text)}</span>
                  </div>
                );
              }
              if (line.startsWith('**Instead of:**') || line.startsWith('**Use:**')) {
                return <p key={i} className="text-sm text-muted-foreground leading-relaxed my-1 ml-4 font-mono text-xs bg-slate-50 dark:bg-slate-800/30 rounded px-3 py-2">{renderInlineMarkdown(line)}</p>;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-2" />;
              }
              return <p key={i} className="text-sm text-muted-foreground leading-relaxed my-2">{renderInlineMarkdown(line)}</p>;
            })}
          </div>
        </AnimatedSection>
      </Container>
    );
  }

  return (
    <Container>
      <AnimatedSection>
        <div className="mb-8">
          <p className="code-label mb-2">// blog</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/30 text-violet-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              Technical <span className="gradient-text">Blog</span>
            </h1>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl">
            Thoughts on AI research, prompt engineering, and lessons learned along the way.
          </p>
        </div>
      </AnimatedSection>

      {/* Tag filter */}
      <AnimatedSection delay={0.05}>
        <div className="flex flex-wrap gap-1.5 mb-8">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
              activeTag === null
                ? 'bg-foreground text-background'
                : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeTag === tag
                  ? 'bg-foreground text-background'
                  : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Post list */}
      <AnimatedSection delay={0.1}>
        <StaggerContainer className="space-y-3" staggerDelay={0.08}>
          {filteredPosts.map(post => (
            <StaggerItem key={post.id}>
              <motion.div whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.995 }}>
                <Card
                  spotlight
                  className={`cursor-pointer border-l-2 ${tagColors[post.tags[0]] || 'border-l-accent'}`}
                  onClick={() => setSelectedPost(post.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                      <CardTitle className="text-sm hover:text-accent transition-colors">{post.title}</CardTitle>
                      <Badge variant="outline" className="font-mono text-[10px] shrink-0">{post.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{post.summary}</p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] font-mono">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>
    </Container>
  );
};

function renderInlineMarkdown(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} className="text-accent hover:underline">
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

export default Blog;
