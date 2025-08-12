# Images

The images component provides semantic image display with optional captions and responsive image support.

## Usage

```svelte
<script>
  import { Images } from '$lib/components';
</script>

<Images 
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  caption="Optional image caption"
/>
```

## Examples

### Basic image
Display an image with required src and alt attributes.

### Image with caption
Add a caption using the caption prop to provide additional context.

### Responsive images
Use srcset and sizes attributes for responsive images that adapt to different screen sizes.

### Custom styling
Apply additional CSS classes for borders, shadows, or other visual effects.

## Accessibility

The images component:
- Uses semantic `<figure>` and `<figcaption>` elements
- Requires descriptive alt text for screen readers
- Supports responsive images with proper fallbacks
- Maintains good contrast for captions
- Works with keyboard navigation

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `src` | `string` | Required | Image source URL |
| `alt` | `string` | Required | Alternative text for accessibility |
| `caption` | `string` | `undefined` | Optional image caption |
| `sizes` | `string` | `undefined` | Sizes attribute for responsive images |
| `srcset` | `string` | `undefined` | Srcset attribute for responsive images |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `w-full h-auto` - Responsive image sizing
- `rounded-lg shadow-sm` - Default image styling
- `text-sm text-base-content/70 mt-2 italic` - Caption styling

## Related components

- [Card](../card/+docs.md) - For images within card layouts
- [Hero](../hero/+docs.md) - For large promotional images
- [ContentsList](../contents-list/+docs.md) - For images in content navigation