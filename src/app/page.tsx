import { ArrowRight, Code, Package, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { AnimatedGradient } from '@/components/animated-gradient';
import { FeaturedTemplate } from '@/components/featured-template';
import { ParticlesBackground } from '@/components/particles-background';
import { TemplateCategories } from '@/components/template-categories';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getTemplatesData } from '@/lib/data';

export default async function Home() {
  const { templates, categories } = await getTemplatesData();

  // Get 3 featured templates (or fewer if there aren't enough)
  const featuredTemplates = templates.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* New Feature Banner */}
        <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 animate-gradient-x"></div>
          <div className="container px-4 md:px-6 flex items-center justify-center gap-2 relative z-10">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              <Sparkles className="h-5 w-5 animate-pulse text-yellow-300" />
              <span className="font-semibold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                NEW
              </span>
            </div>
            <span className="text-sm md:text-base">
              Built-in AGENTS.md contract for AI assistant guidance in every template!
              <Link
                href="/docs/agents-md"
                className="ml-2 inline-flex items-center gap-1 underline hover:text-white/80 transition-colors group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </span>
          </div>
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 z-0">
            <ParticlesBackground />
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)] z-10" />

          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16 relative z-20">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-purple-500 animate-gradient-text glow-text fade-in-up">
                    Create Awesome Node App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl fade-in-up-delay-1">
                    Discover templates and extensions to jumpstart your next project. Mix and match to create the
                    perfect foundation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row fade-in-up-delay-2">
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
                    <Link href="/extensions">Browse Extensions</Link>
                  </Button>
                </div>
              </div>

              {/* Updated card showcase with better positioning */}
              <div className="hidden md:flex items-center justify-center fade-in-up-delay-3">
                <div className="relative w-full h-[350px] perspective-800">
                  {/* First card - positioned slightly to the right and up */}
                  <div className="absolute inset-0 flex items-center justify-center translate-x-20 -translate-y-6">
                    <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-indigo-500/30 rounded-xl backdrop-blur-sm border border-primary/30 shadow-xl rotate-3 transform-gpu transition-transform duration-500 hover:rotate-6 hover:scale-105 floating">
                      <div className="p-6 h-full flex flex-col">
                        <Code className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-semibold">React Vite</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Modern React setup with Vite, TypeScript, and more
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second card - positioned in the center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-xl backdrop-blur-sm border border-indigo-500/30 shadow-xl transform-gpu transition-transform duration-500 hover:scale-105 floating-delay">
                      <div className="p-6 h-full flex flex-col">
                        <Package className="h-8 w-8 text-indigo-500 mb-4" />
                        <h3 className="text-lg font-semibold">NestJS API</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Enterprise-ready Node.js server with TypeScript
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Third card - positioned slightly to the left and down */}
                  <div className="absolute inset-0 flex items-center justify-center -translate-x-20 translate-y-6">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl backdrop-blur-sm border border-purple-500/30 shadow-xl -rotate-3 transform-gpu transition-transform duration-500 hover:-rotate-6 hover:scale-105 floating-slow">
                      <div className="p-6 h-full flex flex-col">
                        <Code className="h-8 w-8 text-purple-500 mb-4" />
                        <h3 className="text-lg font-semibold">Next.js Starter</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Full-stack React framework with SSR and API routes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
            <AnimatedGradient />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm backdrop-blur-sm">
                  Featured Templates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 glow-text">
                  Start with the Best
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most popular templates to kickstart your development
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredTemplates.length > 0 ? (
                featuredTemplates.map((template, index) => (
                  <div key={template.slug} className={`fade-in-up-delay-${(index % 3) + 1}`}>
                    <FeaturedTemplate
                      name={template.name}
                      slug={template.slug}
                      description={template.description}
                      type={template.type}
                      category={template.category}
                      labels={template.labels}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-muted-foreground">No templates found. Please check back later.</p>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-background/50 transition-all duration-300"
                asChild
              >
                <Link href="/templates">
                  View All Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Categories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 glow-text">
                  Find Your Perfect Stack
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse templates by category to find exactly what you need
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TemplateCategories categories={categories} />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
            <AnimatedGradient />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm backdrop-blur-sm">
                    How It Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 glow-text">
                    Build Your App in Minutes
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Select a template, add extensions, and generate your project with a single command.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    variant="outline"
                    className="backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-background/50 transition-all duration-300"
                    asChild
                  >
                    <Link href="/docs">
                      Read the Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full backdrop-blur-sm bg-card/50 border-primary/10 gradient-border shimmer">
                  <CardHeader>
                    <CardTitle>Create Your Project</CardTitle>
                    <CardDescription>Use the CLI to generate your app</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                      <p className="text-green-500">$ npx create-awesome-node-app my-app \</p>
                      <p className="pl-4">--template react-vite-boilerplate \</p>
                      <p className="pl-4">--addons material-ui github-setup</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      This will create a React app with Material UI, GitHub setup, and an autogenerated AGENTS.md
                      contract for AI assistants
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParticlesBackground particleCount={30} speed={0.3} />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 animate-gradient-text glow-text">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our templates and extensions to build your next awesome Node.js app
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
                  <Link href="/extensions">Browse Extensions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
