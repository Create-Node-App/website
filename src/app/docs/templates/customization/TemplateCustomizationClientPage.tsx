'use client';

import { ArrowLeft, ArrowRight, FileCode, Layers, Package, Settings } from 'lucide-react';
import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TemplateCustomizationClientPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Template Customization</h1>
          <p className="text-lg text-muted-foreground">Learn how to customize templates to fit your specific needs</p>
        </div>

        <div className="space-y-8">
          <section id="customization-basics" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Customization Basics</h2>
            <p>
              Templates provided by create-awesome-node-app are designed to be customizable. This guide will show you
              how to modify templates to suit your specific requirements, from simple configuration changes to more
              advanced customizations.
            </p>

            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  Project Structure Customization
                </h3>
                <p>
                  After creating a project with create-awesome-node-app, you can modify its structure to better suit
                  your needs. Here are some common customizations:
                </p>

                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Reorganizing Components</h4>
                    <p className="text-sm text-muted-foreground">
                      You can reorganize the components directory structure to better match your project's architecture.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Adding New Directories</h4>
                    <p className="text-sm text-muted-foreground">
                      Create additional directories for features, contexts, hooks, or other code organization patterns.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Modifying the App Structure</h4>
                    <p className="text-sm text-muted-foreground">
                      Adjust the app directory structure to implement your desired routing and page organization.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Customizing Public Assets</h4>
                    <p className="text-sm text-muted-foreground">
                      Add or modify files in the public directory to include your own static assets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Configuration Customization
                </h3>
                <p>Templates come with default configurations that you can modify to match your requirements:</p>

                <Tabs defaultValue="tsconfig" className="w-full mt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tsconfig">tsconfig.json</TabsTrigger>
                    <TabsTrigger value="eslint">.eslintrc</TabsTrigger>
                    <TabsTrigger value="vite">vite.config.ts</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tsconfig" className="mt-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        {`{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    /* Paths */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`}
                      </pre>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      You can customize the TypeScript configuration to adjust compiler options, add path aliases, or
                      change included files.
                    </p>
                  </TabsContent>
                  <TabsContent value="eslint" className="mt-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        {`{
  "root": true,
  "env": { 
    "browser": true, 
    "es2020": true 
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "ignorePatterns": ["dist", ".eslintrc.cjs"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["react-refresh"],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "semi": false,
      "trailingComma": "all"
    }]
  }
}`}
                      </pre>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Modify ESLint configuration to adjust linting rules, add plugins, or change code style
                      preferences.
                    </p>
                  </TabsContent>
                  <TabsContent value="vite" className="mt-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        {`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})`}
                      </pre>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Customize Vite configuration to adjust build settings, add plugins, or configure the development
                      server.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Dependency Customization
                </h3>
                <p>You can add, remove, or update dependencies to tailor the project to your needs:</p>

                <div className="rounded-md bg-muted p-4 mt-4">
                  <pre className="text-sm overflow-x-auto">
                    {`# Add a new dependency
npm install axios

# Add a development dependency
npm install --save-dev jest @testing-library/react

# Update a dependency
npm update react

# Remove a dependency
npm uninstall unused-package`}
                  </pre>
                </div>

                <p className="mt-4">
                  After modifying dependencies, you may need to update your project's configuration files to properly
                  integrate the new packages.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Adding Extensions After Project Creation
                </h3>
                <p>
                  If you want to add extensions to an existing project created with create-awesome-node-app, you have a
                  few options:
                </p>

                <ol className="list-decimal pl-6 space-y-4 mt-4">
                  <li>
                    <strong>Manual Integration:</strong> You can manually add the files and dependencies from the
                    extension to your project.
                  </li>
                  <li>
                    <strong>Create a New Project:</strong> Create a new project with the same template and the desired
                    extensions, then migrate your code.
                  </li>
                  <li>
                    <strong>Use Git:</strong> If your project is a Git repository, you can create a new branch, add the
                    extension, and then merge the changes.
                  </li>
                </ol>

                <Alert className="mt-4">
                  <AlertTitle>Note</AlertTitle>
                  <AlertDescription>
                    Currently, create-awesome-node-app doesn't support adding extensions to existing projects through
                    the CLI. This feature may be added in future versions.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>

          <section id="template-specific-customization" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Template-Specific Customization</h2>
            <p>Different templates have specific customization options. Here are some examples:</p>

            <Tabs defaultValue="react" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="react">React Vite</TabsTrigger>
                <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                <TabsTrigger value="nestjs">NestJS</TabsTrigger>
              </TabsList>
              <TabsContent value="react" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">React Vite Boilerplate Customization</h3>
                  <p>The React Vite template provides several customization options:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Routing:</strong> The template uses React Router. You can modify the routes in{' '}
                      <code>src/App.tsx</code> or create a dedicated router configuration.
                    </li>
                    <li>
                      <strong>State Management:</strong> Add your preferred state management library using extensions
                      like Redux, Zustand, or Jotai.
                    </li>
                    <li>
                      <strong>Styling:</strong> The template supports CSS modules by default. You can add other styling
                      solutions like Tailwind CSS or styled-components.
                    </li>
                    <li>
                      <strong>API Integration:</strong> Add Axios or other HTTP clients for API integration.
                    </li>
                  </ul>
                  <div className="rounded-md bg-muted p-4 mt-4">
                    <pre className="text-sm overflow-x-auto">
                      {`// Example of customizing React Router in App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}`}
                    </pre>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="nextjs" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Next.js Starter Customization</h3>
                  <p>The Next.js template offers these customization options:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>App Router:</strong> The template uses Next.js App Router. You can customize the routing
                      by adding or modifying files in the <code>app</code> directory.
                    </li>
                    <li>
                      <strong>API Routes:</strong> Add or modify API routes in the <code>app/api</code> directory.
                    </li>
                    <li>
                      <strong>Styling:</strong> The template supports CSS modules. You can add other styling solutions
                      like Tailwind CSS.
                    </li>
                    <li>
                      <strong>Authentication:</strong> Integrate authentication solutions like NextAuth.js.
                    </li>
                  </ul>
                  <div className="rounded-md bg-muted p-4 mt-4">
                    <pre className="text-sm overflow-x-auto">
                      {`// Example of creating an API route in app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello World!' })
}

// Example of creating a new page in app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  )
}`}
                    </pre>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="nestjs" className="mt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">NestJS Boilerplate Customization</h3>
                  <p>The NestJS template provides these customization options:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Modules:</strong> Add new modules to organize your application features.
                    </li>
                    <li>
                      <strong>Controllers:</strong> Create controllers to define API endpoints.
                    </li>
                    <li>
                      <strong>Services:</strong> Implement business logic in services.
                    </li>
                    <li>
                      <strong>Database Integration:</strong> Add database support using extensions like Drizzle ORM or
                      Mongoose.
                    </li>
                  </ul>
                  <div className="rounded-md bg-muted p-4 mt-4">
                    <pre className="text-sm overflow-x-auto">
                      {`// Example of creating a new module
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}`}
                    </pre>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section id="advanced-customization" className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Customization</h2>
            <p>For more advanced customization needs, you can modify the core functionality of the template:</p>

            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Custom Build Configurations</h3>
                <p>You can customize the build process by modifying the build configuration files:</p>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>React Vite:</strong> Modify <code>vite.config.ts</code> to customize the build process.
                  </li>
                  <li>
                    <strong>Next.js:</strong> Customize <code>next.config.js</code> to adjust Next.js behavior.
                  </li>
                  <li>
                    <strong>NestJS:</strong> Modify <code>nest-cli.json</code> and <code>tsconfig.build.json</code> for
                    build customization.
                  </li>
                </ul>

                <div className="rounded-md bg-muted p-4 mt-4">
                  <pre className="text-sm overflow-x-auto">
                    {`// Example of customizing Next.js config
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Custom Webpack Configurations</h3>
                <p>For templates that use Webpack, you can customize the Webpack configuration:</p>

                <div className="rounded-md bg-muted p-4 mt-4">
                  <pre className="text-sm overflow-x-auto">
                    {`// Example of customizing Next.js Webpack config
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add a custom webpack plugin
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }))
    
    // Add a custom loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    
    return config
  },
}

module.exports = nextConfig`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Environment Variables</h3>
                <p>Customize your application's behavior using environment variables:</p>

                <div className="rounded-md bg-muted p-4 mt-4">
                  <pre className="text-sm overflow-x-auto">
                    {`# .env file example
API_URL=https://api.example.com
DEBUG=true
NODE_ENV=development

# For client-side variables in Next.js
NEXT_PUBLIC_SITE_URL=https://example.com`}
                  </pre>
                </div>

                <p className="mt-4">Access environment variables in your code:</p>

                <div className="rounded-md bg-muted p-4 mt-2">
                  <pre className="text-sm overflow-x-auto">
                    {`// In Node.js (server-side)
const apiUrl = process.env.API_URL

// In React (client-side)
// Note: In Vite, use import.meta.env instead of process.env
const siteUrl = import.meta.env.VITE_SITE_URL

// In Next.js (client-side)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-center mt-8">
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" asChild>
                <Link href="/docs/contributing">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Contributing
                </Link>
              </Button>
              <Button asChild>
                <Link href="/docs/advanced/usage">
                  Advanced Usage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
