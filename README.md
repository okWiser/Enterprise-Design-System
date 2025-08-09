# Enterprise Design System

A premium, scalable component library built with React, TypeScript, and Storybook, designed for micro-frontend architecture.

## Architecture

- **@enterprise/tokens** - Design tokens (colors, typography, spacing)
- **@enterprise/core** - Core React components with Storybook
- **@enterprise/icons** - SVG icon components

## Quick Start

```bash
# Install dependencies
npm install

# Install Lerna globally
npm install -g lerna

# Bootstrap packages
lerna bootstrap

# Build all packages
npm run build

# Start Storybook
npm run storybook
```

## Development

```bash
# Watch mode for all packages
npm run dev

# Run type checking
npm run type-check

# Lint code
npm run lint
```

## Micro-Frontend Ready

Each package is built with Webpack and can be consumed independently in micro-frontend architectures. The components are designed to be:

- **Scalable** - Modular architecture with clear separation of concerns
- **Consistent** - Built on a foundation of design tokens
- **Accessible** - Following WCAG guidelines
- **Performant** - Optimized bundles with tree-shaking support

## Usage

```tsx
import { Button } from '@enterprise/core';
import { ChevronDown } from '@enterprise/icons';

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me <ChevronDown size={16} />
    </Button>
  );
}
```