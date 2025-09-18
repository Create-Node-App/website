import { ArrowRight, FileText, Shield, Sparkles, Workflow } from 'lucide-react';
import Link from 'next/link';

import { AnimatedGradient } from '@/components/animated-gradient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'AGENTS.md | Create Awesome Node App',
  description: 'Guide to the generated AGENTS.md contract for AI assistants.',
};

export default function AgentsMdPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
            <AnimatedGradient />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 animate-gradient-text">
                  AGENTS.md Contract
                </h1>
                <p className="max-w-2xl text-muted-foreground md:text-lg">
                  Each generated template now ships with an <code>AGENTS.md</code> file— a focused operating contract
                  for AI assistants (Cursor, Copilot Chat, PR bots) powered by{' '}
                  <a className="underline" href="https://agents.md" target="_blank" rel="noreferrer">
                    agents.md
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12 space-y-10">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="backdrop-blur-sm bg-card/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Purpose
                    </CardTitle>
                    <CardDescription>Separate human docs from AI guidance</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Humans read README + docs/*. AI assistants read AGENTS.md for rules, guardrails, and execution
                    steps.
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-card/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Guardrails
                    </CardTitle>
                    <CardDescription>Reduce hallucinations + unsafe changes</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Explicit refusal cases, escalation triggers, and validation reminders keep AI changes scoped + safe.
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-card/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-primary" />
                      Workflow
                    </CardTitle>
                    <CardDescription>Reinforce expected execution flow</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Encourages read-before-write, plan-before-apply, and explicit assumption surfacing.
                  </CardContent>
                </Card>
              </div>

              <Card className="backdrop-blur-sm bg-card/60 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Generated Example (React Template)
                  </CardTitle>
                  <CardDescription>
                    A trimmed example of the AGENTS.md shipped with a React Vite template.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs md:text-sm bg-background/50 p-4 rounded-lg overflow-x-auto leading-relaxed">
                    <code>{`# AGENTS.md – AI Interaction & Execution Guide (Human contributors: see CONTRIBUTING.md & docs/)

This file is intentionally scoped **only** for AI assistants (Cursor, Copilot Chat, PR automation bots).
Humans: read CONTRIBUTING.md and the documents under docs/.

## 1. Authoritative References (Never Reproduce Content Here)

| Topic | Source of Truth |
|-------|-----------------|
| Project architecture | docs/PROJECT_STRUCTURE.md |
| Component patterns | docs/COMPONENT_GUIDELINES.md |
| Performance guidance | docs/PERFORMANCE.md |
| State management approach | docs/STATE_MANAGEMENT.md |
| Styling + design system | docs/STYLING.md |
| Testing strategy | docs/TESTING.md |
| Accessibility notes | docs/ACCESSIBILITY.md |

## 2. Operating Principles (AI Perspective)

- Documentation-first
- Reuse-before-build
- Type safety always (no unvetted any)
- Deterministic, incremental changes
- Explicit assumption logging

## 3. AI Execution Protocol (React Feature Work)

When asked to add/modify UI logic:
1. Locate relevant feature folder (src/features/*) or propose new if justified
2. Read related docs/* referenced above
3. Prefer extending existing component patterns
4. Show proposed file tree + diff plan BEFORE writing code
5. After code: list follow-up validation steps (lint, type check, test)

## 4. Guardrails (Must Enforce)

- Do NOT fabricate file paths, component APIs, or library versions
- Do NOT remove existing accessibility props (aria-*, alt, role) without replacement rationale
- Do NOT introduce global mutable singletons for state—prefer documented patterns
- ALWAYS flag large dependency additions (>1 lib) for human confirmation
- ALWAYS surface potential performance regressions (unmemoized large lists, heavy renders)

## 5. Component Creation Checklist

- Typed props interface exported
- Meaningful name + colocated index.ts re-export (if pattern exists)
- Accessibility reviewed (labels, semantics)
- Story / example or usage snippet considered
- Test file added or explicitly deferred with reason

## 6. When the AI Should Ask or Refuse

Ask for clarification if: feature scope unclear, conflicting patterns, missing target directory.
Refuse if: asked to bypass validation, remove type safety, duplicate existing documented component.

## 7. Post-Change Assistant Report

Return a bullet summary:
- Files touched (concise)
- New dependencies (if any)
- Type/lint status
- Suggested manual QA steps
- Deferred items (tests, docs)

---
Maintained automatically by create-awesome-node-app React template provisioning.
Humans: stop reading—go to CONTRIBUTING.md + docs/.
`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/60">
                <CardHeader>
                  <CardTitle>Customizing Your AGENTS.md</CardTitle>
                  <CardDescription>Adapting for your team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Feel free to extend sections (Guardrails, Protocol, Refusal Conditions) but avoid duplicating rich
                    procedural docs—link to existing sources instead.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Add domain-specific escalation triggers (security, data, billing)</li>
                    <li>Reference internal design system docs instead of re-stating variants</li>
                    <li>
                      Include CI scripts or task runners (e.g. <code>pnpm test:unit</code>) if not obvious
                    </li>
                    <li>Keep tone imperative and concise—optimize for machine parsing + embedding</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-12 flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-semibold">Explore More</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline">
                    <Link href="/docs">
                      Back to Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/templates">
                      View Templates
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
