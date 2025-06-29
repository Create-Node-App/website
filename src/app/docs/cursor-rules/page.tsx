import { ArrowRight, BookOpen, Code, FileCode, Lightbulb, Settings, Share2 } from 'lucide-react';
import Link from 'next/link';

import { AnimatedGradient } from '@/components/animated-gradient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CursorRulesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
            <AnimatedGradient />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 animate-gradient-text glow-text">
                  Cursor Rules
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enhance your development experience with context-aware assistance and best practices
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="backdrop-blur-sm bg-card/50 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Overview
                    </CardTitle>
                    <CardDescription>Understanding how Cursor Rules enhance your development workflow</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Cursor Rules are a powerful feature that enhances your development experience by providing
                      context-aware assistance and best practices for specific technologies and frameworks. These rules
                      are automatically applied when you install templates or extensions, creating a tailored
                      development environment for your project.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      How It Works
                    </CardTitle>
                    <CardDescription>Template and extension-specific rules in action</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Template Rules</h3>
                      <p>
                        When you create a new project using a template, Cursor automatically applies a set of predefined
                        rules specific to that template, helping you follow best practices and maintain consistent
                        patterns.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Extension Rules</h3>
                      <p>
                        As you add extensions to your project, Cursor dynamically incorporates additional rules specific
                        to each extension, providing specialized guidance and best practices.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCode className="h-5 w-5 text-primary" />
                      Rule Structure
                    </CardTitle>
                    <CardDescription>Understanding the components of a rule set</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Description: Defines the assistant's expertise and focus area</li>
                      <li>Guidelines: Specific best practices and implementation patterns</li>
                      <li>Anti-patterns: Common mistakes to avoid</li>
                      <li>Examples: Practical implementation examples</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Benefits
                    </CardTitle>
                    <CardDescription>How Cursor Rules improve your development process</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Contextual Assistance: Get relevant suggestions based on your stack</li>
                      <li>Consistent Development: Maintain uniform patterns across your team</li>
                      <li>Learning Support: Learn best practices as you code</li>
                      <li>Error Prevention: Avoid common mistakes with proactive guidance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Customization
                    </CardTitle>
                    <CardDescription>Tailoring rules to your team's needs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      You can customize these rules by modifying the{' '}
                      <code className="bg-muted px-1 py-0.5 rounded">.cursor/rules</code> directory in your project,
                      creating new rule sets, and extending existing rules to match your team's preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Share2 className="h-5 w-5 text-primary" />
                      Contributing
                    </CardTitle>
                    <CardDescription>Help improve Cursor Rules for everyone</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      We welcome contributions to improve our rule sets. If you have suggestions for new rules,
                      improvements, better examples, or additional anti-patterns, please submit a pull request to our
                      repository.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10">
                <h2 className="text-2xl font-bold mb-4">Example Rule Set</h2>
                <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
                  <code>{`---
description: You are an expert programming assistant that specializes in implementing and using Next.js applications with TypeScript and modern best practices.
globs: '**/*.{ts,tsx,js,jsx}'
---

# Next.js Rules

You are an expert in Next.js and follow these guidelines:
1. Always use TypeScript for type safety
2. Create components with clear, descriptive names
3. Use Next.js's App Router with proper TypeScript support
...`}</code>
                </pre>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-indigo-500 hover:from-primary/90 hover:to-indigo-500/90 glow transition-all duration-300"
                    asChild
                  >
                    <Link href="/templates">
                      Explore Templates
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-background/50 transition-all duration-300"
                    asChild
                  >
                    <Link href="/docs">View Documentation</Link>
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
