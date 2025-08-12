# Hint

The hint component provides helpful guidance text for form fields and other UI elements.

## Usage

```svelte
<script>
  import { Hint } from '$lib/components';
</script>

<Hint text="Enter your name as it appears on your passport" />
```

## Examples

### Basic hint
Use hints to provide additional context or instructions for form fields.

### With HTML content
Use the `html` prop to include formatted text or links in your hint.

### Form field integration
Hints work best when paired with form labels and connected via `aria-describedby`.

### With error messages
Hints can coexist with error messages to provide both guidance and validation feedback.

## Accessibility

The hint component:
- Uses appropriate text color and size for secondary information
- Can be referenced by form controls using `aria-describedby`
- Supports both plain text and HTML content
- Maintains good contrast ratios for readability

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `text` | `string` | `undefined` | Plain text content |
| `html` | `string` | `undefined` | HTML content (takes precedence over text) |
| `id` | `string` | `undefined` | Unique identifier for the hint |
| `classes` | `string` | `''` | Additional CSS classes |
| `attributes` | `Record<string, string>` | `{}` | Additional HTML attributes |

## Design tokens

The component uses these design tokens:

- `text-sm` - Small text size for secondary information
- `text-base-content/70` - Muted text color for hints

## Related components

- [ErrorMessage](../error-message/+docs.md) - For validation error messages
- [Fieldset](../fieldset/+docs.md) - For grouping related form controls
- [Button](../button/+docs.md) - For form actions