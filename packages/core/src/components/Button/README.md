# Button Component

A versatile button component with multiple variants and sizes.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `children` | `ReactNode` | - | Button content |
| `onClick` | `() => void` | - | Click handler |

## Usage

```tsx
import { Button } from '@enterprise/core';

// Primary button
<Button variant="primary">Click me</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Outline button
<Button variant="outline">Learn more</Button>

// Small button
<Button size="sm">Small</Button>

// Disabled button
<Button disabled>Disabled</Button>
```

## Examples

### Basic Usage
```tsx
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### Form Submit
```tsx
<Button type="submit" variant="primary">
  Submit Form
</Button>
```