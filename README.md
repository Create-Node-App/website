# Create Awesome Node App - Official Website

This is the official website for [Create Awesome Node App](https://www.npmjs.com/package/create-awesome-node-app), a tool that helps you quickly set up Node.js projects with best practices and modern tooling.

> [!TIP]
> This project was initialized with [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). **DO NOT USE THIS TEMPLATE DIRECTLY!** Instead, create your own project using the command and following the interactive menu options. For more information, refer to the documentation!

## Features

- ⚡️ **Instant HMR (Hot Module Replacement)** - Leveraging Next.js for fast refreshes and updates during development.
- ⚛ **React Integration** - Utilizes [React](https://reactjs.org/) for building the user interface.
- 🦾 **TypeScript Support** - Ensures type safety with [TypeScript](https://www.typescriptlang.org/).

## Extra Documentation

Discover more about the project structure, available scripts, and much more in the [docs](./docs) folder!

## Pre-packed Development Tools

- [TypeScript](https://www.typescriptlang.org/) - For type-safe code.
- [eslint](https://eslint.org/) - A linter tool for identifying and reporting on patterns in JavaScript and JSX.
- [prettier](https://prettier.io/) - An opinionated code formatter for clean and consistent code style.
- [husky](https://www.npmjs.com/package/husky) - Simplifies the use of Git hooks in your project.
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Allows running linters on git staged files to catch errors before they're committed.

## Quick Start

```sh
fnm use
pnpm install
pnpm run dev
```

## Development Workflow

For most development work, you'll primarily use `pnpm run dev`. However, you have additional scripts at your disposal for various tasks:

| pnpm run <script>  | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `npm run dev`      | Starts the local development server for building and previewing your application.                   |
| `npm run format`   | Formats the codebase using [Prettier](https://prettier.io/) to ensure consistent code styling.      |
| `npm run lint`     | Runs linting on the codebase to identify and report on patterns with [eslint](https://eslint.org/). |
| `npm run lint:fix` | Automatically fixes linting errors in the codebase where possible.                                  |

## Production

Scripts for preparing and viewing the production version:

| pnpm run <script> | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `npm run start`   | Serves your application using the production setup, ensuring it's ready for deployment.      |
| `npm run build`   | Compiles the application into the `dist/` directory, preparing it for production deployment. |

## Contributing

Bug reports, feature requests, and pull requests are welcome on the [Create-Node-App/website](https://github.com/Create-Node-App/website) repository!
