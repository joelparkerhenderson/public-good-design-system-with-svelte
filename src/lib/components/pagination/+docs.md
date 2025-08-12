# Pagination

The pagination component provides navigation between related pages in a series, typically used for multi-page articles or step-by-step guides.

## Usage

```svelte
<script>
  import { Pagination } from '$lib/components';
</script>

<Pagination 
  previousUrl="/page1"
  previousPage="Previous page title"
  nextUrl="/page3"
  nextPage="Next page title"
/>
```

## Examples

### Basic pagination
Navigate between pages with both previous and next links.

### Previous only
Show only the previous page link when at the end of a series.

### Next only
Show only the next page link when at the beginning of a series.

### Content integration
Use within article layouts and content blocks for seamless navigation.

## Accessibility

The pagination component:
- Uses semantic `<nav>` element with proper navigation role
- Includes `aria-label` for screen reader context
- Provides clear link text with page titles
- Uses visually hidden separators for screen readers
- Maintains proper focus management
- Works with keyboard navigation

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `previousUrl` | `string` | `undefined` | URL for the previous page |
| `previousPage` | `string` | `undefined` | Title/name of the previous page |
| `nextUrl` | `string` | `undefined` | URL for the next page |
| `nextPage` | `string` | `undefined` | Title/name of the next page |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `btn btn-outline` - Button styling from DaisyUI
- `flex items-center gap-2` - Button layout
- `text-sm` - Label text size
- `font-semibold` - Page title weight
- `w-5 h-5` - Icon sizing
- `sr-only` - Screen reader only content

## Layout

The pagination uses a flex layout with:
- Previous link aligned to the left
- Next link aligned to the right
- Empty placeholders maintain layout when only one link is present
- Responsive design adapts to smaller screens

## Related components

- [Breadcrumb](../breadcrumb/+docs.md) - For hierarchical navigation
- [ContentsList](../contents-list/+docs.md) - For page-level navigation within guides
- [BackLink](../back-link/+docs.md) - For simple back navigation
- [Button](../button/+docs.md) - For general action buttons