# Panel

The panel component displays important information in a prominent container with a title and body content.

## Usage

```svelte
<script>
  import { Panel } from '$lib/components';
</script>

<Panel 
  titleText="Your appointment is confirmed"
  text="We've sent you a confirmation email with all the details."
/>
```

## Examples

### Basic panel
Display important information with a title and text content.

### HTML content
Include formatted text, links, and other HTML elements in the panel content.

### Different heading levels
Customize the heading level based on the page structure and hierarchy.

### Rich content
Use snippet children to include complex layouts, lists, buttons, and structured content.

### Custom styling
Apply additional CSS classes for different visual treatments or themes.

## Accessibility

The panel component:
- Uses semantic heading elements (h1-h6) for the title
- Supports proper heading hierarchy with customizable levels
- Maintains good color contrast with primary color background
- Works with screen readers and keyboard navigation
- Provides clear visual prominence for important information

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `titleText` | `string` | `undefined` | Plain text title |
| `titleHtml` | `string` | `undefined` | HTML title content |
| `text` | `string` | `undefined` | Plain text body content |
| `html` | `string` | `undefined` | HTML body content |
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Heading level for the title |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `bg-primary text-primary-content` - Primary color background and text
- `p-6 rounded-lg shadow-lg` - Padding, border radius, and shadow
- `text-3xl font-bold mb-4` - H1 title styling
- `text-2xl font-bold mb-4` - H2 title styling
- Responsive heading sizes for different levels

## When to use

Use panels for:
- Important confirmations (appointments, registrations)
- Success messages and notifications
- Key information that needs prominence
- Call-to-action sections
- Service announcements

## Related components

- [NotificationBanner](../notification-banner/+docs.md) - For temporary alerts and messages
- [Card](../card/+docs.md) - For general content containers
- [InsetText](../inset-text/+docs.md) - For highlighted information within content
- [Details](../details/+docs.md) - For collapsible information sections