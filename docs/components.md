# Component Documentation

## Button

### Props
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean (default: false)

### Usage
```tsx
import { Button } from '@enterprise/core';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
```

## Card

### Props
- `padding`: 'sm' | 'md' | 'lg' (default: 'md')
- `children`: ReactNode

### Usage
```tsx
import { Card } from '@enterprise/core';

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

## Input

### Props
- `variant`: 'outline' | 'filled' (default: 'outline')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `error`: boolean (default: false)

### Usage
```tsx
import { Input } from '@enterprise/core';

<Input placeholder="Enter text..." />
<Input variant="filled" />
<Input error />
```