import { ArrowRight, Layers, Server, Sparkles, Workflow } from 'lucide-react';
import Link from 'next/link';
import { CopyButton } from '@/components/copy-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const recipes = [
  {
    title: 'Modern SPA',
    description: 'React + Vite with Tailwind and Zustand for a fast client app.',
    icon: Layers,
    command:
      'npm create awesome-node-app@latest my-spa -- --template react-vite-boilerplate --addons tailwind-css zustand --no-interactive',
    href: '/templates/react-vite-boilerplate',
  },
  {
    title: 'Full-stack web',
    description: 'Next.js with Auth.js and Drizzle for a production app foundation.',
    icon: Workflow,
    command:
      'npm create awesome-node-app@latest my-app -- --template nextjs-starter --addons nextjs-auth nextjs-drizzle-postgres --no-interactive',
    href: '/templates/nextjs-starter',
  },
  {
    title: 'API platform',
    description: 'NestJS with Docker and GitHub Actions for a shippable backend.',
    icon: Server,
    command:
      'npm create awesome-node-app@latest my-api -- --template nestjs-boilerplate --addons docker-compose-setup github-setup --no-interactive',
    href: '/templates/nestjs-boilerplate',
  },
  {
    title: 'SaaS + AI flagship',
    description: 'Multi-tenant Next.js SaaS with AI, Auth, and pgvector built in.',
    icon: Sparkles,
    command: 'npm create awesome-node-app@latest my-saas -- --template nextjs-saas-ai-starter --no-interactive',
    href: '/templates/nextjs-saas-ai-starter',
  },
];

export function RecipesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Popular recipes</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-600">
              Choose a path. Ship faster.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Curated template + addon combinations with copy-paste commands.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {recipes.map((recipe) => {
            const Icon = recipe.icon;
            return (
              <Card
                key={recipe.title}
                className="flex flex-col border-primary/10 bg-card/80 backdrop-blur gradient-border-subtle hover-raise"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gradient-to-br from-amber-500/20 to-teal-600/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{recipe.title}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-md p-3 font-mono text-xs sm:text-sm overflow-x-auto text-left">
                    <code className="text-teal-700 dark:text-teal-300 whitespace-pre-wrap break-all">
                      {recipe.command}
                    </code>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                  <CopyButton command={recipe.command} size="sm" className="w-full sm:w-auto" />
                  <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                    <Link href={recipe.href}>
                      View template
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
