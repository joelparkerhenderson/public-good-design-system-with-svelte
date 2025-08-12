# Inset Text

The inset text component highlights important information that stands out from the main content.

## Usage

```svelte
<script>
  import { InsetText } from '$lib/components';
</script>

<InsetText text="Important information goes here" />
```

## Examples

### Basic inset text
Use inset text to highlight important information or key points.

### HTML content
Include formatted text with bold, italic, links, and other HTML elements.

### Rich content with snippets
Use snippet children to include complex layouts with lists, headings, and structured content.

### Custom styling
Apply additional CSS classes for different visual treatments or themes.

## Accessibility

The inset text component:
- Includes hidden "Information:" prefix for screen readers
- Uses semantic HTML structure
- Maintains good color contrast
- Supports keyboard navigation for interactive elements
- Works with screen reader announcements

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `text` | `string` | `undefined` | Plain text content |
| `html` | `string` | `undefined` | HTML content (takes precedence over text) |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `bg-base-200` - Background color for the inset area
- `border-l-4 border-primary` - Left border accent
- `p-4 my-4` - Padding and margin spacing
- `sr-only` - Screen reader only text

## Related components

- [Details](../details/+docs.md) - For collapsible information sections
- [DoDontList](../do-dont-list/+docs.md) - For structured guidance lists
- [Card](../card/+docs.md) - For contained content blocks
- [WarningCallout](../warning-callout/+docs.md) - For urgent warnings and alerts